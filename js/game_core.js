/**
 * game_core.js
 * タイピング判定、カバレッジ計算、スコアリング、音声エフェクト
 */

let scoringTargets = [];
let maxScore = 0;
let categoryHits = { gist: 0, setting: 0, details: 0 };
let alreadyHitWords = []; 
const LIGHT_THRESHOLD = 3;
let currentEarnedScore = 0;
let currentStep = 1; 
let totalSteps = 3;  
let isFormatting = false;

const userInput = document.getElementById('user-input');
const liveScoreDisplay = document.getElementById('live-score');
const assistantMessage = document.getElementById('assistant-message'); 

const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function initAudio() { if (!audioCtx) audioCtx = new AudioContext(); }

function playHitSound(isActivation = false) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = 'sine';
    
    if (isActivation) {
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); 
        osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); 
        osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2); 
        gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
        osc.start(); osc.stop(audioCtx.currentTime + 0.5);
    } else {
        osc.frequency.setValueAtTime(880, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1760, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
        osc.start(); osc.stop(audioCtx.currentTime + 0.2);
    }
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
}

function setupGameData() {
    scoringTargets = []; maxScore = 0; categoryHits = { gist: 0, setting: 0, details: 0 };
    if (cafeData.core_svo_targets) totalSteps = cafeData.core_svo_targets.length;

    cafeData.elements.forEach(el => {
        let bucket = 'details', svoRole = null; 
        const isPrimary = el.importance === 'primary';
        const weight = isPrimary ? 10 : 3;

        if (el.category === 'person') { bucket = 'gist'; svoRole = 'subject'; } 
        else if (isPrimary && el.category === 'food_and_drink') { bucket = 'gist'; svoRole = 'object'; } 
        else if (['architecture', 'place', 'furniture', 'equipment'].includes(el.category)) { bucket = 'setting'; } 
        else if (['nature', 'decoration', 'lighting', 'environment', 'sign'].includes(el.category) || (!isPrimary && el.category === 'object')) { bucket = 'details'; }

        const wordsArray = el.accepted_words || el.synonyms_and_related_words || [];

        scoringTargets.push({
            id: el.id, label: el.label, label_ja: el.label_ja, 
            bucket: bucket, svoRole: svoRole, words: wordsArray.map(w => w.toLowerCase()),
            weight: weight, hit: false
        });
        maxScore += weight;
    });

    cafeData.actions_analysis.forEach(action => {
        const wordsArray = action.accepted_words || action.synonyms || [];
        scoringTargets.push({
            id: action.id, label: 'Action', label_ja: action.description_ja || action.description, 
            bucket: 'gist', svoRole: 'verb', words: wordsArray.map(p => p.toLowerCase()),
            weight: 10, hit: false
        });
        maxScore += 10;
    });
    
    if (cafeData.overall_mood) {
        cafeData.overall_mood.forEach(mood => {
            scoringTargets.push({
                id: 'mood_' + mood, label: 'Mood', label_ja: '雰囲気 (' + mood + ')', 
                bucket: 'details', svoRole: null, words: [mood.toLowerCase()],
                weight: 2, hit: false
            });
            maxScore += 2;
        });
    }
}

function updateCoverageDisplay() {
    const targetScore = maxScore * 0.6; 
    const coveragePercent = Math.min(100, Math.floor((currentEarnedScore / targetScore) * 100));
    liveScoreDisplay.innerHTML = `${coveragePercent}<span class="pts">%</span>`;
    const offset = 125.6 - (125.6 * (coveragePercent / 100));
    const gaugePath = document.getElementById('gauge-fill-path');
    if(gaugePath) gaugePath.style.strokeDashoffset = offset;
}

function boldMatchedWords() {
    let htmlContent = userInput.innerText; 
    alreadyHitWords.forEach(word => {
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

function checkAndSuggestTypos(inputText) {
    let typoFound = null; let correctWord = null;
    const allItems = [...(cafeData.elements || []), ...(cafeData.actions_analysis || [])];

    for (const item of allItems) {
        if (item.common_typos) {
            for (const typo of item.common_typos) {
                const regex = new RegExp(`\\b${typo}\\b`, 'i');
                if (regex.test(inputText)) {
                    typoFound = typo;
                    correctWord = item.accepted_words[0]; 
                    break;
                }
            }
        }
        if (typoFound) break;
    }

    if (assistantMessage) {
        if (typoFound) {
            assistantMessage.innerHTML = `⚠️ 惜しい！もしかして <strong>${correctWord}</strong> のスペルミス（${typoFound}）ですか？`;
            assistantMessage.style.backgroundColor = "#fffbeb";
            assistantMessage.style.borderColor = "#f59e0b";
            assistantMessage.style.color = "#b45309";
        } else {
            assistantMessage.style.backgroundColor = "transparent";
            assistantMessage.style.borderColor = "#e0e0e0";
            assistantMessage.style.color = "#111111";
        }
    }
}

// ユーザーのタイピングイベント
userInput.addEventListener('input', () => {
    if (isFormatting) return; 
    initAudio();
    
    const rawText = userInput.innerText.toLowerCase();
    const text = rawText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    const words = text.split(/\s+/);
    let newHitFound = false;

    checkAndSuggestTypos(rawText);

    scoringTargets.forEach(target => {
        if (!target.hit) {
            let matchedString = null;
            const hasMatch = target.words.some(targetWord => {
                if (targetWord.includes(' ')) {
                    const phraseParts = targetWord.split(' ');
                    return phraseParts.every(part => {
                        return words.some(w => {
                            if (w === part) return true;
                            if (part.length >= 3 && w.startsWith(part)) return true;
                            if (w.length >= 3 && part.startsWith(w)) return true;
                            return false;
                        });
                    });
                } else {
                    return words.some(w => {
                        if (w === targetWord) return true;
                        if (targetWord.length >= 3 && w.startsWith(targetWord)) return true;
                        if (w.length >= 3 && targetWord.startsWith(w)) return true;
                        return false;
                    });
                }
            });

            if (hasMatch && !matchedString) matchedString = target.words[0].split(' ')[0]; 

            if (hasMatch && matchedString) {
                target.hit = true;
                newHitFound = true;
                currentEarnedScore += target.weight;
                categoryHits[target.bucket]++;
                
                if (!alreadyHitWords.includes(matchedString)) alreadyHitWords.push(matchedString);
                
                updateCoverageDisplay();
                createGoldOverlayFromTarget(target);

                userInput.classList.add('hit-flash');
                setTimeout(() => userInput.classList.remove('hit-flash'), 200);
            }
        }
    });

    if (newHitFound) {
        updateGlowAndButtons();
        playHitSound(false); 
        isFormatting = true;
        boldMatchedWords();
        isFormatting = false;
    }
});

const skipBtn = document.getElementById('skip-step-btn');
if(skipBtn) {
    skipBtn.addEventListener('click', () => {
        let targetBucket = 'gist';
        if (categoryHits.gist >= LIGHT_THRESHOLD) targetBucket = 'setting';
        if (categoryHits.setting >= LIGHT_THRESHOLD && categoryHits.gist >= LIGHT_THRESHOLD) targetBucket = 'details';

        const unhitTargets = scoringTargets.filter(t => t.bucket === targetBucket && !t.hit);
        if (unhitTargets.length === 0) return;

        const target = unhitTargets[0];
        target.hit = true;
        categoryHits[target.bucket]++;
        currentEarnedScore += target.weight;
        createGoldOverlayFromTarget(target); 

        playHitSound(true); 
        updateCoverageDisplay();
        updateGlowAndButtons();
        userInput.focus();
    });
}