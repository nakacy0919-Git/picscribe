// ==========================================
// 画面切り替えロジック (SPA動作) & タブ切り替え
// ==========================================
const appHeader = document.getElementById('app-header');
const selectionScreen = document.getElementById('selection-screen');
const gameContainer = document.getElementById('game-container');
const backToHomeBtn = document.getElementById('back-to-home-btn');

// ★ 修正：確実にスプラッシュ画面を消すための即時実行ロジック
// サクサク進めるように2.0秒でフェードアウトを開始します
setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    if (splash) {
        splash.classList.add('splash-hidden');
        setTimeout(() => {
            splash.remove(); // 完全にDOMから削除して操作の邪魔をしない
        }, 800); 
    }
}, 3000); 

// アプリ起動時の初期画面表示
showSelectionScreen();


function showSelectionScreen() {
    appHeader.classList.remove('hidden');       
    selectionScreen.classList.remove('hidden'); 
    gameContainer.classList.add('hidden');      
}

function launchGame(sceneId) {
    appHeader.classList.add('hidden');          
    selectionScreen.classList.add('hidden');    
    gameContainer.classList.remove('hidden');   
    if (typeof initGame === 'function') {
        initGame(sceneId); 
    }
}

function switchMacroCategory(targetId, element) {
    document.querySelectorAll('.macro-card').forEach(card => card.classList.remove('active'));
    element.classList.add('active');
    document.querySelectorAll('.macro-panel').forEach(panel => panel.classList.remove('active-panel'));
    document.getElementById(targetId).classList.add('active-panel');
}

backToHomeBtn.addEventListener('click', showSelectionScreen);


// ==========================================
// スマート辞書＆サジェスト機能（共通API連携）
// ==========================================
const dictInput = document.getElementById('dict-search-input');
const dictSuggestions = document.getElementById('dict-suggestions');
const dictModal = document.getElementById('dict-modal');
const closeDictBtn = document.getElementById('close-dict-btn');
let searchTimeout;
let searchRequestId = 0;

if (dictInput) {
    dictInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();
        const requestId = ++searchRequestId;
        dictSuggestions.replaceChildren();
        if (query.length === 0) { dictSuggestions.classList.add('hidden'); return; }

        searchTimeout = setTimeout(async () => {
            try {
                const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
                if (!response.ok) throw new Error('API request failed');
                const results = await response.json();
                if (requestId !== searchRequestId || !Array.isArray(results)) return;

                if (results.length > 0) {
                    results.forEach(data => {
                        const li = document.createElement('li');
                        const en = document.createElement('span');
                        en.className = 'sugg-en';
                        en.textContent = String(data.word || '');
                        const ja = document.createElement('span');
                        ja.className = 'sugg-ja';
                        ja.textContent = String(data.meaning || '');
                        li.append(en, document.createTextNode(' '), ja);
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
}

function openDictModal(data) {
    document.getElementById('dict-word-title').textContent = data.word;
    document.getElementById('dict-word-meaning').textContent = data.meaning;
    const explanation = document.getElementById('dict-explanation');
    explanation.textContent = String(data.explanation || '');
    explanation.style.whiteSpace = 'pre-line';
    const synonyms = document.getElementById('dict-synonyms');
    if (synonyms && synonyms.parentElement) synonyms.parentElement.style.display = 'none';
    // Word length is not a scientifically valid measure of frequency.
    document.getElementById('dict-corpus').textContent =
        '辞書収録語です。使用頻度の実測データは現在提供していません。';
    dictModal.classList.remove('hidden');
}

if (closeDictBtn) {
    closeDictBtn.addEventListener('click', () => { dictModal.classList.add('hidden'); document.getElementById('user-input').focus(); });
}
if (dictModal) {
    dictModal.addEventListener('click', (e) => { if (e.target === dictModal) { dictModal.classList.add('hidden'); document.getElementById('user-input').focus(); } });
}