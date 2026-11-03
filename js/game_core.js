/**
 * Picture Description: one concept earns credit once, regardless of how many
 * synonyms it has. Coverage indicates pictured concepts mentioned in a
 * complete-looking sentence; it is NOT grammar or writing-quality scoring.
 */
let scoringTargets = [];
let maxScore = 0;
let categoryHits = {gist: 0, setting: 0, mood: 0};
let alreadyHitWords = [];
const CLEAR_THRESHOLD = 1;
let currentEarnedScore = 0;
let isFormatting = false;

const userInput = document.getElementById('user-input');
const liveScoreDisplay = document.getElementById('live-score');
const AudioContextClass = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function initAudio() {
    if (!audioCtx && AudioContextClass) {
        try { audioCtx = new AudioContextClass(); } catch (error) { /* optional sound */ }
    }
}
function playHitSound(isPerfect = false) {
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = isPerfect ? 'sine' : 'triangle';
    osc.frequency.setValueAtTime(isPerfect ? 1046.5 : 880, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(isPerfect ? 1567.98 : 1760, audioCtx.currentTime + 0.1);
    gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
    osc.connect(gainNode); gainNode.connect(audioCtx.destination);
    osc.start(); osc.stop(audioCtx.currentTime + 0.25);
}

function makeAlternatives(entry, keys) {
    const values = [];
    keys.forEach(key => {
        if (Array.isArray(entry[key])) values.push(...entry[key]);
    });
    if (typeof entry.label === 'string') values.push(entry.label);
    const result = new Set();
    values.forEach(value => {
        if (typeof value !== 'string') return;
        const phrase = PicScribeScoring.normalizeWords(value);
        if (phrase && phrase.length <= 120) result.add(phrase);
    });
    return [...result];
}

function setupGameData() {
    scoringTargets = [];
    maxScore = 0;
    categoryHits = {gist: 0, setting: 0, mood: 0};
    const currentData = window.currentSceneData;
    if (!currentData) return;
    (currentData.elements || []).forEach((element, index) => {
        const cat = String(element.category || '').toLowerCase();
        const name = String(element.name || '').toLowerCase();
        let bucket = 'setting';
        if (['person','animal','people'].includes(cat) ||
            (element.importance === 'primary' && cat === 'food_and_drink')) {
            bucket = 'gist';
        } else if (['lighting','environment','decoration','mood','atmosphere','nature',
                    'abstract','weather'].includes(cat) ||
                    /sunlight|light|atmosphere|mood/.test(name)) {
            bucket = 'mood';
        }
        const phrases = makeAlternatives(element,
            ['accepted_words','synonyms_and_related_words','synonyms',
             'useful_phrases','phrases','expressions','sentences']);
        if (phrases.length) scoringTargets.push({
            id: 'element-' + (element.id || index), bucket, phrases
        });
    });
    (currentData.actions_analysis || []).forEach((action, index) => {
        const phrases = makeAlternatives(action,
            ['accepted_words','synonyms','phrases','useful_phrases','expressions']);
        if (phrases.length) scoringTargets.push({
            id: 'action-' + (action.id || index), bucket: 'gist', phrases
        });
    });
    (currentData.overall_mood || []).forEach((mood, index) => {
        if (typeof mood !== 'string') return;
        const phrase = PicScribeScoring.normalizeWords(mood);
        if (phrase) scoringTargets.push({
            id: 'mood-' + index, bucket: 'mood', phrases: [phrase]
        });
    });
    maxScore = scoringTargets.length;
}

function setGauge(coverage) {
    if (liveScoreDisplay) {
        liveScoreDisplay.innerHTML = coverage + '<span class="pts">%</span>';
    }
    const gaugePath = document.getElementById('gauge-fill-path');
    if (gaugePath) {
        gaugePath.style.strokeDashoffset = 125.6 * (1 - coverage / 100);
        gaugePath.style.stroke = coverage === 100 ? '#10b981' :
            coverage > 50 ? '#3b82f6' : '#1a1a1a';
    }
}

function updateFocusButtonStyles() {
    ['gist','setting','mood'].forEach(bucket => {
        const button = document.querySelector('.' + bucket + '-btn');
        if (button) button.classList.toggle('mission-completed',
            categoryHits[bucket] >= CLEAR_THRESHOLD);
    });
}

function updateCoverageDisplay(rawText) {
    const assessment = PicScribeScoring.assessCoverage(scoringTargets,
        typeof rawText === 'string' ? rawText : '');
    categoryHits = assessment.categoryHits;
    currentEarnedScore = assessment.matchedTargets.length;
    setGauge(assessment.coverage);
    updateFocusButtonStyles();
    return assessment;
}

function saveCaretPosition(context) {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return context.innerText.length;
    const range = selection.getRangeAt(0);
    if (!context.contains(range.startContainer)) return context.innerText.length;
    const prefix = range.cloneRange();
    prefix.selectNodeContents(context);
    prefix.setEnd(range.startContainer, range.startOffset);
    return prefix.toString().length;
}

function restoreCaretPosition(context, caretPos) {
    const selection = window.getSelection();
    if (!selection) return;
    const range = document.createRange();
    const walker = document.createTreeWalker(context, NodeFilter.SHOW_TEXT);
    let node, offset = 0, last = null;
    while ((node = walker.nextNode())) {
        last = node;
        if (caretPos <= offset + node.textContent.length) {
            range.setStart(node, Math.max(0, caretPos - offset));
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
            return;
        }
        offset += node.textContent.length;
    }
    if (last) range.setStart(last, last.textContent.length);
    else range.setStart(context, 0);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
}

function boldMatchedWords() {
    const visibleText = userInput.innerText;
    const caretPosition = saveCaretPosition(userInput);
    const words = [...new Set(alreadyHitWords)]
        .filter(word => /^[a-z0-9']{3,}$/i.test(word))
        .sort((a, b) => b.length - a.length);
    if (!words.length) {
        userInput.textContent = visibleText;
        restoreCaretPosition(userInput, caretPosition);
        return;
    }
    const escapeRegex = text => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp('\\b(' + words.map(escapeRegex).join('|') + ')\\b', 'gi');
    const fragment = document.createDocumentFragment();
    let cursor = 0;
    for (const match of visibleText.matchAll(pattern)) {
        fragment.appendChild(document.createTextNode(visibleText.slice(cursor, match.index)));
        const span = document.createElement('span');
        span.className = 'matched-word';
        span.textContent = match[0];
        fragment.appendChild(span);
        cursor = match.index + match[0].length;
    }
    fragment.appendChild(document.createTextNode(visibleText.slice(cursor)));
    userInput.replaceChildren(fragment);
    restoreCaretPosition(userInput, caretPosition);
}

if (userInput) {
    userInput.addEventListener('input', event => {
        if (isFormatting) return;
        initAudio();
        const previousWords = alreadyHitWords.join('|');
        const assessment = updateCoverageDisplay(userInput.innerText);
        alreadyHitWords = [...new Set(
            assessment.matchedPhrases.flatMap(phrase => PicScribeScoring.tokenize(phrase))
        )].filter(word => word.length >= 3);
        if (previousWords !== alreadyHitWords.join('|') && !event.isComposing) {
            playHitSound(assessment.coverage === 100);
            isFormatting = true;
            try { boldMatchedWords(); } finally { isFormatting = false; }
        }
    });
    userInput.addEventListener('compositionend', () => {
        const assessment = updateCoverageDisplay(userInput.innerText);
        alreadyHitWords = [...new Set(assessment.matchedPhrases
            .flatMap(phrase => PicScribeScoring.tokenize(phrase)))];
        isFormatting = true;
        try { boldMatchedWords(); } finally { isFormatting = false; }
    });
}
