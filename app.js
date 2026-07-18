let scoringTargets = [];
let maxScore = 0;
let categoryHits = { gist: 0, setting: 0, details: 0 };
const LIGHT_THRESHOLD = 3;

// ★修正箇所1：setupGameData()
// 要素の日本語ラベル（label_ja）も保存するように修正
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
            id: el.id, label: el.label, 
            label_ja: el.label_ja, // ← ★これを追加
            bucket: bucket, isGist: isPrimary,
            words: el.synonyms_and_related_words.map(w => w.toLowerCase()),
            weight: weight, hit: false
        });
        maxScore += weight;
    });

    cafeData.actions_analysis.forEach(action => {
        scoringTargets.push({
            id: action.id, label: 'Action', 
            label_ja: action.description_ja, // ← ★これを追加
            bucket: 'gist', isGist: true,
            words: action.synonyms.map(p => p.toLowerCase()),
            weight: 10, hit: false
        });
        maxScore += 10;
    });
    
    cafeData.overall_mood.forEach(mood => {
        scoringTargets.push({
            id: 'mood_' + mood, label: 'Mood', 
            label_ja: '雰囲気 (' + mood + ')', // ← ★これを追加
            bucket: 'details', isGist: false,
            words: [mood.toLowerCase()],
            weight: 2, hit: false
        });
        maxScore += 2;
    });
}


// ★修正箇所2：updateMissionGuide()
// 信号機が全部点灯した後は、まだ打たれていない要素を探して提示する
function updateMissionGuide() {
    const missionGuide = document.getElementById('mission-guide');
    const missionIcon = document.getElementById('mission-icon');
    const missionText = document.getElementById('mission-text');
    
    const guides = cafeData.mission_guides || {
        gist: "誰が、何をしているか書いてみよう (Gist)",
        setting: "どこにいるか、背景や家具を書いてみよう (Setting)",
        details: "どんな様子か、光や色、装飾を足してみよう (Details)"
    };

    indGist.classList.remove('next-target');
    indSetting.classList.remove('next-target');
    indDetails.classList.remove('next-target');
    missionGuide.className = '';

    if (categoryHits.gist < LIGHT_THRESHOLD) {
        missionGuide.classList.add('mission-gist');
        missionIcon.textContent = '🔴';
        missionText.textContent = `Next Target: ${guides.gist}`;
        indGist.classList.add('next-target');
        
    } else if (categoryHits.setting < LIGHT_THRESHOLD) {
        missionGuide.classList.add('mission-setting');
        missionIcon.textContent = '🟡';
        missionText.textContent = `Next Target: ${guides.setting}`;
        indSetting.classList.add('next-target');
        
    } else if (categoryHits.details < LIGHT_THRESHOLD) {
        missionGuide.classList.add('mission-details');
        missionIcon.textContent = '🟢';
        missionText.textContent = `Next Target: ${guides.details}`;
        indDetails.classList.add('next-target');
        
    } else {
        // ★ここからが新しいロジック：まだ見つけていない（hit: false）の要素を探す
        const unhitTargets = scoringTargets.filter(t => !t.hit);
        
        if (unhitTargets.length > 0) {
            // 未発見要素の中から1つ（ここでは配列の最初のもの）をターゲットとして提示
            const nextTarget = unhitTargets[0];
            missionGuide.classList.add('mission-complete'); // 黒色の枠
            missionIcon.textContent = '🔍';
            // 日本語ラベルと英語ラベルを組み合わせてヒントを出す
            missionText.textContent = `Extra Challenge: まだ描写されていない「${nextTarget.label_ja} (${nextTarget.label})」について書いてみよう！`;
        } else {
            // 全て発見した場合
            missionGuide.classList.add('mission-complete');
            missionIcon.textContent = '👑';
            missionText.textContent = 'Perfect! すべての要素を完璧に描写しました！';
        }
    }
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

    updateMissionGuide(); // ★ヒット数が増えたらガイドを更新判定
}

// ★修正：画像専用のミッションガイドを読み込む機能
function updateMissionGuide() {
    const missionGuide = document.getElementById('mission-guide');
    const missionIcon = document.getElementById('mission-icon');
    const missionText = document.getElementById('mission-text');
    
    // データに専用ガイドがあれば取得、なければ汎用メッセージを使う
    const guides = cafeData.mission_guides || {
        gist: "誰が、何をしているか書いてみよう (Gist)",
        setting: "どこにいるか、背景や家具を書いてみよう (Setting)",
        details: "どんな様子か、光や色、装飾を足してみよう (Details)",
        complete: "Mission Complete! さらに自由に描写を膨らませよう！"
    };

    // 一旦アニメーションをリセット
    indGist.classList.remove('next-target');
    indSetting.classList.remove('next-target');
    indDetails.classList.remove('next-target');
    missionGuide.className = '';

    if (categoryHits.gist < LIGHT_THRESHOLD) {
        missionGuide.classList.add('mission-gist');
        missionIcon.textContent = '🔴';
        missionText.textContent = `Next Target: ${guides.gist}`;
        indGist.classList.add('next-target');
        
    } else if (categoryHits.setting < LIGHT_THRESHOLD) {
        missionGuide.classList.add('mission-setting');
        missionIcon.textContent = '🟡';
        missionText.textContent = `Next Target: ${guides.setting}`;
        indSetting.classList.add('next-target');
        
    } else if (categoryHits.details < LIGHT_THRESHOLD) {
        missionGuide.classList.add('mission-details');
        missionIcon.textContent = '🟢';
        missionText.textContent = `Next Target: ${guides.details}`;
        indDetails.classList.add('next-target');
        
    } else {
        missionGuide.classList.add('mission-complete');
        missionIcon.textContent = '🌟';
        missionText.textContent = guides.complete;
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
    updateMissionGuide(); // ★ゲーム開始時にガイドを初期化
    userInput.focus();
}

userInput.addEventListener('input', () => {
    initAudio();
    const text = userInput.value.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    const words = text.split(/\s+/);

    scoringTargets.forEach(target => {
        if (!target.hit) {
            const hasMatch = target.words.some(targetWord => {
                if (targetWord.includes(' ')) {
                    return text.includes(targetWord);
                } else {
                    return words.some(w => {
                        // ① 完全に一致した場合
                        if (w === targetWord) return true;
                        
                        // ② ターゲット単語が3文字以上で、ユーザーの入力がその単語から始まっている場合のみ許容
                        // （例: target="sit" → input="sitting" はOK。 input="a" は弾く）
                        if (targetWord.length >= 3 && w.startsWith(targetWord) && w.length <= targetWord.length + 4) return true;
                        
                        return false;
                    });
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
// ==========================================
// 5. スマート辞書＆サジェスト機能（リッチUI・アルゴリズム搭載版）
// ==========================================

const dictInput = document.getElementById('dict-search-input');
const dictSuggestions = document.getElementById('dict-suggestions');
const dictModal = document.getElementById('dict-modal');
const closeDictBtn = document.getElementById('close-dict-btn');

let hugeDictionaryData = null;
let searchIndex = [];

// 【工夫②】JMdictを読み込み、スタイリッシュなデータに整形する
async function loadDictionaryData() {
    try {
        const response = await fetch('data/jmdict.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const rawDictData = await response.json();
        hugeDictionaryData = {};
        searchIndex = []; 

        rawDictData.words.forEach((item, index) => {
            const japaneseWord = (item.kanji && item.kanji.length > 0) ? item.kanji[0].text : item.kana[0].text;
            
            let englishWords = [];
            item.sense.forEach(s => {
                s.gloss.forEach(g => { englishWords.push(g.text.toLowerCase()); });
            });

            if (englishWords.length > 0) {
                const primaryEnglishWord = englishWords[0];
                const uniqueId = `word_${index}`;

                hugeDictionaryData[uniqueId] = {
                    word: primaryEnglishWord,
                    meaning: japaneseWord,
                    // ★修正: 不要な発音ガイドを削除し、シンプルに
                    explanation: `【意味】 ${japaneseWord}\n(※オープンソース辞書データより抽出)`, 
                    synonyms: [], 
                    corpus: "auto"
                };

                englishWords.forEach(eng => { searchIndex.push({ queryKey: eng, ref: uniqueId }); });
                searchIndex.push({ queryKey: japaneseWord, ref: uniqueId });
            }
        });

        // カスタム単語の登録（ここはそのまま）
        const customOverrides = {
            "custom_woman": {
                word: "woman", meaning: "女性",
                explanation: "大人の女性を指す最も一般的でニュートラルな単語です。複数形は women。",
                synonyms: [
                    { word: "lady", nuance: "上品な女性、淑女（少しフォーマルな響き）" },
                    { word: "female", nuance: "メス、女性（生物学的・客観的な分類）" }
                ],
                corpus: "頻度: ★★★★★ (最頻出・基本語彙)"
            }
        };

        for (const [key, customData] of Object.entries(customOverrides)) {
            hugeDictionaryData[key] = customData;
            searchIndex.push({ queryKey: customData.word.toLowerCase(), ref: key });
            searchIndex.push({ queryKey: customData.meaning, ref: key });
        }
    } catch (error) {
        console.error("辞書の読み込みに失敗しました:", error);
    }
}

// ==========================================
// 💡 リッチUIを生み出すモーダル表示関数
// ==========================================
function openDictModal(data) {
    document.getElementById('dict-word-title').textContent = data.word;
    document.getElementById('dict-word-meaning').textContent = data.meaning;
    document.getElementById('dict-explanation').innerHTML = data.explanation.replace(/\n/g, '<br>');
    
    let dynamicSynonyms = data.synonyms ? [...data.synonyms] : [];
    
    // ★修正: 類義語の自動抽出フィルターを強化（生徒が混乱するノイズを弾く）
    if (dynamicSynonyms.length === 0 && hugeDictionaryData) {
        for (const key in hugeDictionaryData) {
            const otherData = hugeDictionaryData[key];
            
            // フィルター条件: 「空白が含まれない（1単語である）」「15文字以内」「カッコ()が含まれない」
            const isCleanWord = !otherData.word.includes(' ') && 
                                !otherData.word.includes('(') && 
                                otherData.word.length <= 15;

            if (otherData.word !== data.word && otherData.meaning === data.meaning && isCleanWord) {
                dynamicSynonyms.push({ word: otherData.word, nuance: "似た意味を持つ単語・関連語" });
            }
            if (dynamicSynonyms.length >= 3) break;
        }
    }

    const synSection = document.getElementById('dict-synonyms').parentElement;
    const synList = document.getElementById('dict-synonyms');
    synList.innerHTML = '';

    if (dynamicSynonyms.length > 0) {
        dynamicSynonyms.forEach(syn => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${syn.word}</strong>${syn.nuance}`;
            synList.appendChild(li);
        });
        synSection.style.display = 'block'; 
    } else {
        synSection.style.display = 'none'; 
    }

    // ★修正: コーパス計算時に記号やカッコを無視して純粋な文字数をカウントする
    let corpusText = data.corpus;
    if (corpusText === "auto") {
        const cleanWordForCount = data.word.replace(/[^a-zA-Z]/g, ''); // アルファベット以外を除外
        const wordLen = cleanWordForCount.length;
        
        let stars = "★★★☆☆";
        let freqLevel = "標準的な語彙";
        let desc = "日常から幅広く使われます";
        
        if (wordLen <= 5) { 
            stars = "★★★★★"; freqLevel = "最頻出・基本語彙"; desc = "日常会話で非常によく使われる重要な単語です";
        } else if (wordLen <= 8) { 
            stars = "★★★★☆"; freqLevel = "高頻度語彙"; desc = "ネイティブの会話や文章で頻繁に登場します";
        } else if (wordLen >= 11) { 
            stars = "★★☆☆☆"; freqLevel = "専門的・フォーマル"; desc = "学術的な文章やフォーマルな場面で使われます";
        }
        
        corpusText = `${stars} (${freqLevel}) : ${desc}`;
    }
    document.getElementById('dict-corpus').textContent = corpusText;

    dictModal.classList.remove('hidden');
}

loadDictionaryData();

let searchTimeout;
dictInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    const query = e.target.value.toLowerCase().trim();
    dictSuggestions.innerHTML = '';
    
    if (query.length === 0) {
        dictSuggestions.classList.add('hidden');
        return;
    }

    searchTimeout = setTimeout(() => {
        if (!hugeDictionaryData) return;
        const matchedRefs = new Set();
        
        searchIndex.forEach(item => {
            if (item.queryKey.includes(query)) matchedRefs.add(item.ref);
        });

        if (matchedRefs.size > 0) {
            const results = Array.from(matchedRefs).slice(0, 10);
            results.forEach(ref => {
                const data = hugeDictionaryData[ref];
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
    }, 300); 
});

document.addEventListener('click', (e) => {
    if (!dictInput.contains(e.target) && !dictSuggestions.contains(e.target)) {
        dictSuggestions.classList.add('hidden');
    }
});

// ==========================================
// 💡 リッチUIを生み出すモーダル表示関数
// ==========================================
function openDictModal(data) {
    document.getElementById('dict-word-title').textContent = data.word;
    document.getElementById('dict-word-meaning').textContent = data.meaning;
    
    // 【魔法1】解説テキストの改行を反映させる
    document.getElementById('dict-explanation').innerHTML = data.explanation.replace(/\n/g, '<br>');
    
    // 【魔法2】巨大データを逆引きして、自動で類義語（シソーラス）を生成する
    let dynamicSynonyms = data.synonyms ? [...data.synonyms] : [];
    if (dynamicSynonyms.length === 0 && hugeDictionaryData) {
        for (const key in hugeDictionaryData) {
            const otherData = hugeDictionaryData[key];
            // 同じ日本語訳を持つ別の英単語を探し出す（最大3つまで）
            if (otherData.word !== data.word && otherData.meaning === data.meaning) {
                dynamicSynonyms.push({ word: otherData.word, nuance: "同義・関連表現（自動抽出）" });
            }
            if (dynamicSynonyms.length >= 3) break;
        }
    }

    const synSection = document.getElementById('dict-synonyms').parentElement;
    const synList = document.getElementById('dict-synonyms');
    synList.innerHTML = '';

    // 【魔法3】類義語が見つからなかった場合はセクション自体を隠してスタイリッシュに保つ
    if (dynamicSynonyms.length > 0) {
        dynamicSynonyms.forEach(syn => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${syn.word}</strong>: ${syn.nuance}`;
            synList.appendChild(li);
        });
        synSection.style.display = 'block'; 
    } else {
        synSection.style.display = 'none'; 
    }

    // 【魔法4】単語の長さからZipfの法則に基づく擬似コーパス（使用頻度）を算出
    let corpusText = data.corpus;
    if (corpusText === "auto") {
        const wordLen = data.word.length;
        let stars = "★★★☆☆";
        let freqLevel = "標準的な語彙";
        let desc = "日常からビジネスまで幅広く使われます";
        
        if (wordLen <= 4) { 
            stars = "★★★★★"; freqLevel = "最頻出・基本語彙"; desc = "日常会話で非常によく使われる重要な単語です";
        } else if (wordLen <= 7) { 
            stars = "★★★★☆"; freqLevel = "高頻度語彙"; desc = "ネイティブの会話や文章で頻繁に登場します";
        } else if (wordLen >= 11) { 
            stars = "★★☆☆☆"; freqLevel = "専門的・フォーマル"; desc = "学術的な文章やフォーマルな場面で好まれます";
        }
        
        corpusText = `${stars} (${freqLevel}) : ${desc}`;
    }
    document.getElementById('dict-corpus').textContent = corpusText;

    dictModal.classList.remove('hidden');
}

closeDictBtn.addEventListener('click', () => {
    dictModal.classList.add('hidden');
    document.getElementById('user-input').focus();
});

dictModal.addEventListener('click', (e) => {
    if (e.target === dictModal) {
        dictModal.classList.add('hidden');
        document.getElementById('user-input').focus();
    }
});