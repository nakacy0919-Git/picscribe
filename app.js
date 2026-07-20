// ==========================================
// PicScribe - Main Application Logic
// ==========================================

let scoringTargets = [];
let maxScore = 0;
let categoryHits = { gist: 0, setting: 0, details: 0 };
let alreadyHitWords = []; 
const LIGHT_THRESHOLD = 3;

const targetImage = document.getElementById('target-image');
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');
const resultArea = document.getElementById('result-area');
const liveScoreDisplay = document.getElementById('live-score');

const overlaysContainer = document.getElementById('overlays-container');
const imageArea = document.getElementById('image-area'); 
const supportSwitch = document.getElementById('support-switch');
const hintLevelSelect = document.getElementById('hint-level-select');
const hintContent = document.getElementById('hint-content');
const hintTitle = document.getElementById('hint-title');
let currentEarnedScore = 0;

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

    cafeData.elements.forEach(el => {
        let bucket = 'details', svoRole = null; 
        const isPrimary = el.importance === 'primary';
        const weight = isPrimary ? 10 : 3;

        if (el.category === 'person') { bucket = 'gist'; svoRole = 'subject'; } 
        else if (isPrimary && el.category === 'food_and_drink') { bucket = 'gist'; svoRole = 'object'; } 
        else if (['architecture', 'place', 'furniture', 'equipment'].includes(el.category)) { bucket = 'setting'; } 
        else if (['nature', 'decoration', 'lighting', 'environment', 'sign'].includes(el.category) || (!isPrimary && el.category === 'object')) { bucket = 'details'; }

        scoringTargets.push({
            id: el.id, label: el.label, label_ja: el.label_ja, 
            bucket: bucket, svoRole: svoRole, words: el.synonyms_and_related_words.map(w => w.toLowerCase()),
            weight: weight, hit: false
        });
        maxScore += weight;
    });

    cafeData.actions_analysis.forEach(action => {
        scoringTargets.push({
            id: action.id, label: 'Action', label_ja: action.description_ja, 
            bucket: 'gist', svoRole: 'verb', words: action.synonyms.map(p => p.toLowerCase()),
            weight: 10, hit: false
        });
        maxScore += 10;
    });
    
    cafeData.overall_mood.forEach(mood => {
        scoringTargets.push({
            id: 'mood_' + mood, label: 'Mood', label_ja: '雰囲気 (' + mood + ')', 
            bucket: 'details', svoRole: null, words: [mood.toLowerCase()],
            weight: 2, hit: false
        });
        maxScore += 2;
    });
}

function updateCoverageDisplay() {
    const targetScore = maxScore * 0.6; 
    const coveragePercent = Math.min(100, Math.floor((currentEarnedScore / targetScore) * 100));
    liveScoreDisplay.innerHTML = `${coveragePercent}<span class="pts">%</span>`;
    const offset = 125.6 - (125.6 * (coveragePercent / 100));
    const gaugePath = document.getElementById('gauge-fill-path');
    if(gaugePath) gaugePath.style.strokeDashoffset = offset;
}

function updateAssistantUI(justHitRole = null) {
    const titleEl = document.getElementById('current-step-title');
    const badgeEl = document.getElementById('step-progress-badge');
    const msgEl = document.getElementById('assistant-message');
    const svoContainer = document.getElementById('svo-slots-container');
    const skipBtn = document.getElementById('skip-step-btn');

    const svoHits = { subject: 0, verb: 0, object: 0 };
    scoringTargets.forEach(t => { if (t.hit && t.svoRole) svoHits[t.svoRole]++; });

    const setSlot = (type, state) => {
        const el = document.getElementById(`slot-${type}`);
        const icon = document.getElementById(`icon-${type}`);
        if (!el || !icon) return;
        el.className = `stepper-item ${state}-slot`;
        if (state === 'completed') icon.textContent = '✓';
        else if (type === 'subject') icon.textContent = '1';
        else if (type === 'verb') icon.textContent = '2';
        else if (type === 'object') icon.textContent = '3';
    };

    setSlot('subject', 'locked'); setSlot('verb', 'locked'); setSlot('object', 'locked');

    if (svoHits.subject > 0) setSlot('subject', 'completed');
    if (svoHits.verb > 0) setSlot('verb', 'completed');
    if (svoHits.object > 0) setSlot('object', 'completed');

    let activeTarget = null;
    if (svoHits.subject === 0) activeTarget = 'subject';
    else if (svoHits.verb === 0) activeTarget = 'verb';
    else if (svoHits.object === 0) activeTarget = 'object';

    if (activeTarget) setSlot(activeTarget, 'active');
    
    if (activeTarget || categoryHits.setting < LIGHT_THRESHOLD || categoryHits.details < LIGHT_THRESHOLD) skipBtn.classList.remove('hidden');
    else skipBtn.classList.add('hidden');

    if (activeTarget) {
        svoContainer.style.display = 'flex';
        titleEl.textContent = "Step 1: Main Gist";
        badgeEl.textContent = "1 / 3 挑戦中";
        if (activeTarget === 'subject') msgEl.innerHTML = "描写の中に「<strong>女性 (woman)</strong>」などの主語を入れてみましょう。";
        else if (activeTarget === 'verb') msgEl.innerHTML = "主語クリア！次は「<strong>飲んでいる (drink)</strong>」などの動作(動詞)を続けましょう。（※スペルミスにも注意！）";
        else if (activeTarget === 'object') msgEl.innerHTML = "いい調子です！「<strong>コーヒー (coffee)</strong>」などの目的語を繋げて文を完成させましょう。";
    } else {
        svoContainer.style.display = 'none'; 
        if (categoryHits.setting < LIGHT_THRESHOLD) {
            titleEl.textContent = "Step 2: 場所や背景 (Setting)";
            badgeEl.textContent = "2 / 3 挑戦中";
            const target = scoringTargets.find(t => t.bucket === 'setting' && !t.hit);
            msgEl.innerHTML = target ? `SVO完成！次は「<strong>${target.label_ja} (${target.words[0]})</strong>」など、場所の情報を付け足しましょう。` : "場所や背景の情報を描写してみましょう。";
        } 
        else if (categoryHits.details < LIGHT_THRESHOLD) {
            titleEl.textContent = "Step 3: 詳しい様子 (Details)";
            badgeEl.textContent = "3 / 3 挑戦中";
            const target = scoringTargets.find(t => t.bucket === 'details' && !t.hit);
            msgEl.innerHTML = target ? `背景もOK！最後に「<strong>${target.label_ja} (${target.words[0]})</strong>」など、小物を描写してみましょう。` : "光や感情など、詳しい様子を描写してみましょう。";
        } 
        else {
            titleEl.textContent = "Mission Complete! 🌟";
            badgeEl.textContent = "ALL CLEAR!";
            msgEl.innerHTML = "<strong>Perfect!</strong> すべての要素を完璧に描写しました！このままFinishを押して結果を確認しましょう。";
        }
    }

    document.querySelectorAll('.hint-glow-overlay').forEach(el => el.remove());

    let currentFocusTarget = null;
    if (activeTarget === 'subject') currentFocusTarget = scoringTargets.find(t => t.svoRole === 'subject' && !t.hit);
    else if (activeTarget === 'verb') currentFocusTarget = scoringTargets.find(t => t.svoRole === 'subject'); 
    else if (activeTarget === 'object') currentFocusTarget = scoringTargets.find(t => t.svoRole === 'object' && !t.hit);
    else if (categoryHits.setting < LIGHT_THRESHOLD) currentFocusTarget = scoringTargets.find(t => t.bucket === 'setting' && !t.hit);
    else if (categoryHits.details < LIGHT_THRESHOLD) currentFocusTarget = scoringTargets.find(t => t.bucket === 'details' && !t.hit);

    if (currentFocusTarget) {
        const elData = cafeData.elements.find(e => e.id === currentFocusTarget.id);
        if (elData && elData.bounding_box_conceptual) {
            const [top, left, height, width] = elData.bounding_box_conceptual;
            const overlay = document.createElement('div');
            overlay.className = 'hint-glow-overlay';
            overlay.style.top = `${top}%`; overlay.style.left = `${left}%`; overlay.style.height = `${height}%`; overlay.style.width = `${width}%`;
            imageArea.appendChild(overlay);
        }
    }
}

// ★改修2：「スキップ」しても入力欄の英文を破壊しない
document.getElementById('skip-step-btn').addEventListener('click', () => {
    let targetBucket = 'gist';
    if (categoryHits.gist >= LIGHT_THRESHOLD) targetBucket = 'setting';
    if (categoryHits.setting >= LIGHT_THRESHOLD && categoryHits.gist >= LIGHT_THRESHOLD) targetBucket = 'details';

    // まだクリアされていないターゲットを1つだけ取得
    const unhitTargets = scoringTargets.filter(t => t.bucket === targetBucket && !t.hit);
    if (unhitTargets.length === 0) return;

    // テキストボックスには何も書き込まず、システム上だけ「クリア扱い」にして次へ進める
    const target = unhitTargets[0];
    target.hit = true;
    categoryHits[target.bucket]++;
    currentEarnedScore += target.weight;
    createGoldOverlayFromTarget(target); 

    playHitSound(true); 
    updateCoverageDisplay();
    updateAssistantUI();
    userInput.focus();
});

function renderOverlays() {
    overlaysContainer.innerHTML = ''; 
    const currentLevel = hintLevelSelect.value;
    cafeData.elements.forEach(element => {
        if (currentLevel === 'primary' && element.importance !== 'primary') return;
        if (element.bounding_box_conceptual) {
            const [top, left, height, width] = element.bounding_box_conceptual;
            const overlay = document.createElement('div');
            overlay.className = 'clickable-overlay';
            overlay.style.top = `${top}%`; overlay.style.left = `${left}%`;
            overlay.style.height = `${height}%`; overlay.style.width = `${width}%`;
            overlay.style.zIndex = 10000 - Math.round(height * width); 
            overlay.addEventListener('click', () => showHints(element));
            overlaysContainer.appendChild(overlay);
        }
    });
}

function showHints(element) {
    hintTitle.textContent = `${element.label_ja} (${element.label})`;
    hintContent.innerHTML = '';
    ['beginner', 'intermediate', 'advanced'].forEach(level => {
        const levelHints = element.hints.filter(h => h.level === level);
        if (levelHints.length > 0) {
            const groupDiv = document.createElement('div');
            groupDiv.className = 'hint-level-group';
            groupDiv.innerHTML = `<div class="hint-level-title">${level}</div>`;
            levelHints.forEach(hint => {
                const p = document.createElement('p'); p.className = 'hint-item';
                p.innerHTML = `<span class="hint-type">[${hint.type}]</span> ${hint.text.replace(/\*(.*?)\*/g, "<strong>$1</strong>")}`;
                groupDiv.appendChild(p);
            });
            hintContent.appendChild(groupDiv);
        }
    });
}

function createGoldOverlayFromTarget(target) {
    const elData = cafeData.elements.find(e => e.id === target.id);
    if (!elData || !elData.bounding_box_conceptual) return;

    const [top, left, height, width] = elData.bounding_box_conceptual;
    const overlay = document.createElement('div');
    overlay.className = 'gold-overlay';
    overlay.style.top = `${top}%`; overlay.style.left = `${left}%`; overlay.style.height = `${height}%`; overlay.style.width = `${width}%`;
    imageArea.appendChild(overlay);
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

let isFormatting = false;

userInput.addEventListener('input', () => {
    if (isFormatting) return; 
    initAudio();
    
    const text = userInput.innerText.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    const words = text.split(/\s+/);
    let newHitFound = false;
    let justHitRole = null;

    scoringTargets.forEach(target => {
        if (!target.hit) {
            let matchedString = null;

            // ★改修1：「drink coffee」など複数単語のフレーズも、間に文字が入っても柔軟に判定
            const hasMatch = target.words.some(targetWord => {
                if (targetWord.includes(' ')) {
                    const phraseParts = targetWord.split(' ');
                    // フレーズを構成する単語が、ユーザーの入力内にすべて含まれていればOKとする
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

            if (hasMatch && !matchedString) {
                // ハイライト用に、マッチした単語の最初のものを取得
                matchedString = target.words[0].split(' ')[0]; 
            }

            if (hasMatch && matchedString) {
                target.hit = true;
                newHitFound = true;
                currentEarnedScore += target.weight;
                categoryHits[target.bucket]++;
                
                if (target.svoRole) justHitRole = target.svoRole;
                if (!alreadyHitWords.includes(matchedString)) alreadyHitWords.push(matchedString);
                
                updateCoverageDisplay();
                createGoldOverlayFromTarget(target);

                userInput.classList.add('hit-flash');
                setTimeout(() => userInput.classList.remove('hit-flash'), 200);
            }
        }
    });

    if (newHitFound) {
        updateAssistantUI(justHitRole);
        if (!justHitRole) playHitSound(false); 
        isFormatting = true;
        boldMatchedWords();
        isFormatting = false;
    }
});

supportSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
        imageArea.classList.add('support-active');
        hintLevelSelect.classList.remove('hidden'); renderOverlays();
    } else {
        imageArea.classList.remove('support-active');
        hintLevelSelect.classList.add('hidden');
        document.getElementById('hint-content').innerHTML = '<p class="hint-placeholder">Support ModeをONにして画像の枠をクリックすると、ここに単語や文法のヒントが表示されます。</p>';
        document.getElementById('hint-title').textContent = "💡 Hint Area";
    }
});
hintLevelSelect.addEventListener('change', renderOverlays);

submitBtn.addEventListener('click', () => {
    userInput.contentEditable = "false"; 
    submitBtn.disabled = true;
    const finalCoverage = Math.min(100, Math.floor((currentEarnedScore / (maxScore * 0.6)) * 100));
    document.getElementById('feedback-msg').textContent = finalCoverage >= 80 ? "Outstanding!" : "Good try!";
    
    const modelAnswersList = document.getElementById('model-answers-list');
    modelAnswersList.innerHTML = '';
    const sampleAnswers = [...cafeData.sample_answers.beginner, ...cafeData.sample_answers.intermediate, ...cafeData.sample_answers.advanced];
    sampleAnswers.forEach(answer => {
        const li = document.createElement('li'); li.textContent = answer;
        modelAnswersList.appendChild(li);
    });
    resultArea.classList.remove('hidden');
});

document.getElementById('retry-btn').addEventListener('click', initGame);

function initGame() {
    setupGameData();
    targetImage.src = cafeData.imageUrl ? cafeData.imageUrl : ("images/" + cafeData.image_id);
    
    userInput.innerText = ''; 
    alreadyHitWords = []; 
    overlaysContainer.innerHTML = ''; 
    document.querySelectorAll('.gold-overlay, .hint-glow-overlay').forEach(el => el.remove());
    currentEarnedScore = 0;
    
    updateCoverageDisplay();
    
    resultArea.classList.add('hidden'); 
    document.getElementById('hint-content').innerHTML = '<p class="hint-placeholder">Support ModeをONにして画像の枠をクリックすると、ここに単語や文法のヒントが表示されます。</p>';
    document.getElementById('hint-title').textContent = "💡 Hint Area";

    imageArea.classList.remove('support-active');
    supportSwitch.checked = false; hintLevelSelect.classList.add('hidden');
    
    userInput.contentEditable = "true"; 
    submitBtn.disabled = false;
    
    updateAssistantUI(); 
    userInput.focus();
}

window.addEventListener('DOMContentLoaded', initGame);

const dictInput = document.getElementById('dict-search-input');
const dictSuggestions = document.getElementById('dict-suggestions');
const dictModal = document.getElementById('dict-modal');
const closeDictBtn = document.getElementById('close-dict-btn');
let searchTimeout;

dictInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    const query = e.target.value.trim();
    dictSuggestions.innerHTML = '';
    if (query.length === 0) { dictSuggestions.classList.add('hidden'); return; }

    searchTimeout = setTimeout(async () => {
        try {
            const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
            if (!response.ok) throw new Error('API request failed');
            const results = await response.json();

            if (results.length > 0) {
                results.forEach(data => {
                    const li = document.createElement('li');
                    li.innerHTML = `<span class="sugg-en">${data.word}</span> <span class="sugg-ja">${data.meaning}</span>`;
                    li.addEventListener('click', () => {
                        openDictModal(data);
                        dictSuggestions.classList.add('hidden');
                        dictInput.value = ''; 
                    });
                    dictSuggestions.appendChild(li);
                });
                dictSuggestions.classList.remove('hidden');
            } else {
                dictSuggestions.classList.add('hidden');
            }
        } catch (error) { console.error("辞書APIとの通信エラー:", error); }
    }, 300); 
});

document.addEventListener('click', (e) => {
    if (!dictInput.contains(e.target) && !dictSuggestions.contains(e.target)) dictSuggestions.classList.add('hidden');
});

function openDictModal(data) {
    document.getElementById('dict-word-title').textContent = data.word;
    document.getElementById('dict-word-meaning').textContent = data.meaning;
    document.getElementById('dict-explanation').innerHTML = data.explanation.replace(/\n/g, '<br>');
    document.getElementById('dict-synonyms').parentElement.style.display = 'none';

    const wordLen = data.word.replace(/[^a-zA-Z]/g, '').length;
    let stars = "★★★☆☆", freqLevel = "標準的な語彙", desc = "日常から幅広く使われます";
    if (wordLen <= 5) { stars = "★★★★★"; freqLevel = "最頻出・基本語彙"; desc = "日常会話で非常によく使われる重要な単語です"; } 
    else if (wordLen <= 8) { stars = "★★★★☆"; freqLevel = "高頻度語彙"; desc = "ネイティブの会話や文章で頻繁に登場します"; } 
    else if (wordLen >= 11) { stars = "★★☆☆☆"; freqLevel = "専門的・フォーマル"; desc = "学術的な文章やフォーマルな場面で使われます"; }
    
    document.getElementById('dict-corpus').textContent = `${stars} (${freqLevel}) : ${desc}`;
    dictModal.classList.remove('hidden');
}

closeDictBtn.addEventListener('click', () => { dictModal.classList.add('hidden'); document.getElementById('user-input').focus(); });
dictModal.addEventListener('click', (e) => { if (e.target === dictModal) { dictModal.classList.add('hidden'); document.getElementById('user-input').focus(); } });