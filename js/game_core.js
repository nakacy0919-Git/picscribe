/**
 * game_core.js
 * タイピング判定、カバレッジ計算（3要素で必ず100%）、サウンド再生
 */

let scoringTargets = [];
let maxScore = 0;
let categoryHits = { gist: 0, setting: 0, mood: 0 }; 
let alreadyHitWords = []; 
const CLEAR_THRESHOLD = 1; 
let currentEarnedScore = 0;
let isFormatting = false;

const userInput = document.getElementById('user-input');
const liveScoreDisplay = document.getElementById('live-score');

// --- オーディオ設定 ---
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function initAudio() { if (!audioCtx) audioCtx = new AudioContext(); }

function playHitSound(isPerfect = false) {
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    if (isPerfect) {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1046.50, audioCtx.currentTime); 
        osc.frequency.setValueAtTime(1318.51, audioCtx.currentTime + 0.05); 
        osc.frequency.setValueAtTime(1567.98, audioCtx.currentTime + 0.1); 
    } else {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, audioCtx.currentTime); 
        osc.frequency.exponentialRampToValueAtTime(1760, audioCtx.currentTime + 0.1);
    }
    
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.4);
}

// --- データセットアップ（Moodデータを完全復旧・大文字小文字に対応） ---
function setupGameData() {
    scoringTargets = []; maxScore = 0; categoryHits = { gist: 0, setting: 0, mood: 0 };
    if (!cafeData) return;

    // 1. Elementsの読み込み
    if (cafeData.elements) {
        cafeData.elements.forEach(el => {
            let bucket = 'setting';
            const isPrimary = el.importance === 'primary';
            // ★ 大文字小文字の差異をなくすために小文字に統一
            const cat = (el.category || '').toLowerCase();

            if (cat === 'person' || cat === 'animal' || (isPrimary && cat === 'food_and_drink')) { 
                bucket = 'gist'; 
            } else if (['nature', 'decoration', 'lighting', 'environment', 'sign', 'mood', 'atmosphere', 'abstract'].includes(cat) || (!isPrimary && cat === 'object')) { 
                bucket = 'mood'; 
            }

            const wordsArray = el.accepted_words || el.synonyms_and_related_words || [];
            wordsArray.forEach(w => {
                const wordCount = w.split(' ').length;
                let weight = wordCount >= 4 ? 10 : (wordCount >= 2 ? 6 : 3);
                scoringTargets.push({ id: el.id, bucket: bucket, targetPhrase: w.toLowerCase(), weight: weight, earnedPoints: 0 });
                maxScore += weight; 
            });
        });
    }

    // 2. Actionsの読み込み
    if (cafeData.actions_analysis) {
        cafeData.actions_analysis.forEach(action => {
            const wordsArray = action.accepted_words || action.synonyms || [];
            wordsArray.forEach(p => {
                const wordCount = p.split(' ').length;
                let weight = wordCount >= 3 ? 10 : 6;
                scoringTargets.push({ id: action.id, bucket: 'gist', targetPhrase: p.toLowerCase(), weight: weight, earnedPoints: 0 });
                maxScore += weight;
            });
        });
    }

    // ★ 3. 消失していた Overall Mood の読み込みを復活！
    if (cafeData.overall_mood) {
        cafeData.overall_mood.forEach(mood => {
            const wordCount = mood.split(' ').length;
            let weight = wordCount >= 3 ? 10 : (wordCount >= 2 ? 6 : 4);
            scoringTargets.push({ id: 'mood_' + mood, bucket: 'mood', targetPhrase: mood.toLowerCase(), weight: weight, earnedPoints: 0 });
            maxScore += weight;
        });
    }
}

// --- カバレッジと文章ルール・3要素網羅の厳格な判定 ---
function updateCoverageDisplay(rawText) {
    const targetScore = maxScore * 0.12; 
    let baseCoverage = Math.floor((currentEarnedScore / targetScore) * 100);

    const words = rawText.trim().split(/\s+/);
    const hasCapital = /^[A-Z]/.test(rawText.trim());
    const hasPeriod = /[.!?]/.test(rawText.trim()); 
    const isValidSentence = hasCapital && hasPeriod && words.length >= 3;

    const allCategoriesHit = (categoryHits.gist >= CLEAR_THRESHOLD && categoryHits.setting >= CLEAR_THRESHOLD && categoryHits.mood >= CLEAR_THRESHOLD);

    let finalCoverage = baseCoverage;

    if (isValidSentence && allCategoriesHit) {
        finalCoverage = 100;
    } else if (!isValidSentence) {
        finalCoverage = Math.min(finalCoverage, 50); 
    } else {
        finalCoverage = Math.min(finalCoverage, 95); 
    }

    if (finalCoverage > 100) finalCoverage = 100;

    liveScoreDisplay.innerHTML = `${finalCoverage}<span class="pts">%</span>`;
    const offset = 125.6 - (125.6 * (finalCoverage / 100));
    const gaugePath = document.getElementById('gauge-fill-path');
    
    if(gaugePath) {
        gaugePath.style.strokeDashoffset = offset;
        gaugePath.style.transition = "stroke-dashoffset 0.5s ease-out, stroke 0.5s ease";
        
        if (finalCoverage === 100) {
            gaugePath.style.stroke = "#10b981"; 
        } else if (isValidSentence && finalCoverage > 50) {
            gaugePath.style.stroke = "#3b82f6"; 
        } else if (!isValidSentence && baseCoverage > 50) {
            gaugePath.style.stroke = "#f59e0b"; 
        } else {
            gaugePath.style.stroke = "#1a1a1a"; 
        }
    }
}

function updateFocusButtonStyles() {
    if (categoryHits.gist >= CLEAR_THRESHOLD) document.querySelector('.gist-btn')?.classList.add('mission-completed');
    if (categoryHits.setting >= CLEAR_THRESHOLD) document.querySelector('.setting-btn')?.classList.add('mission-completed');
    if (categoryHits.mood >= CLEAR_THRESHOLD) document.querySelector('.mood-btn')?.classList.add('mission-completed');
}

function boldMatchedWords() {
    let htmlContent = userInput.innerText; 
    const wordsToHighlight = alreadyHitWords.filter(w => w.length > 3 || w === 'cup' || w === 'bun');
    
    wordsToHighlight.forEach(word => {
        const regex = new RegExp(`\\b(${word})\\b`, 'gi');
        htmlContent = htmlContent.replace(regex, `<span class="matched-word">$1</span>`);
    });
    userInput.innerHTML = htmlContent;
    placeCaretAtEnd(userInput);
}

function placeCaretAtEnd(el) {
    el.focus();
    if (typeof window.getSelection !== "undefined" && typeof document.createRange !== "undefined") {
        const range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }
}

// --- タイピング判定ロジック ---
userInput.addEventListener('input', () => {
    if (isFormatting) return; 
    initAudio(); 
    
    const rawText = userInput.innerText;
    // ★ ピリオドやカンマを「スペース」に置換し、単語が記号と癒着しないように修正
    const textForTyping = rawText.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ");
    const inputWords = textForTyping.split(/\s+/);
    
    let newHitFound = false;
    let perfectHitFound = false;

    const stopWords = ['a', 'an', 'the', 'is', 'are', 'was', 'were', 'in', 'on', 'at', 'of', 'for', 'to', 'with', 'it', 'we', 'they', 'he', 'she'];

    scoringTargets.forEach(target => {
        if (target.earnedPoints >= target.weight) return;

        const targetWords = target.targetPhrase.split(' ');
        let sigWords = targetWords.filter(w => !stopWords.includes(w));
        if (sigWords.length === 0) sigWords = targetWords; 

        let matchCount = 0;

        sigWords.forEach(tw => {
            if (inputWords.includes(tw)) {
                matchCount++;
                if (!alreadyHitWords.includes(tw)) alreadyHitWords.push(tw);
            }
        });

        const matchRatio = matchCount / sigWords.length;
        let pointsToAward = 0;

        if (matchRatio >= 0.75) {
            pointsToAward = target.weight;
            perfectHitFound = true;
        } else if (matchRatio >= 0.40) {
            pointsToAward = target.weight * 0.5;
        }

        if (pointsToAward > target.earnedPoints) {
            currentEarnedScore += (pointsToAward - target.earnedPoints);
            target.earnedPoints = pointsToAward;

            if (matchRatio >= 0.40) {
                categoryHits[target.bucket]++; 
            }

            newHitFound = true;
            userInput.classList.add('hit-flash');
            setTimeout(() => userInput.classList.remove('hit-flash'), 200);
        }
    });

    updateCoverageDisplay(rawText);

    if (newHitFound) {
        updateFocusButtonStyles(); 
        playHitSound(perfectHitFound); 
        isFormatting = true;
        try {
            boldMatchedWords();
        } finally {
            isFormatting = false;
        }
    }
});