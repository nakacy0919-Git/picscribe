/**
 * ui_focus.js
 * Focusボタンのトグル、Scaffoldingの整理・ページネーション、TTS、文字サイズ可変の統合UI
 */

const focusBtns = document.querySelectorAll('.focus-btn');
const hintTitle = document.getElementById('hint-title');
const hintContent = document.getElementById('hint-content');
const overlaysContainer = document.getElementById('overlays-container');
const imageArea = document.getElementById('image-area');

// --- ヘッダーに文字サイズ変更ボタンを自動追加 ---
const headerEl = document.querySelector('.hint-header');
if (headerEl && !document.querySelector('.text-size-controls')) {
    const controls = document.createElement('div');
    controls.className = 'text-size-controls';
    controls.innerHTML = `
        <button onclick="changeHintTextSize(-1)" title="文字を小さく">A-</button>
        <button onclick="changeHintTextSize(1)" title="文字を大きく">A+</button>
    `;
    headerEl.appendChild(controls);
}

// --- 文字サイズと音声読み上げの機能 ---
let hintBaseSize = 13;
window.changeHintTextSize = function(delta) {
    hintBaseSize += delta;
    if(hintBaseSize < 10) hintBaseSize = 10;
    if(hintBaseSize > 20) hintBaseSize = 20;
    document.documentElement.style.setProperty('--hint-fs', `${hintBaseSize}px`);
    document.documentElement.style.setProperty('--hint-ja-fs', `${hintBaseSize - 1.5}px`);
};

window.speakText = function(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel(); 
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
};

// 英語と日本語をセットにしたインタラクティブタグ生成
function createTagHtml(en, ja) {
    let cleanEn = en.replace(/~/g, '').replace(/'/g, "\\'").trim();
    return `
        <div class="f-tag-wrapper" onclick="this.classList.toggle('show-ja')">
            <div class="f-tag" style="display:flex; align-items:center; text-align:left;">
                <span class="tts-btn" onclick="event.stopPropagation(); speakText('${cleanEn}')">🔊</span>
                <span style="flex:1;">${en}</span>
            </div>
            <div class="f-tag-ja">${ja}</div>
        </div>
    `;
}

// ★修正：ヒントの内容を現在のデータ（window.currentSceneData）から動的に生成する関数
function getDynamicHint(target) {
    // デフォルト（カフェ）のヒントデータ（フォールバック用）
    const defaultHints = {
        'gist': [
            {en: 'A young woman is ~', ja: '若い女性が〜している'},
            {en: 'She is holding ~', ja: '彼女は〜を持っている'},
            {en: 'drinking coffee', ja: 'コーヒーを飲んでいる'},
            {en: 'sitting at a table', ja: 'テーブルに座っている'}
        ],
        'setting': [
            {en: 'There is a ~', ja: '〜があります'},
            {en: 'by the window', ja: '窓のそばに'},
            {en: 'on the table', ja: '木製のテーブルの上に'},
            {en: 'in the background', ja: '背景に'}
        ],
        'mood': [
            {en: 'It looks relaxing.', ja: 'リラックスしているように見える'},
            {en: 'brightly lit', ja: '明るく照らされた'},
            {en: 'cozy atmosphere', ja: '居心地の良い雰囲気'},
            {en: 'warm sunlight', ja: '暖かい日差し'}
        ]
    };

    const titles = {
        'gist': "💡 Main Gist のヒント",
        'setting': "💡 Setting のヒント",
        'mood': "💡 Mood のヒント"
    };
    
    const descriptions = {
        'gist': "画像の中心となる<strong>「人物」</strong>や<strong>「主な動作」</strong>を書いてみましょう。",
        'setting': "画像の点線枠をクリックして、窓や机などの<strong>「背景・モノ」</strong>を足してみましょう。",
        'mood': "光の加減や全体から感じる<strong>「雰囲気」</strong>を表現してみましょう。"
    };
    
    const labels = {
        'gist': "📝 使える表現",
        'setting': "🚀 文のつなぎ方",
        'mood': "✨ 使えるフレーズ"
    };

    // 現在のデータに focus_hints があればそれを使い、無ければデフォルトを使う
    let hintItems = defaultHints[target];
    if (window.currentSceneData && window.currentSceneData.focus_hints && window.currentSceneData.focus_hints[target]) {
        hintItems = window.currentSceneData.focus_hints[target];
    }

    let tagsHtml = '';
    hintItems.forEach(item => {
        tagsHtml += createTagHtml(item.en, item.ja);
    });

    return {
        title: titles[target],
        content: `<div class="friendly-scaffold">
            <p class="scaffold-desc">${descriptions[target]}<br><span style="font-size:11.5px;color:#888;">※英単語タップで和訳表示 / 🔊で発音</span></p>
            <div class="scaffold-group"><div class="scaffold-label">${labels[target]}</div><div class="scaffold-2col">
            ${tagsHtml}
            </div></div></div>`
    };
}

// --- Focusボタンのトグル（オンオフ）機能 ---
function resetHintPanel() {
    hintTitle.innerHTML = "💡 Hint Area";
    hintContent.innerHTML = '<p class="hint-placeholder" style="margin-top: 30px;">右のFocusボタン（Main Gist / Setting / Mood）のいずれかを押すと、画像の描写ヒント枠が表示されます。</p>';
}

focusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const isActive = btn.classList.contains('active-focus');
        
        // 全てリセット
        focusBtns.forEach(b => b.classList.remove('active-focus'));
        imageArea.classList.remove('support-active');
        overlaysContainer.innerHTML = '';
        
        // すでにアクティブだった場合はオフにして終了
        if (isActive) {
            resetHintPanel();
            return;
        }

        // オフ状態からオンにする処理
        btn.classList.add('active-focus');
        const target = btn.getAttribute('data-target');
        
        // ★修正：動的ヒントジェネレーターを呼び出す
        const hintData = getDynamicHint(target);
        
        if (hintTitle) hintTitle.innerHTML = hintData.title;
        if (hintContent) {
            hintContent.style.opacity = 0;
            setTimeout(() => {
                hintContent.innerHTML = hintData.content;
                hintContent.style.transition = "opacity 0.2s ease";
                hintContent.style.opacity = 1;
            }, 10);
        }

        imageArea.classList.add('support-active');
        renderOverlays(target);
    });
});

// 画像の白枠を生成
function renderOverlays(targetFocus = null) {
    overlaysContainer.innerHTML = ''; 
    
    // ★修正：現在選択されているシーンのデータを使用する
    const currentData = window.currentSceneData;
    if (!currentData || !currentData.elements) return;

    currentData.elements.forEach(element => {
        let elementFocus = 'setting'; 
        if (element.category === 'person' || (element.category === 'food_and_drink' && element.importance === 'primary')) {
            elementFocus = 'gist'; 
        } else if (['lighting', 'environment', 'decoration', 'mood'].includes(element.category)) {
            elementFocus = 'mood'; 
        }

        if (targetFocus && elementFocus !== targetFocus) return;

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

// --- ページネーションとグループ化の処理 ---
let currentHintPages = [];
let currentHintPageIdx = 0;
let currentTargetTitleJa = '';
let currentTargetTitleEn = '';

function showHints(element) {
    currentTargetTitleJa = element.label_ja;
    currentTargetTitleEn = element.label;
    
    let allItems = [];
    const groupOrder = [
        { keys: ['vocabulary'], label: '📝 使える単語' },
        { keys: ['phrase', 'sentence'], label: '✨ 使える表現文' },
        { keys: ['grammar', 'sentence_starter'], label: '🚀 フレーズ・構文' }
    ];

    const levels = ['A1', 'A2', 'B1', 'B2', 'beginner', 'intermediate', 'advanced'];
    
    groupOrder.forEach(go => {
        levels.forEach(level => {
            const items = element.hints ? element.hints.filter(h => h.level === level && go.keys.includes(h.type)) : [];
            items.forEach(h => {
                allItems.push({ ...h, groupLabel: go.label });
            });
        });
    });

    const ITEMS_PER_PAGE = 6;
    currentHintPages = [];
    for(let i=0; i<allItems.length; i+=ITEMS_PER_PAGE) {
        currentHintPages.push(allItems.slice(i, i+ITEMS_PER_PAGE));
    }
    currentHintPageIdx = 0;

    renderHintPage();
}

function renderHintPage() {
    if(currentHintPages.length === 0) {
        hintContent.innerHTML = "<p>ヒントデータがありません。</p>";
        return;
    }

    let html = `
        <div class="friendly-scaffold">
            <p class="scaffold-desc" style="font-size:11.5px; color:#888;">※英単語タップで和訳表示 / 🔊で発音</p>
    `;
    
    const pageItems = currentHintPages[currentHintPageIdx];
    let currentGroup = '';

    pageItems.forEach(item => {
        if (item.groupLabel !== currentGroup) {
            if (currentGroup !== '') html += `</div></div>`;
            html += `
                <div class="scaffold-group" style="margin-top: 5px;">
                    <div class="scaffold-label">${item.groupLabel}</div>
                    <div class="scaffold-2col">
            `;
            currentGroup = item.groupLabel;
        }

        let enText = item.text.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
        let cleanEnText = item.text.replace(/\*(.*?)\*/g, "$1").replace(/'/g, "\\'"); 
        let jaText = item.text_ja || item.ja || "（詳細な訳）";

        html += `
            <div class="f-tag-wrapper" onclick="this.classList.toggle('show-ja')">
                <div class="f-tag" style="display:flex; align-items:center; text-align:left;">
                    <span class="tts-btn" onclick="event.stopPropagation(); speakText('${cleanEnText}')">🔊</span>
                    <span style="flex:1;">${enText}</span>
                </div>
                <div class="f-tag-ja">${jaText}</div>
            </div>
        `;
    });

    if (currentGroup !== '') html += `</div></div>`; 

    if (currentHintPages.length > 1) {
        html += `
            <div class="pagination-controls" style="display:flex; justify-content: space-between; align-items:center; margin-top: 15px; border-top: 1px dashed #cbd5e1; padding-top: 12px;">
                <button onclick="changePage(-1)" ${currentHintPageIdx === 0 ? 'disabled' : ''} class="page-btn">◁ 前へ</button>
                <span style="font-size:12px; font-weight:bold; color:#64748b;">Page ${currentHintPageIdx + 1} / ${currentHintPages.length}</span>
                <button onclick="changePage(1)" ${currentHintPageIdx === currentHintPages.length - 1 ? 'disabled' : ''} class="page-btn">次へ ▷</button>
            </div>
        `;
    }

    html += `</div>`;
    hintTitle.textContent = `${currentTargetTitleJa} (${currentTargetTitleEn})`;
    hintContent.innerHTML = html;
}

window.changePage = function(delta) {
    currentHintPageIdx += delta;
    if(currentHintPageIdx < 0) currentHintPageIdx = 0;
    if(currentHintPageIdx >= currentHintPages.length) currentHintPageIdx = currentHintPages.length - 1;
    renderHintPage();
}

// ★修正：現在選択されているシーンのデータを使用する
function createGoldOverlayFromTarget(target) {
    const currentData = window.currentSceneData;
    if (!currentData || !currentData.elements) return;

    const elData = currentData.elements.find(e => e.id === target.id);
    if (!elData || !elData.bounding_box_conceptual) return;
    
    const [top, left, height, width] = elData.bounding_box_conceptual;
    const overlay = document.createElement('div');
    overlay.className = 'gold-overlay';
    overlay.style.top = `${top}%`; overlay.style.left = `${left}%`;
    overlay.style.height = `${height}%`; overlay.style.width = `${width}%`;
    imageArea.appendChild(overlay);
}

function updateGlowAndButtons() {
    const skipBtn = document.getElementById('skip-step-btn');
    if (typeof currentStep !== 'undefined' && typeof categoryHits !== 'undefined') {
        if (currentStep <= (typeof totalSteps !== 'undefined' ? totalSteps : 1) || (categoryHits.setting && categoryHits.setting < CLEAR_THRESHOLD) || (categoryHits.mood && categoryHits.mood < CLEAR_THRESHOLD)) {
            if(skipBtn) skipBtn.classList.remove('hidden');
        } else {
            if(skipBtn) skipBtn.classList.add('hidden');
        }
    }
}

// --- リサイズバー（ドラッグで幅を調整）の機能 ---
document.addEventListener('DOMContentLoaded', function () {
    const resizer = document.getElementById('dragMe');
    const leftSide = document.getElementById('left-sidebar');
    const container = document.getElementById('game-container');

    if (!resizer || !leftSide || !container) return;

    let x = 0;
    let leftWidth = 0;

    const mouseDownHandler = function (e) {
        x = e.clientX;
        leftWidth = leftSide.getBoundingClientRect().width;

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
        
        resizer.classList.add('resizing');
        document.body.style.cursor = 'col-resize'; 
        
        leftSide.style.userSelect = 'none';
        leftSide.style.pointerEvents = 'none';
    };

    const mouseMoveHandler = function (e) {
        const dx = e.clientX - x;
        const newWidth = leftWidth + dx;

        if (newWidth > 250 && newWidth < 600) {
            leftSide.style.flex = `0 0 ${newWidth}px`;
        }
    };

    const mouseUpHandler = function () {
        resizer.classList.remove('resizing');
        document.body.style.cursor = '';
        
        leftSide.style.userSelect = '';
        leftSide.style.pointerEvents = '';

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    resizer.addEventListener('mousedown', mouseDownHandler);
});