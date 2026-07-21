// ==========================================
// Picture Description Mode Logic (情景描写ロジック)
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
const assistantMessage = document.getElementById('assistant-message'); 

let currentEarnedScore = 0;
let currentStep = 1; 
let totalSteps = 3;  

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

function updateGlowAndButtons() {
    const skipBtn = document.getElementById('skip-step-btn');
    
    if (currentStep <= totalSteps || categoryHits.setting < LIGHT_THRESHOLD || categoryHits.details < LIGHT_THRESHOLD) {
        skipBtn.classList.remove('hidden');
    } else {
        skipBtn.classList.add('hidden');
    }

    document.querySelectorAll('.hint-glow-overlay').forEach(el => el.remove());
    let currentFocusTarget = null;
    
    if (currentStep <= totalSteps) {
        const targetData = cafeData.core_svo_targets.find(t => t.step === currentStep);
        if (targetData) currentFocusTarget = scoringTargets.find(t => t.svoRole === targetData.slot && !t.hit);
    }
    if (!currentFocusTarget && categoryHits.setting < LIGHT_THRESHOLD) currentFocusTarget = scoringTargets.find(t => t.bucket === 'setting' && !t.hit);
    if (!currentFocusTarget && categoryHits.details < LIGHT_THRESHOLD) currentFocusTarget = scoringTargets.find(t => t.bucket === 'details' && !t.hit);

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

document.getElementById('skip-step-btn').addEventListener('click', () => {
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
    
    const levels = ['A1', 'A2', 'B1', 'B2', 'beginner', 'intermediate', 'advanced'];
    
    levels.forEach(level => {
        const levelHints = element.hints ? element.hints.filter(h => h.level === level) : [];
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

// ==========================================
// 🌟 次世代スマート判定システム統合
// ==========================================
function checkAndSuggestTypos(inputText) {
    let typoFound = null;
    let correctWord = null;

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

    if (typoFound) {
        assistantMessage.innerHTML = `⚠️ 惜しい！もしかして <strong>${correctWord}</strong> のスペルミス（${typoFound}）ですか？`;
        assistantMessage.style.backgroundColor = "#fffbeb";
        assistantMessage.style.borderColor = "#f59e0b";
        assistantMessage.style.color = "#b45309";
    } else {
        assistantMessage.style.backgroundColor = "transparent";
        assistantMessage.style.borderColor = "#e0e0e0";
        assistantMessage.style.color = "#111111";
        if (currentStep <= totalSteps) {
            const currentTargetData = cafeData.core_svo_targets.find(t => t.step === currentStep);
            if (currentTargetData) assistantMessage.innerHTML = currentTargetData.hint_msg;
        }
    }
}

function checkSvoProgress(inputText) {
    if (currentStep > totalSteps) return;

    const currentTargetData = cafeData.core_svo_targets.find(t => t.step === currentStep);
    let isStepCleared = false;

    for (const targetWord of currentTargetData.targets) {
        const regex = new RegExp(`\\b${targetWord}\\b`, 'i');
        if (regex.test(inputText)) {
            isStepCleared = true;
            break;
        }
    }

    if (isStepCleared) {
        const activeSlot = document.getElementById(`slot-${currentTargetData.slot}`);
        if (activeSlot) {
            activeSlot.classList.remove('active-slot');
            activeSlot.classList.add('completed-slot');
            document.getElementById(`icon-${currentTargetData.slot}`).textContent = '✓';
        }

        assistantMessage.innerHTML = `✨ <strong>${currentTargetData.success_msg}</strong>`;
        assistantMessage.style.backgroundColor = "#f0fdf4"; 
        assistantMessage.style.borderColor = "#10b981";
        assistantMessage.style.color = "#047857";

        currentStep++;
        
        if (currentStep <= totalSteps) {
            const nextTargetData = cafeData.core_svo_targets.find(t => t.step === currentStep);
            const nextSlot = document.getElementById(`slot-${nextTargetData.slot}`);
            if (nextSlot) nextSlot.classList.add('active-slot');
            
            document.getElementById('step-progress-badge').innerText = `${currentStep} / ${totalSteps} 挑戦中`;
            
            setTimeout(() => {
                if(assistantMessage.innerHTML.includes('✨')) {
                    assistantMessage.innerHTML = nextTargetData.hint_msg;
                    assistantMessage.style.backgroundColor = "transparent";
                    assistantMessage.style.borderColor = "#e0e0e0";
                    assistantMessage.style.color = "#111111";
                }
            }, 3000);
        } else {
            document.getElementById('current-step-title').textContent = "Mission Complete! 🌟";
            document.getElementById('step-progress-badge').innerText = "ALL CLEAR!";
            document.getElementById('step-progress-badge').style.backgroundColor = "#10b981";
        }
    }
}

let isFormatting = false;

userInput.addEventListener('input', () => {
    if (isFormatting) return; 
    initAudio();
    
    const rawText = userInput.innerText.toLowerCase();
    const text = rawText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    const words = text.split(/\s+/);
    let newHitFound = false;

    checkAndSuggestTypos(rawText);
    checkSvoProgress(rawText);

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


// ==========================================
// 🌟 Review & Practice モーダルシステム (音読・文字起こし・Accuracy判定)
// ==========================================
const finishModal = document.getElementById('finish-modal');
const closeFinishModalBtn = document.getElementById('close-finish-modal-btn');
const cefrTabs = document.querySelectorAll('.cefr-tab');
const cefrContentArea = document.getElementById('cefr-content-area');
const blankReadingSwitch = document.getElementById('blank-reading-switch');
const speechPracticeBtn = document.getElementById('speech-practice-btn');

const stateSelection = document.getElementById('modal-state-selection');
const statePractice = document.getElementById('modal-state-practice');
const backToSelectionBtn = document.getElementById('back-to-selection-btn');
const practiceTargetText = document.getElementById('practice-target-text');
const liveTranscription = document.getElementById('live-transcription');
const finishReadingBtn = document.getElementById('finish-reading-btn');
const retryReadingBtn = document.getElementById('retry-reading-btn');
const speechResultArea = document.getElementById('speech-result-area');
const modalGaugeFill = document.getElementById('modal-gauge-fill');
const accuracyNumberDisplay = document.getElementById('accuracy-number-display');

let currentCefrLevel = 'A1';
let currentTargetSentences = []; 
let finalTranscript = ''; 

// Web Speech API の初期化
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = true; 
    recognition.continuous = true;     
}

// Finish & Check ボタンを押した時
submitBtn.addEventListener('click', () => {
    userInput.contentEditable = "false"; 
    submitBtn.disabled = true;
    
    document.getElementById('modal-user-answer').innerText = userInput.innerText || "(No answer)";
    document.getElementById('modal-review-image').src = targetImage.src;
    
    resetToSelectionState();
    renderCefrContent('A1');
    finishModal.classList.remove('hidden');
});

closeFinishModalBtn.addEventListener('click', () => {
    finishModal.classList.add('hidden');
    if(recognition) recognition.stop();
    userInput.contentEditable = "true"; 
    submitBtn.disabled = false;
});

backToSelectionBtn.addEventListener('click', () => {
    if(recognition) recognition.stop();
    resetToSelectionState();
});

function resetToSelectionState() {
    stateSelection.classList.remove('hidden');
    statePractice.classList.add('hidden');
    document.getElementById('modal-main-title').innerText = "Review & Practice";
    document.getElementById('modal-sub-title').innerText = "CEFRレベル別のモデル解答から、音読練習したい英文を選択してください。";
    document.getElementById('modal-your-answer-box').style.display = "block";
    
    // ★追加：選択画面に戻る時にAccuracyメーターを隠す
    speechResultArea.classList.add('hidden');
}

cefrTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        cefrTabs.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        currentCefrLevel = e.target.getAttribute('data-level');
        blankReadingSwitch.checked = false; 
        renderCefrContent(currentCefrLevel);
    });
});

function renderCefrContent(level) {
    cefrContentArea.innerHTML = '';
    const isBlank = blankReadingSwitch.checked;
    
    if (cafeData.cefr_model_answers && cafeData.cefr_model_answers[level]) {
        cafeData.cefr_model_answers[level].forEach((answer, index) => {
            
            let displayText = answer.en;
            if (isBlank) {
                displayText = displayText.replace(/\b[a-zA-Z]{5,}\b/g, (match) => {
                    return Math.random() > 0.4 ? '<span class="blanked-word"></span>' : match;
                });
            }
            
            const label = document.createElement('label');
            label.className = 'cefr-sentence-item';
            label.innerHTML = `
                <input type="checkbox" class="sentence-checkbox" value="${answer.en}">
                <div>
                    <strong>[${level}]</strong> <span style="font-size:1.1em; color:#111;">${displayText}</span><br>
                    <span style="font-size: 0.85em; color: #666;">${answer.ja}</span>
                </div>
            `;
            cefrContentArea.appendChild(label);
        });
    }
}

blankReadingSwitch.addEventListener('change', () => {
    renderCefrContent(currentCefrLevel);
});

speechPracticeBtn.addEventListener('click', () => {
    if (!recognition) {
        alert("お使いのブラウザは音声認識に対応していません。Chromeをご利用ください。");
        return;
    }

    const checkboxes = document.querySelectorAll('.sentence-checkbox:checked');
    if (checkboxes.length === 0) {
        alert("音読練習したい英文にチェックを入れてください。");
        return;
    }

    currentTargetSentences = Array.from(checkboxes).map(cb => cb.value);
    const isBlank = blankReadingSwitch.checked;
    
    let practiceHtml = '';
    currentTargetSentences.forEach(sentence => {
        let text = sentence;
        if (isBlank) {
            text = text.replace(/\b[a-zA-Z]{5,}\b/g, match => Math.random() > 0.4 ? '<span class="blanked-word"></span>' : match);
        }
        practiceHtml += `<p>${text}</p>`;
    });

    practiceTargetText.innerHTML = practiceHtml;
    stateSelection.classList.add('hidden');
    statePractice.classList.remove('hidden');
    document.getElementById('modal-your-answer-box').style.display = "none";
    document.getElementById('modal-main-title').innerText = "Reading Practice";
    document.getElementById('modal-sub-title').innerText = "マイクに向かって、表示されている英文を音読してください。";
    
    startRecording();
});

retryReadingBtn.addEventListener('click', () => {
    startRecording();
});

function startRecording() {
    finalTranscript = '';
    liveTranscription.innerHTML = '<span style="color:#999;">Waiting for your voice... (話し始めてください)</span>';
    speechResultArea.classList.add('hidden');
    finishReadingBtn.classList.remove('hidden');
    retryReadingBtn.classList.add('hidden');
    
    try { recognition.start(); } catch(e) {}
}

// 🌟 判定処理と演出（ローカルストレージ・紙吹雪・SLAアドバイス）
function processSpeechResult() {
    if(recognition) recognition.stop();
    
    finishReadingBtn.classList.add('hidden');
    retryReadingBtn.classList.remove('hidden');
    
    const fullText = liveTranscription.innerText.replace('Waiting for your voice... (話し始めてください)', '');
    if (!fullText.trim()) return; 

    const targetWords = currentTargetSentences.join(' ').toLowerCase().replace(/[.,!?]/g, '').split(/\s+/).filter(w => w.length > 0);
    const spokenWords = fullText.toLowerCase().replace(/[.,!?]/g, '').split(/\s+/).filter(w => w.length > 0);
    
    let matchCount = 0;
    spokenWords.forEach(word => {
        if (targetWords.includes(word)) matchCount++;
    });
    
    let accuracy = 0;
    if (targetWords.length > 0) {
        accuracy = (matchCount / targetWords.length) * 100;
    }
    if (accuracy > 95 && accuracy < 100) accuracy = 100; // 僅かな揺れを許容
    
    let displayAcc = accuracy % 1 === 0 ? accuracy : accuracy.toFixed(1);
    document.getElementById('accuracy-number-value').innerText = displayAcc;
    
    // 1. ローカルストレージに記録を保存し、回数を取得
    const playCount = saveReadingRecord(accuracy);
    updateReadingRecordUI(playCount, accuracy);

    // 2. SLA・認知言語学に基づくアドバイスを生成
    updateSLAAdvice(accuracy);

    // 3. ゲージのアニメーション
    const offset = 125.6 - (125.6 * (accuracy / 100));
    const gaugeFill = document.getElementById('modal-gauge-fill');
    gaugeFill.style.strokeDashoffset = offset;
    
    if (accuracy >= 80) {
        gaugeFill.style.stroke = "#f59e0b";
    } else if (accuracy >= 50) {
        gaugeFill.style.stroke = "#fbbf24";
    } else {
        gaugeFill.style.stroke = "#ef4444";
    }
    
    speechResultArea.classList.remove('hidden');

    // 4. スコアに応じた紙吹雪・花火アニメーション
    triggerCelebration(accuracy);
}

// ----------------------------------------------------
// 学習記録（LocalStorage）の保存とUI更新
// ----------------------------------------------------
function saveReadingRecord(accuracy) {
    let stats = JSON.parse(localStorage.getItem('picscribe_reading_stats')) || { count: 0, history: [] };
    stats.count += 1;
    stats.history.push({ score: accuracy, date: new Date().toISOString() });
    localStorage.setItem('picscribe_reading_stats', JSON.stringify(stats));
    return stats.count;
}

function updateReadingRecordUI(count, accuracy) {
    document.getElementById('reading-count-badge').innerText = `🔥 音読トレーニング ${count}回目`;
    
    let comment = "";
    if (count === 1) {
        comment = "初めての音読ですね！まずは声に出すことに慣れましょう。";
    } else if (count >= 5 && accuracy >= 90) {
        comment = "素晴らしい反復練習です！口周りの筋肉が英語に適応（運動記憶）しています。";
    } else if (count >= 5 && accuracy < 90) {
        comment = "諦めずに何度も挑戦していて素晴らしいです！少しずつ定着しています。";
    } else {
        comment = "継続は力なり。反復することで脳の回路が自動化されていきます。";
    }
    document.getElementById('reading-dynamic-comment').innerText = comment;
}

// ----------------------------------------------------
// SLA（第二言語習得論）・認知言語学に基づくフィードバック
// ----------------------------------------------------
function updateSLAAdvice(accuracy) {
    const adviceText = document.getElementById('sla-advice-text');
    
    if (accuracy === 100) {
        adviceText.innerHTML = "<strong>【概念への直接アクセス完成】</strong><br>Perfect! 英語を日本語に訳さず、英語のままイメージ（状況モデル）として捉え、直接音声化できています。最高の言語処理状態です！";
    } else if (accuracy >= 90) {
        adviceText.innerHTML = "<strong>【プロソディと状況モデル】</strong><br>ほぼ完璧です！脳内で「文法」ではなく「情景そのもの」をイメージできています。次は文全体のイントネーション（プロソディ）や感情を意識してみましょう。";
    } else if (accuracy >= 80) {
        adviceText.innerHTML = "<strong>【発話の自動化の兆し】</strong><br>素晴らしい！文字から音への変換（デコーディング）がスムーズに自動化されてきています。この調子で反復し、脳の負担をさらに減らしましょう。";
    } else if (accuracy >= 50) {
        adviceText.innerHTML = "<strong>【ワーキングメモリの負担軽減】</strong><br>単語の区切り（チャンク）を意識しましょう。意味のまとまりで発音することで、脳のワーキングメモリの負担が減り、流暢さが向上します。";
    } else {
        adviceText.innerHTML = "<strong>【音韻ループの活性化】</strong><br>まずはボトムアップ処理を意識し、一つ一つの単語の音を正確に捉えましょう。文字と音の結びつきを意識して、もう一度ゆっくり読んでみてください。";
    }
}

// ----------------------------------------------------
// スコアに応じた紙吹雪アニメーション
// ----------------------------------------------------
function triggerCelebration(accuracy) {
    // confettiが読み込まれていない場合はスキップ
    if (typeof confetti === 'undefined') return;

    if (accuracy === 100) {
        // ★ 100% : 画面両端から打ち上がるド派手な花火（3秒間）
        var duration = 3 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10005 };

        function randomInRange(min, max) { return Math.random() * (max - min) + min; }

        var interval = setInterval(function() {
            var timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            var particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);

    } else if (accuracy >= 90) {
        // ★ 90-99% : 中央から多めの紙吹雪
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 },
            zIndex: 10005,
            colors: ['#3b82f6', '#10b981', '#f59e0b', '#ffffff']
        });
    } else if (accuracy >= 80) {
        // ★ 80-89% : 中央から控えめな紙吹雪
        confetti({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.6 },
            zIndex: 10005
        });
    }
}

// ----------------------------------------------------
// イベントリスナー
// ----------------------------------------------------
if (recognition) {
    recognition.onresult = (event) => {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                finalTranscript += event.results[i][0].transcript + ' ';
            } else {
                interimTranscript += event.results[i][0].transcript;
            }
        }
        liveTranscription.innerHTML = finalTranscript + '<span style="color: #999;">' + interimTranscript + '</span>';
    };

    recognition.onend = () => {
        if (speechResultArea.classList.contains('hidden')) {
            processSpeechResult();
        }
    };

    recognition.onerror = (event) => {
        liveTranscription.innerHTML = `<span style="color:red;">Error: ${event.error}</span>`;
        finishReadingBtn.classList.add('hidden');
        retryReadingBtn.classList.remove('hidden');
    };
}

finishReadingBtn.addEventListener('click', () => {
    processSpeechResult();
});

// ==========================================
// 初期化関数
// ==========================================
function initGame(sceneId = 'cafe') {
    setupGameData();
    targetImage.src = cafeData.imageUrl ? cafeData.imageUrl : ("images/" + cafeData.image_id);
    
    userInput.innerText = ''; 
    alreadyHitWords = []; 
    overlaysContainer.innerHTML = ''; 
    document.querySelectorAll('.gold-overlay, .hint-glow-overlay').forEach(el => el.remove());
    currentEarnedScore = 0;
    
    currentStep = 1;
    ['subject', 'verb', 'object'].forEach((id, index) => {
        const el = document.getElementById(`slot-${id}`);
        const icon = document.getElementById(`icon-${id}`);
        if (el) el.className = `stepper-item ${index === 0 ? 'active-slot' : 'locked-slot'}`;
        if (icon) icon.textContent = (index + 1).toString();
    });
    
    document.getElementById('current-step-title').textContent = "Step 1: Main Gist";
    document.getElementById('step-progress-badge').textContent = `1 / ${totalSteps} 挑戦中`;
    document.getElementById('step-progress-badge').style.backgroundColor = "#111111"; 
    
    if (assistantMessage && cafeData.core_svo_targets) {
        assistantMessage.innerHTML = cafeData.core_svo_targets[0].hint_msg;
        assistantMessage.style.backgroundColor = "transparent";
        assistantMessage.style.borderColor = "#e0e0e0";
        assistantMessage.style.color = "#111111";
    }

    updateCoverageDisplay();
    
    resultArea.classList.add('hidden'); 
    
    // モーダルが開いたままリセットされた場合は閉じる
    const modalEl = document.getElementById('finish-modal');
    if (modalEl) modalEl.classList.add('hidden');

    document.getElementById('hint-content').innerHTML = '<p class="hint-placeholder">Support ModeをONにして画像の枠をクリックすると、ここに単語や文法のヒントが表示されます。</p>';
    document.getElementById('hint-title').textContent = "💡 Hint Area";

    imageArea.classList.remove('support-active');
    supportSwitch.checked = false; hintLevelSelect.classList.add('hidden');
    
    userInput.contentEditable = "true"; 
    submitBtn.disabled = false;
    
    updateGlowAndButtons(); 
    userInput.focus();
}

// ==========================================
// 手書き読み込み (OCR) ロジック
// ==========================================
const ocrFileInput = document.getElementById('ocr-file-input');
const ocrLoading = document.getElementById('ocr-loading');
const ocrProgress = document.getElementById('ocr-progress');

if (ocrFileInput) {
    ocrFileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        ocrLoading.classList.remove('hidden');
        ocrProgress.textContent = "0";

        try {
            const result = await Tesseract.recognize(
                file,
                'eng',
                {
                    logger: m => {
                        if (m.status === 'recognizing text') {
                            ocrProgress.textContent = Math.floor(m.progress * 100);
                        }
                    }
                }
            );

            const cleanText = result.data.text.replace(/\n/g, ' ').trim();
            
            if (cleanText) {
                if (userInput.innerText.trim().length > 0) {
                    userInput.innerText += " " + cleanText;
                } else {
                    userInput.innerText = cleanText;
                }
                
                const event = new Event('input', { bubbles: true });
                userInput.dispatchEvent(event);
                
                alert("手書き文字を読み込みました！間違いがないか確認して修正してください。");
            } else {
                alert("文字が読み取れませんでした。もう少し明るい場所で、はっきりと撮影してみてください。");
            }

        } catch (error) {
            console.error("OCR Error:", error);
            alert("解析中にエラーが発生しました。");
        } finally {
            ocrLoading.classList.add('hidden');
            ocrFileInput.value = '';
        }
    });
}