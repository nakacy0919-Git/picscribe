let scoringTargets = [];
let maxScore = 0;
let categoryHits = { gist: 0, setting: 0, details: 0 };
const LIGHT_THRESHOLD = 3;

function setupGameData() {
    scoringTargets = [];
    maxScore = 0;
    categoryHits = { gist: 0, setting: 0, details: 0 };

    cafeData.elements.forEach(el => {
        let bucket = 'details';
        const isPrimary = el.importance === 'primary';
        const weight = isPrimary ? 10 : 3;

        if (el.category === 'person' || (isPrimary && el.category === 'food_and_drink')) {
            bucket = 'gist';
        } else if (['architecture', 'place', 'furniture', 'equipment'].includes(el.category)) {
            bucket = 'setting';
        } else if (['nature', 'decoration', 'lighting', 'environment', 'sign'].includes(el.category) || (!isPrimary && el.category === 'object')) {
            bucket = 'details';
        }

        scoringTargets.push({
            id: el.id, label: el.label, bucket: bucket, isGist: isPrimary,
            words: el.synonyms_and_related_words.map(w => w.toLowerCase()),
            weight: weight, hit: false
        });
        maxScore += weight;
    });

    cafeData.actions_analysis.forEach(action => {
        scoringTargets.push({
            id: action.id, label: 'Action', bucket: 'gist', isGist: true,
            words: action.synonyms.map(p => p.toLowerCase()),
            weight: 10, hit: false
        });
        maxScore += 10;
    });
    
    cafeData.overall_mood.forEach(mood => {
        scoringTargets.push({
            id: 'mood_' + mood, label: 'Mood', bucket: 'details', isGist: false,
            words: [mood.toLowerCase()],
            weight: 2, hit: false
        });
        maxScore += 2;
    });
}

const sampleAnswers = [...cafeData.sample_answers.beginner, ...cafeData.sample_answers.intermediate, ...cafeData.sample_answers.advanced];

const targetImage = document.getElementById('target-image');
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');
const resultArea = document.getElementById('result-area');
const liveScoreDisplay = document.getElementById('live-score');
const coverageBar = document.getElementById('coverage-bar');

const overlaysContainer = document.getElementById('overlays-container');
const supportSwitch = document.getElementById('support-switch');
const hintLevelSelect = document.getElementById('hint-level-select');
const hintPanel = document.getElementById('hint-panel');
const hintTitle = document.getElementById('hint-title');
const hintContent = document.getElementById('hint-content');
const closeHintBtn = document.getElementById('close-hint-btn');
const effectContainer = document.getElementById('effect-container');

const indGist = document.getElementById('ind-gist');
const indSetting = document.getElementById('ind-setting');
const indDetails = document.getElementById('ind-details');
const counterGist = document.getElementById('counter-gist');
const counterSetting = document.getElementById('counter-setting');
const counterDetails = document.getElementById('counter-details');

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

function updateCoverageDisplay() {
    // 修正：満点到達条件を全体の約60%に設定（無理なく100%に到達できる）
    const targetScore = maxScore * 0.6; 
    const coveragePercent = Math.min(100, Math.floor((currentEarnedScore / targetScore) * 100));
    liveScoreDisplay.innerHTML = `${coveragePercent}<span class="pts">%</span>`;
    coverageBar.style.width = `${coveragePercent}%`;
}

function updateTrafficLights(bucket) {
    categoryHits[bucket]++;
    const currentHits = categoryHits[bucket];
    let counterEl, indEl;
    if (bucket === 'gist') { counterEl = counterGist; indEl = indGist; }
    if (bucket === 'setting') { counterEl = counterSetting; indEl = indSetting; }
    if (bucket === 'details') { counterEl = counterDetails; indEl = indDetails; }
    
    if (currentHits <= LIGHT_THRESHOLD) {
        counterEl.textContent = `${currentHits}/${LIGHT_THRESHOLD}`;
    } else {
        counterEl.textContent = `${currentHits} Hits!`; 
    }

    if (currentHits === LIGHT_THRESHOLD) {
        indEl.classList.add('active');
        playHitSound(true); 
        
        const floatingMsg = document.createElement('div');
        floatingMsg.className = 'floating-text';
        floatingMsg.innerHTML = `${bucket.toUpperCase()} UNLOCKED! 🚦`;
        effectContainer.appendChild(floatingMsg);
        setTimeout(() => floatingMsg.remove(), 1500);
    }
}

function renderOverlays() {
    overlaysContainer.innerHTML = ''; 
    const currentLevel = hintLevelSelect.value;
    cafeData.elements.forEach(element => {
        if (currentLevel === 'primary' && element.importance !== 'primary') return;
        if (element.bounding_box_conceptual) {
            const [top, left, height, width] = element.bounding_box_conceptual;
            const overlay = document.createElement('div');
            overlay.className = 'clickable-overlay';
            // 要素のIDを持たせる（ヒットしたか判別用）
            overlay.dataset.id = element.id; 
            
            overlay.style.top = `${top}%`; overlay.style.left = `${left}%`;
            overlay.style.height = `${height}%`; overlay.style.width = `${width}%`;
            overlay.style.zIndex = 10000 - Math.round(height * width); 
            
            // ★追加：すでにヒット済みの場合は緑色に、未発見はオレンジ（SOS）に
            const target = scoringTargets.find(t => t.id === element.id);
            if (target && target.hit) {
                overlay.classList.add('overlay-hit');
            } else {
                overlay.classList.add('sos-blink');
            }

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
    hintPanel.classList.remove('hidden');
}

function initGame() {
    setupGameData();
    targetImage.src = "images/" + cafeData.image_id;
    userInput.value = '';
    currentEarnedScore = 0;
    
    updateCoverageDisplay();
    indGist.classList.remove('active'); indSetting.classList.remove('active'); indDetails.classList.remove('active');
    counterGist.textContent = "0/3"; counterSetting.textContent = "0/3"; counterDetails.textContent = "0/3";
    
    resultArea.classList.add('hidden'); hintPanel.classList.add('hidden');
    document.getElementById('image-area').classList.remove('support-active');
    supportSwitch.checked = false; hintLevelSelect.classList.add('hidden');
    
    userInput.disabled = false; submitBtn.disabled = false;
    userInput.focus();
}

userInput.addEventListener('input', () => {
    initAudio();
    const text = userInput.value.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    const words = text.split(/\s+/);

    scoringTargets.forEach(target => {
        if (!target.hit) {
            // ★修正：前方一致や部分一致を含めた柔軟な判定
            const hasMatch = target.words.some(targetWord => {
                if (targetWord.includes(' ')) {
                    return text.includes(targetWord); // フレーズの場合は全体一致
                } else if (targetWord.length >= 3) {
                    // 3文字以上の単語なら、ユーザー入力の前方一致を許容 (sit -> sitting)
                    return words.some(w => w.startsWith(targetWord) || targetWord.startsWith(w));
                } else {
                    return words.includes(targetWord); // 短い単語(in, onなど)は完全一致
                }
            });

            if (hasMatch) {
                target.hit = true;
                currentEarnedScore += target.weight;
                
                updateCoverageDisplay();
                updateTrafficLights(target.bucket); 
                
                if (categoryHits[target.bucket] !== LIGHT_THRESHOLD) {
                    playHitSound(false);
                }
                
                // ★追加：ヒットした要素のオーバーレイを「発見済み」色に変える
                const overlay = document.querySelector(`.clickable-overlay[data-id="${target.id}"]`);
                if (overlay) {
                    overlay.classList.remove('sos-blink');
                    overlay.classList.add('overlay-hit');
                }

                userInput.classList.add('hit-flash');
                setTimeout(() => userInput.classList.remove('hit-flash'), 200);
            }
        }
    });
});

supportSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.getElementById('image-area').classList.add('support-active');
        hintLevelSelect.classList.remove('hidden'); renderOverlays();
    } else {
        document.getElementById('image-area').classList.remove('support-active');
        hintLevelSelect.classList.add('hidden'); hintPanel.classList.add('hidden');
    }
});
hintLevelSelect.addEventListener('change', renderOverlays);
closeHintBtn.addEventListener('click', () => hintPanel.classList.add('hidden'));

submitBtn.addEventListener('click', () => {
    userInput.disabled = true; submitBtn.disabled = true;
    const finalCoverage = Math.min(100, Math.floor((currentEarnedScore / (maxScore * 0.6)) * 100));
    document.getElementById('feedback-msg').textContent = finalCoverage >= 80 ? "Outstanding!" : "Good try!";
    
    const modelAnswersList = document.getElementById('model-answers-list');
    modelAnswersList.innerHTML = '';
    sampleAnswers.forEach(answer => {
        const li = document.createElement('li'); li.textContent = answer;
        modelAnswersList.appendChild(li);
    });
    resultArea.classList.remove('hidden');
});

document.getElementById('retry-btn').addEventListener('click', initGame);
window.addEventListener('DOMContentLoaded', initGame);