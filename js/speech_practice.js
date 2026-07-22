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
            if(recognition) recognition.stop();
            userInput.contentEditable = "true"; 
            submitBtn.disabled = false;
        });
    }

    if (backToSelectionBtn) {
        backToSelectionBtn.addEventListener('click', () => {
            if(recognition) recognition.stop();
            resetToSelectionState();
        });
    }

    function resetToSelectionState() {
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

    function renderCefrContent(level) {
        cefrContentArea.innerHTML = '';
        const isBlank = blankReadingSwitch.checked;
        
        // ※ グローバルの cafeData を参照しています（将来的に複数モード対応時はここを汎用化します）
        if (typeof cafeData !== 'undefined' && cafeData.cefr_model_answers && cafeData.cefr_model_answers[level]) {
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

    if (blankReadingSwitch) {
        blankReadingSwitch.addEventListener('change', () => {
            renderCefrContent(currentCefrLevel);
        });
    }

    if (speechPracticeBtn) {
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
    }

    if (retryReadingBtn) {
        retryReadingBtn.addEventListener('click', () => {
            startRecording();
        });
    }

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
        if (accuracy > 95 && accuracy < 100) accuracy = 100; 
        
        let displayAcc = accuracy % 1 === 0 ? accuracy : accuracy.toFixed(1);
        document.getElementById('accuracy-number-value').innerText = displayAcc;
        
        const playCount = saveReadingRecord(accuracy);
        updateReadingRecordUI(playCount, accuracy);
        updateSLAAdvice(accuracy);

        const offset = 125.6 - (125.6 * (accuracy / 100));
        const gaugeFill = document.getElementById('modal-gauge-fill');
        if (gaugeFill) {
            gaugeFill.style.strokeDashoffset = offset;
            if (accuracy >= 80) gaugeFill.style.stroke = "#f59e0b";
            else if (accuracy >= 50) gaugeFill.style.stroke = "#fbbf24";
            else gaugeFill.style.stroke = "#ef4444";
        }
        
        speechResultArea.classList.remove('hidden');
        triggerCelebration(accuracy);
    }

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
        if (count === 1) comment = "初めての音読ですね！まずは声に出すことに慣れましょう。";
        else if (count >= 5 && accuracy >= 90) comment = "素晴らしい反復練習です！口周りの筋肉が英語に適応（運動記憶）しています。";
        else if (count >= 5 && accuracy < 90) comment = "諦めずに何度も挑戦していて素晴らしいです！少しずつ定着しています。";
        else comment = "継続は力なり。反復することで脳の回路が自動化されていきます。";
        document.getElementById('reading-dynamic-comment').innerText = comment;
    }

    function updateSLAAdvice(accuracy) {
        const adviceText = document.getElementById('sla-advice-text');
        if (!adviceText) return;
        
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
        recognition.onresult = (event) => {
            let interimTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) finalTranscript += event.results[i][0].transcript + ' ';
                else interimTranscript += event.results[i][0].transcript;
            }
            liveTranscription.innerHTML = finalTranscript + '<span style="color: #999;">' + interimTranscript + '</span>';
        };

        recognition.onend = () => {
            if (speechResultArea.classList.contains('hidden')) processSpeechResult();
        };

        recognition.onerror = (event) => {
            liveTranscription.innerHTML = `<span style="color:red;">Error: ${event.error}</span>`;
            finishReadingBtn.classList.add('hidden');
            retryReadingBtn.classList.remove('hidden');
        };
    }

    if (finishReadingBtn) {
        finishReadingBtn.addEventListener('click', () => processSpeechResult());
    }
});