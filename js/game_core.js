/**
 * game_core.js
 * タイピング判定、カバレッジ計算（undefinedエラー回避付き）、カーソル位置保持
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

// ★修正：cafeData固定ではなく、現在選択されているシーンのデータを使用する
function setupGameData() {
    scoringTargets = []; maxScore = 0; categoryHits = { gist: 0, setting: 0, mood: 0 };
    
    const currentData = window.currentSceneData;
    if (!currentData) return;

    if (currentData.elements) {
        currentData.elements.forEach(el => {
            let bucket = 'setting'; 
            const isPrimary = el.importance === 'primary';
            const cat = (el.category || '').toLowerCase();
            const name = (el.name || '').toLowerCase();

            if (cat === 'person' || cat === 'animal' || cat === 'people' || (isPrimary && cat === 'food_and_drink')) { 
                bucket = 'gist'; 
            } else if (['lighting', 'environment', 'decoration', 'mood', 'atmosphere', 'nature', 'abstract', 'weather'].includes(cat) || 
                       name.includes('sunlight') || name.includes('light') || name.includes('atmosphere') || name.includes('mood')) { 
                bucket = 'mood'; 
            }

            let wordsArray = [];
            ['accepted_words', 'synonyms_and_related_words', 'synonyms', 'useful_phrases', 'phrases', 'expressions', 'sentences'].forEach(key => {
                if (Array.isArray(el[key])) {
                    wordsArray = wordsArray.concat(el[key]);
                }
            });
            wordsArray = [...new Set(wordsArray)];

            wordsArray.forEach(w => {
                let cleanPhrase = w.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ").replace(/\s{2,}/g, " ").trim();
                if (!cleanPhrase) return;
                const wordCount = cleanPhrase.split(' ').length;
                let weight = wordCount >= 4 ? 10 : (wordCount >= 2 ? 6 : 3);
                scoringTargets.push({ id: el.id, bucket: bucket, targetPhrase: cleanPhrase, weight: weight, earnedPoints: 0 });
                maxScore += weight; 
            });
        });
    }

    if (currentData.actions_analysis) {
        currentData.actions_analysis.forEach(action => {
            let wordsArray = [];
            ['accepted_words', 'synonyms', 'phrases', 'useful_phrases', 'expressions'].forEach(key => {
                if (Array.isArray(action[key])) wordsArray = wordsArray.concat(action[key]);
            });
            wordsArray = [...new Set(wordsArray)];
            wordsArray.forEach(p => {
                let cleanPhrase = p.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ").replace(/\s{2,}/g, " ").trim();
                if (!cleanPhrase) return;
                const wordCount = cleanPhrase.split(' ').length;
                let weight = wordCount >= 3 ? 10 : 6;
                scoringTargets.push({ id: action.id, bucket: 'gist', targetPhrase: cleanPhrase, weight: weight, earnedPoints: 0 });
                maxScore += weight;
            });
        });
    }

    if (currentData.overall_mood) {
        currentData.overall_mood.forEach(mood => {
            let cleanPhrase = mood.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ").replace(/\s{2,}/g, " ").trim();
            if (!cleanPhrase) return;
            const wordCount = cleanPhrase.split(' ').length;
            let weight = wordCount >= 3 ? 10 : (wordCount >= 2 ? 6 : 4);
            scoringTargets.push({ id: 'mood_' + mood, bucket: 'mood', targetPhrase: cleanPhrase, weight: weight, earnedPoints: 0 });
            maxScore += weight;
        });
    }
}

function updateCoverageDisplay(rawText) {
    if (typeof rawText !== 'string') {
        rawText = '';
    }

    if (rawText.trim() === '') {
        currentEarnedScore = 0;
        categoryHits = { gist: 0, setting: 0, mood: 0 };
        alreadyHitWords = [];
        scoringTargets.forEach(t => t.earnedPoints = 0);
        updateFocusButtonStyles(); 
        setGauge(0, "#1a1a1a");
        return;
    }

    const targetScore = maxScore * 0.12; 
    let baseCoverage = Math.floor((currentEarnedScore / targetScore) * 100);
    const textTrimmed = rawText.trim();
    const words = textTrimmed.split(/\s+/);
    const hasCapital = /[A-Z]/.test(textTrimmed);
    const hasPeriod = /[.!?]/.test(textTrimmed); 
    const hasOneValidSentence = hasCapital && hasPeriod && words.length >= 3;
    const isTextCompleted = /[.!?]$/.test(textTrimmed);
    const allCategoriesHit = (categoryHits.gist >= CLEAR_THRESHOLD && categoryHits.setting >= CLEAR_THRESHOLD && categoryHits.mood >= CLEAR_THRESHOLD);

    let finalCoverage = baseCoverage;

    if (!hasOneValidSentence) {
        finalCoverage = Math.min(finalCoverage, 50); 
    } else {
        if (allCategoriesHit) {
            if (isTextCompleted) {
                finalCoverage = 100; 
            } else {
                finalCoverage = 95;  
            }
        } else {
            finalCoverage = Math.min(finalCoverage, 80); 
        }
    }

    if (finalCoverage > 100) finalCoverage = 100;
    let color = "#1a1a1a";
    if (finalCoverage === 100) color = "#10b981"; 
    else if (hasOneValidSentence && finalCoverage > 50) color = "#3b82f6"; 
    else if (!hasOneValidSentence && baseCoverage > 50) color = "#f59e0b"; 
    setGauge(finalCoverage, color);
}

function setGauge(coverage, color) {
    liveScoreDisplay.innerHTML = `${coverage}<span class="pts">%</span>`;
    const offset = 125.6 - (125.6 * (coverage / 100));
    const gaugePath = document.getElementById('gauge-fill-path');
    if(gaugePath) {
        gaugePath.style.strokeDashoffset = offset;
        gaugePath.style.transition = "stroke-dashoffset 0.5s ease-out, stroke 0.5s ease";
        gaugePath.style.stroke = color;
    }
}

function updateFocusButtonStyles() {
    const gistBtn = document.querySelector('.gist-btn');
    if (gistBtn) categoryHits.gist >= CLEAR_THRESHOLD ? gistBtn.classList.add('mission-completed') : gistBtn.classList.remove('mission-completed');
    const settingBtn = document.querySelector('.setting-btn');
    if (settingBtn) categoryHits.setting >= CLEAR_THRESHOLD ? settingBtn.classList.add('mission-completed') : settingBtn.classList.remove('mission-completed');
    const moodBtn = document.querySelector('.mood-btn');
    if (moodBtn) categoryHits.mood >= CLEAR_THRESHOLD ? moodBtn.classList.add('mission-completed') : moodBtn.classList.remove('mission-completed');
}

function saveCaretPosition(context) {
    const selection = window.getSelection();
    if (selection.rangeCount === 0) return 0;
    const range = selection.getRangeAt(0);
    const preCaretRange = range.cloneRange();
    preCaretRange.selectNodeContents(context);
    preCaretRange.setEnd(range.endContainer, range.endOffset);
    return preCaretRange.toString().length;
}

function restoreCaretPosition(context, caretPos) {
    const selection = window.getSelection();
    const range = document.createRange();
    let charIndex = 0;
    let nodeStack = [context];
    let node;
    let foundStart = false;
    let stop = false;
    range.setStart(context, 0);
    range.collapse(true);

    while (!stop && (node = nodeStack.pop())) {
        if (node.nodeType === 3) { 
            const nextCharIndex = charIndex + node.length;
            if (!foundStart && caretPos >= charIndex && caretPos <= nextCharIndex) {
                range.setStart(node, caretPos - charIndex);
                range.setEnd(node, caretPos - charIndex);
                stop = true;
            }
            charIndex = nextCharIndex;
        } else {
            let i = node.childNodes.length;
            while (i--) { nodeStack.push(node.childNodes[i]); }
        }
    }
    selection.removeAllRanges();
    selection.addRange(range);
}

function boldMatchedWords() {
    const caretPos = saveCaretPosition(userInput);
    let htmlContent = userInput.innerText; 
    const wordsToHighlight = alreadyHitWords.filter(w => w.length > 3 || w === 'cup' || w === 'bun');
    wordsToHighlight.forEach(word => {
        const regex = new RegExp(`\\b(${word})\\b`, 'gi');
        htmlContent = htmlContent.replace(regex, `<span class="matched-word">$1</span>`);
    });
    userInput.innerHTML = htmlContent;
    restoreCaretPosition(userInput, caretPos);
}

userInput.addEventListener('input', () => {
    if (isFormatting) return; 
    initAudio(); 
    const rawText = userInput.innerText;
    const textForTyping = rawText.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ");
    const inputWords = textForTyping.split(/\s+/);
    
    let tempCategoryHits = { gist: 0, setting: 0, mood: 0 };
    let tempEarnedScore = 0;
    let newHitFound = false;
    let perfectHitFound = false;

    const stopWords = ['a', 'an', 'the', 'is', 'are', 'was', 'were', 'in', 'on', 'at', 'of', 'for', 'to', 'with', 'it', 'we', 'they', 'he', 'she'];

    scoringTargets.forEach(target => {
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
            if (pointsToAward > target.earnedPoints) perfectHitFound = true;
        } else if (matchRatio >= 0.40) {
            pointsToAward = target.weight * 0.5;
        }
        if (pointsToAward > 0) {
            tempEarnedScore += pointsToAward;
            if (matchRatio >= 0.40) tempCategoryHits[target.bucket]++; 
        }
        if (pointsToAward > target.earnedPoints) {
            newHitFound = true;
            userInput.classList.add('hit-flash');
            setTimeout(() => userInput.classList.remove('hit-flash'), 200);
        }
        target.earnedPoints = pointsToAward;
    });
    currentEarnedScore = tempEarnedScore;
    categoryHits = tempCategoryHits;
    updateCoverageDisplay(rawText);
    updateFocusButtonStyles(); 

    if (newHitFound) {
        playHitSound(perfectHitFound); 
        isFormatting = true;
        try { boldMatchedWords(); } finally { isFormatting = false; }
    }
});