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

// Lazy scene loader: one data script per selected scene instead of 35 at startup.
// Restrict filenames to known catalog IDs, and keep the promise for repeat visits.
const sceneScriptCache = new Map();
const sceneLoading = document.getElementById('scene-loading');
const sceneLoadingMessage = document.getElementById('scene-loading-message');
const sceneLoadError = document.getElementById('scene-load-error');
let sceneRequestToken = 0;

function getSceneFile(sceneId) {
    if (sceneId === 'cafe') return 'data/data_picture.js';
    if (sceneId === 'library_boy') return 'data/library_boy_data.js';
    if (/^scene_0(?:0[3-9]|[12][0-9]|3[0-5])$/.test(sceneId)) {
        return 'data/' + sceneId.slice(-3) + '_data.js';
    }
    return null;
}

function loadSceneScript(sceneId) {
    const file = getSceneFile(sceneId);
    if (!file) return Promise.reject(new Error('Unknown scene'));
    if (sceneScriptCache.has(sceneId)) return sceneScriptCache.get(sceneId);
    const promise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = file;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => {
            sceneScriptCache.delete(sceneId);
            script.remove();
            reject(new Error('Failed to load ' + file));
        };
        document.body.appendChild(script);
    });
    sceneScriptCache.set(sceneId, promise);
    return promise;
}

async function launchGame(sceneId) {
    const token = ++sceneRequestToken;
    sceneLoadError.classList.add('hidden');
    sceneLoadingMessage.textContent = '教材を読み込んでいます…';
    sceneLoading.classList.remove('hidden');
    selectionScreen.classList.add('scene-selection-loading');
    try {
        await loadSceneScript(sceneId);
        if (token !== sceneRequestToken) return;
        if (typeof initGame !== 'function' || !initGame(sceneId)) {
            throw new Error('Scene data was not initialized');
        }
        appHeader.classList.add('hidden');
        selectionScreen.classList.add('hidden');
        gameContainer.classList.remove('hidden');
    } catch (error) {
        if (token !== sceneRequestToken) return;
        console.error('PicScribe scene load error:', error);
        sceneLoadError.textContent =
            '教材を読み込めませんでした。通信状態を確認し、画像をもう一度選択してください。';
        sceneLoadError.classList.remove('hidden');
    } finally {
        if (token === sceneRequestToken) {
            sceneLoading.classList.add('hidden');
            selectionScreen.classList.remove('scene-selection-loading');
        }
    }
}

document.getElementById('cancel-scene-load-btn').addEventListener('click', () => {
    sceneRequestToken++;
    sceneLoading.classList.add('hidden');
    selectionScreen.classList.remove('scene-selection-loading');
});


function switchMacroCategory(targetId, element) {
    document.querySelectorAll('.macro-card').forEach(card => card.classList.remove('active'));
    element.classList.add('active');
    document.querySelectorAll('.macro-panel').forEach(panel => panel.classList.remove('active-panel'));
    document.getElementById(targetId).classList.add('active-panel');
}

backToHomeBtn.addEventListener('click', showSelectionScreen);

// Image picker stays searchable without downloading any large scene data.
const sceneFilterInput = document.getElementById('scene-filter-input');
const sceneFilterCount = document.getElementById('scene-filter-count');
const sceneFilterEmpty = document.getElementById('scene-filter-empty');
const sceneCards = Array.from(document.querySelectorAll('.image-card'));
function filterSceneCards() {
    if (!sceneFilterInput) return;
    const query = sceneFilterInput.value.normalize('NFKC').toLowerCase().trim();
    let shown = 0;
    sceneCards.forEach(card => {
        const matches = !query || card.textContent.normalize('NFKC').toLowerCase().includes(query);
        card.hidden = !matches;
        if (matches) shown++;
    });
    if (sceneFilterCount) sceneFilterCount.textContent = shown + ' / ' + sceneCards.length + ' scenes';
    if (sceneFilterEmpty) sceneFilterEmpty.classList.toggle('hidden', shown !== 0);
}
if (sceneFilterInput) {
    sceneFilterInput.addEventListener('input', filterSceneCards);
    filterSceneCards();
}
sceneCards.forEach(card => card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        card.click();
    }
}));



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
        if (query.length === 0 || (/^[a-z0-9]/i.test(query) && query.length < 2)) {
            dictSuggestions.classList.add('hidden');
            return;
        }

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
                        li.tabIndex = 0;
                        li.setAttribute('role', 'option');
                        const selectSuggestion = () => {
                            searchRequestId++;
                            openDictModal(data);
                            dictSuggestions.classList.add('hidden');
                            dictInput.value = '';
                        };
                        li.addEventListener('click', selectSuggestion);
                        li.addEventListener('keydown', event => {
                            if (event.key === 'Enter' || event.key === ' ') {
                                event.preventDefault();
                                selectSuggestion();
                            }
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

    dictInput.addEventListener('keydown', event => {
        if (event.key === 'Escape') dictSuggestions.classList.add('hidden');
        if (event.key === 'ArrowDown') {
            const first = dictSuggestions.querySelector('li');
            if (first) {
                event.preventDefault();
                first.focus();
            }
        }
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