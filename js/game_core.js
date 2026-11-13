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
function initAudio() { if (!audioCtx && AudioContext) audioCtx = new AudioContext(); }

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

// This gauge estimates picture *content coverage*, never grammatical correctness.
// A concept is counted once even if many synonymous words are recognized.
function updateCoverageDisplay(rawText) {
    const text = typeof rawText === 'string' ? rawText.trim() : '';
    if (!text) {
        categoryHits = { gist: 0, setting: 0, mood: 0 };
        alreadyHitWords = [];
        setGauge(0, '#1a1a1a');
        return;
    }
    const matchedConcepts = new Set();
    const foundBuckets = new Set();
    scoringTargets.forEach(target => {
        if (target.earnedPoints <= 0) return;
        matchedConcepts.add(target.id);
        foundBuckets.add(target.bucket);
    });
    const weights = { gist: 40, setting: 35, mood: 25 };
    const broad = Object.keys(weights).reduce((sum, bucket) =>
        sum + (foundBuckets.has(bucket) ? weights[bucket] : 0), 0);
    const depth = Math.min(1, matchedConcepts.size / 6);
    const wordCount = (text.match(/[A-Za-z]+(?:['’][A-Za-z]+)?/g) || []).length;
    const hasPredicate = /\b(?:am|is|are|was|were|has|have|had|can|will|would|should|looks?|seems?|stands?|sits?|holds?|walks?|runs?|drinks?|reads?|opens?|plays?|wears?|working|looking|standing|sitting|holding|walking|drinking|reading|opening)\b/i.test(text);
    const hasCompleteForm = wordCount >= 6 && hasPredicate && /[.!?]["'’]?$/.test(text);
    // Meaningfulness is heuristic: perfect coverage does NOT certify correct English.
    let coverage = Math.round(broad * (0.55 + 0.45 * depth));
    if (!hasCompleteForm || foundBuckets.size < 3) coverage = Math.min(coverage, 79);
    const color = coverage >= 85 ? '#10b981' : coverage >= 50 ? '#3b82f6' : '#c2872d';
    setGauge(Math.max(0, Math.min(100, coverage)), color);
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

// Never rewrite contenteditable.innerHTML while a student types.
// Previously it broke IME composition/caret placement and interpreted typed HTML.

function normalizeTokens(value) {
    return String(value || '').toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g) || [];
}
function matchesOneSentence(phrase, sentences) {
    const target = normalizeTokens(phrase);
    const stops = new Set(['a','an','the','is','are','was','were','in','on','at','of','for','to','with','it','we','they','he','she','by','and']);
    const important = target.filter(w => !stops.has(w));
    if (important.length === 0) return false;
    return sentences.some(sentence => {
        const words = normalizeTokens(sentence);
        // Strongly prefer exact phrase matches; tolerate reordered content words
        // only when more than one meaningful word supports the concept.
        if (target.length <= words.length) {
            for (let i = 0; i <= words.length - target.length; i++) {
                if (target.every((w,j) => words[i+j] === w)) return true;
            }
        }
        if (important.length < 2) return target.length === 1 && words.includes(important[0]);
        const present = important.filter(word => words.includes(word)).length;
        return present >= 2 && (present / important.length) >= .8;
    });
}
userInput.addEventListener('input', () => {
    const text = userInput.innerText || '';
    const sentences = text.split(/[.!?;\n]+/).filter(part => part.trim().length > 0);
    const before = new Set(scoringTargets.filter(t => t.earnedPoints > 0).map(t => t.id));
    const matched = new Map();
    const foundWords = new Set();
    scoringTargets.forEach(target => {
        const hit = matchesOneSentence(target.targetPhrase, sentences);
        target.earnedPoints = hit ? target.weight : 0;
        if (hit) {
            if (!matched.has(target.bucket)) matched.set(target.bucket, new Set());
            matched.get(target.bucket).add(target.id);
            normalizeTokens(target.targetPhrase).filter(w => w.length >= 4).forEach(w => foundWords.add(w));
        }
    });
    categoryHits = {
        gist: matched.has('gist') ? matched.get('gist').size : 0,
        setting: matched.has('setting') ? matched.get('setting').size : 0,
        mood: matched.has('mood') ? matched.get('mood').size : 0
    };
    alreadyHitWords = Array.from(foundWords).slice(0, 40);
    currentEarnedScore = scoringTargets.reduce((n,t) => n+t.earnedPoints, 0);
    updateCoverageDisplay(text);
    updateFocusButtonStyles();
    const after = new Set(scoringTargets.filter(t => t.earnedPoints > 0).map(t => t.id));
    if (Array.from(after).some(id => !before.has(id))) {
        try { initAudio(); playHitSound(false); } catch (_) { /* audio is optional */ }
        userInput.classList.add('hit-flash');
        setTimeout(() => userInput.classList.remove('hit-flash'), 180);
    }
});
