/**
 * speech_practice.js
 * 音読練習、音声認識(Web Speech API)、学習記録、SLAフィードバック（全モード共通）
 */

document.addEventListener("DOMContentLoaded", () => {
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
    
    // 他ファイルからの参照用
    const userInput = document.getElementById('user-input');
    const submitBtn = document.getElementById('submit-btn');
    const targetImage = document.getElementById('target-image');

    let currentCefrLevel = 'A1';
    let currentTargetSentences = []; 
    let finalTranscript = '';
    let interimTranscript = '';
    let isRecording = false;
    let finishingRequested = false;
    let isFinalizing = false; 

    // Web Speech API の初期化
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = null;
    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = true; 
        recognition.continuous = true;     
    }

    // Finish & Check ボタンを押した時のモーダル起動
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            userInput.contentEditable = "false"; 
            submitBtn.disabled = true;
            
            document.getElementById('modal-user-answer').innerText = userInput.innerText || "(No answer)";
            document.getElementById('modal-review-image').src = targetImage.src;
            
            resetToSelectionState();
            renderCefrContent('A1');
            finishModal.classList.remove('hidden');
        });
    }

    if (closeFinishModalBtn) {
        closeFinishModalBtn.addEventListener('click', () => {
            finishModal.classList.add('hidden');
            isFinalizing = true;
            finishingRequested = false;
            if (recognition && isRecording) recognition.abort();
            isRecording = false;
            userInput.contentEditable = "true"; 
            submitBtn.disabled = false;
        });
    }

    if (backToSelectionBtn) {
        backToSelectionBtn.addEventListener('click', () => {
            isFinalizing = true;
            finishingRequested = false;
            if (recognition && isRecording) recognition.abort();
            isRecording = false;
            resetToSelectionState();
        });
    }

    function resetToSelectionState() {
        isFinalizing = true;
        finishingRequested = false;
        stateSelection.classList.remove('hidden');
        statePractice.classList.add('hidden');
        document.getElementById('modal-main-title').innerText = "Review & Practice";
        document.getElementById('modal-sub-title').innerText = "CEFRレベル別のモデル解答から、音読練習したい英文を選択してください。";
        document.getElementById('modal-your-answer-box').style.display = "block";
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

    // ★修正：cafeData固定ではなく、現在選択されているシーンのデータを使用する
    function appendPracticeText(element, text, isBlank) {
        const value = String(text || '');
        if (!isBlank) {
            element.textContent = value;
            return;
        }
        const parts = value.split(/(\\b[a-zA-Z]{5,}\\b)/g);
        parts.forEach(part => {
            if (/^[a-zA-Z]{5,}$/.test(part) && Math.random() > 0.4) {
                const span = document.createElement('span');
                span.className = 'blanked-word';
                element.appendChild(span);
            } else {
                element.appendChild(document.createTextNode(part));
            }
        });
    }

    function renderCefrContent(level) {
        cefrContentArea.replaceChildren();
        const currentData = window.currentSceneData;
        const answers = currentData?.cefr_model_answers?.[level] || [];
        answers.forEach(answer => {
            if (!answer || typeof answer.en !== 'string') return;
            const label = document.createElement('label');
            label.className = 'cefr-sentence-item';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'sentence-checkbox';
            checkbox.value = answer.en;
            const description = document.createElement('div');
            const title = document.createElement('strong');
            title.textContent = '[' + level + '] ';
            const english = document.createElement('span');
            english.style.fontSize = '1.1em';
            english.style.color = '#111';
            appendPracticeText(english, answer.en, blankReadingSwitch.checked);
            const japanese = document.createElement('span');
            japanese.style.fontSize = '0.85em';
            japanese.style.color = '#666';
            japanese.textContent = String(answer.ja || '');
            description.append(title, english, document.createElement('br'), japanese);
            label.append(checkbox, description);
            cefrContentArea.appendChild(label);
        });
    }

    if (blankReadingSwitch) {
        blankReadingSwitch.addEventListener('change', () => {
            renderCefrContent(currentCefrLevel);
        });
    }

    function launchReadingPractice() {
        if (!recognition) {
            alert('お使いのブラウザは音声認識に対応していません。');
            return;
        }
        practiceTargetText.replaceChildren();
        currentTargetSentences.forEach(sentence => {
            const paragraph = document.createElement('p');
            appendPracticeText(paragraph, sentence, blankReadingSwitch.checked);
            practiceTargetText.appendChild(paragraph);
        });
        stateSelection.classList.add('hidden');
        statePractice.classList.remove('hidden');
        document.getElementById('modal-your-answer-box').style.display = 'none';
        document.getElementById('modal-main-title').innerText = 'Reading Practice';
        document.getElementById('modal-sub-title').innerText =
            'マイクに向かって、表示されている英文を音読してください。';
        startRecording();
    }

    if (speechPracticeBtn) {
        speechPracticeBtn.addEventListener('click', () => {
            const checkboxes = document.querySelectorAll('.sentence-checkbox:checked');
            if (!checkboxes.length) {
                alert('音読練習したい英文にチェックを入れてください。');
                return;
            }
            currentTargetSentences = Array.from(checkboxes).map(cb => cb.value);
            launchReadingPractice();
        });
    }

    // Use the same supported path as model-answer practice, without hidden
    // fake checkboxes or injecting user-supplied HTML into the DOM.
    if (document.getElementById('practice-my-answer-btn')) {
        document.getElementById('practice-my-answer-btn').addEventListener('click', () => {
            const answer = document.getElementById('modal-user-answer').innerText
                .replace(/\\s+/g, ' ').trim();
            if (!answer || answer === '(No answer)') return;
            blankReadingSwitch.checked = false;
            currentTargetSentences = [answer];
            launchReadingPractice();
        });
    }

    if (retryReadingBtn) {
        retryReadingBtn.addEventListener('click', () => {
            startRecording();
        });
    }

    function startRecording() {
        finalTranscript = '';
        interimTranscript = '';
        finishingRequested = false;
        isFinalizing = false;
        isRecording = false;
        liveTranscription.textContent = 'Waiting for your voice... (話し始めてください)';
        speechResultArea.classList.add('hidden');
        finishReadingBtn.classList.remove('hidden');
        finishReadingBtn.textContent = '⏹ 音読 Finish';
        retryReadingBtn.classList.add('hidden');
        try {
            recognition.start();
            isRecording = true;
        } catch (error) {
            liveTranscription.textContent =
                '録音を開始できませんでした。マイク許可を確認して再試行してください。';
            finishReadingBtn.classList.add('hidden');
            retryReadingBtn.classList.remove('hidden');
        }
    }

    function finishReading() {
        if (isFinalizing || finishingRequested) return;
        finishingRequested = true;
        if (recognition && isRecording) {
            try {
                recognition.stop(); // wait for final results and onend
            } catch (error) {
                finalizeSpeechResult();
            }
        } else {
            finalizeSpeechResult();
        }
    }

    function finalizeSpeechResult() {
        if (isFinalizing) return;
        isFinalizing = true;
        isRecording = false;
        finishReadingBtn.classList.add('hidden');
        retryReadingBtn.classList.remove('hidden');
        const spoken = (finalTranscript + ' ' + interimTranscript).trim();
        if (!spoken) {
            liveTranscription.textContent =
                '音声を認識できませんでした。マイクを確認して再試行してください。';
            return;
        }
        const accuracy = PicScribeScoring.wordAccuracy(
            currentTargetSentences.join(' '), spoken);
        document.getElementById('accuracy-number-value').textContent =
            Number.isInteger(accuracy) ? String(accuracy) : accuracy.toFixed(1);
        const playCount = saveReadingRecord(accuracy);
        updateReadingRecordUI(playCount, accuracy);
        updateSLAAdvice(accuracy);

        const gaugeFill = document.getElementById('modal-gauge-fill');
        if (gaugeFill) {
            gaugeFill.style.strokeDashoffset = 125.6 * (1 - accuracy / 100);
            gaugeFill.style.stroke = accuracy >= 80 ? '#f59e0b' :
                accuracy >= 50 ? '#fbbf24' : '#ef4444';
        }
        speechResultArea.classList.remove('hidden');
        triggerCelebration(accuracy);
    }

    function saveReadingRecord(accuracy) {
        let stats = {count: 0, history: []};
        try {
            const previous = JSON.parse(localStorage.getItem('picscribe_reading_stats'));
            if (previous && Number.isFinite(previous.count)) stats = previous;
        } catch (error) { /* storage can be unavailable or corrupted */ }
        stats.count += 1;
        stats.history = Array.isArray(stats.history) ? stats.history : [];
        stats.history.push({score: accuracy, date: new Date().toISOString()});
        // Keep browser storage bounded; count remains cumulative.
        stats.history = stats.history.slice(-200);
        try {
            localStorage.setItem('picscribe_reading_stats', JSON.stringify(stats));
        } catch (error) { /* reading remains usable without storage */ }
        return stats.count;
    }

    function updateReadingRecordUI(count, accuracy) {
        document.getElementById('reading-count-badge').innerText = `🔥 音読トレーニング ${count}回目`;
        let comment = "";
        if (count === 1) comment = "初めての音読ですね！まずは声に出すことに慣れましょう。";
        else if (count >= 5 && accuracy >= 90) comment = "素晴らしい反復練習です！口周りの筋肉が英語に適応（運動記憶）しています。";
        else if (count >= 5 && accuracy < 90) comment = "諦めずに何度も挑戦していて素晴らしいです！少しずつ定着しています。";
        else comment = "継続は力なり。反復することで脳の回路が自動化されていきます。";
        document.getElementById('reading-dynamic-comment').innerText = comment;
    }

    function updateSLAAdvice(accuracy) {
        const adviceText = document.getElementById('sla-advice-text');
        if (!adviceText) return;
        const hint = accuracy >= 90
            ? '単語の聞き取りが目標文とよく一致しました。次は文のリズムや自然な区切りも意識しましょう。'
            : accuracy >= 70
            ? 'おおむね一致しています。誤認識された語や抜けた語を確認し、短いまとまりごとに読み直しましょう。'
            : '一文ずつゆっくり読み、マイク環境と読み方を確かめてから再挑戦しましょう。';
        adviceText.textContent = hint +
            ' ※Accuracyは音声認識の単語一致率です。発音の質・理解度・イントネーションを直接測定するものではありません。';
    }

    function triggerCelebration(accuracy) {
        if (typeof confetti === 'undefined') return;
        if (accuracy === 100) {
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
            confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 }, zIndex: 10005, colors: ['#3b82f6', '#10b981', '#f59e0b', '#ffffff'] });
        } else if (accuracy >= 80) {
            confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 }, zIndex: 10005 });
        }
    }

    if (recognition) {
        recognition.onresult = event => {
            const finals = [];
            const interims = [];
            for (let i = 0; i < event.results.length; i++) {
                const result = event.results[i];
                if (!result[0]) continue;
                if (result.isFinal) finals.push(result[0].transcript);
                else interims.push(result[0].transcript);
            }
            finalTranscript = finals.join(' ').trim();
            interimTranscript = interims.join(' ').trim();
            liveTranscription.textContent =
                (finalTranscript + ' ' + interimTranscript).trim();
        };

        recognition.onend = () => {
            isRecording = false;
            if (finishingRequested && !isFinalizing) {
                finalizeSpeechResult();
            } else if (!isFinalizing && !statePractice.classList.contains('hidden') &&
                !finishModal.classList.contains('hidden')) {
                // Browsers can stop automatically after silence. Keep a manual
                // Finish action if speech was captured; never grade implicitly.
                if (finalTranscript || interimTranscript) {
                    finishReadingBtn.classList.remove('hidden');
                    finishReadingBtn.textContent = '⏹ 音読を採点する';
                } else {
                    finishReadingBtn.classList.add('hidden');
                    liveTranscription.textContent =
                        '音声認識が終了しました。もう一度試してください。';
                }
                retryReadingBtn.classList.remove('hidden');
            }
        };

        recognition.onerror = event => {
            isRecording = false;
            if (isFinalizing || statePractice.classList.contains('hidden') ||
                finishModal.classList.contains('hidden') || event.error === 'aborted') return;
            finishingRequested = false;
            isFinalizing = true;
            liveTranscription.textContent =
                '音声認識エラー: ' + String(event.error || 'unknown');
            finishReadingBtn.classList.add('hidden');
            retryReadingBtn.classList.remove('hidden');
        };
    }

    if (finishReadingBtn) {
        finishReadingBtn.addEventListener('click', finishReading);
    }
});
