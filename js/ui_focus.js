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

// Focusボタン用の基本ヒントデータ
const focusHints = {
    'gist': {
        title: "💡 Main Gist のヒント",
        content: `<div class="friendly-scaffold">
            <p class="scaffold-desc">画像の中心となる<strong>「人物」</strong>や<strong>「主な動作」</strong>を書いてみましょう。<br><span style="font-size:11.5px;color:#888;">※英単語タップで和訳表示 / 🔊で発音</span></p>
            <div class="scaffold-group"><div class="scaffold-label">📝 使える表現</div><div class="scaffold-2col">
            ${createTagHtml('A young woman is ~', '若い女性が〜している')}
            ${createTagHtml('She is holding ~', '彼女は〜を持っている')}
            ${createTagHtml('drinking coffee', 'コーヒーを飲んでいる')}
            ${createTagHtml('sitting at a table', 'テーブルに座っている')}
            </div></div></div>`
    },
    'setting': {
        title: "💡 Setting のヒント",
        content: `<div class="friendly-scaffold">
            <p class="scaffold-desc">画像の点線枠をクリックして、窓や机などの<strong>「背景・モノ」</strong>を足してみましょう。<br><span style="font-size:11.5px;color:#888;">※英単語タップで和訳表示 / 🔊で発音</span></p>
            <div class="scaffold-group"><div class="scaffold-label">🚀 文のつなぎ方</div><div class="scaffold-2col">
            ${createTagHtml('There is a ~', '〜があります')}
            ${createTagHtml('by the window', '窓のそばに')}
            ${createTagHtml('on the table', '木製のテーブルの上に')}
            ${createTagHtml('in the background', '背景に')}
            </div></div></div>`
    },
    'mood': {
        title: "💡 Mood のヒント",
        content: `<div class="friendly-scaffold">
            <p class="scaffold-desc">光の加減や全体から感じる<strong>「雰囲気」</strong>を表現してみましょう。<br><span style="font-size:11.5px;color:#888;">※英単語タップで和訳表示 / 🔊で発音</span></p>
            <div class="scaffold-group"><div class="scaffold-label">✨ 使えるフレーズ</div><div class="scaffold-2col">
            ${createTagHtml('It looks relaxing.', 'リラックスしているように見える')}
            ${createTagHtml('brightly lit', '明るく照らされた')}
            ${createTagHtml('cozy atmosphere', '居心地の良い雰囲気')}
            ${createTagHtml('warm sunlight', '暖かい日差し')}
            </div></div></div>`
    }
};

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
        const hintData = focusHints[target];
        
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
    cafeData.elements.forEach(element => {
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
    // 情報をひとまとめにするためのグループ定義
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

    // 1ページあたり6要素（2段組で3行）で分割
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
        // グループラベルが変わった時に見出しを挿入
        if (item.groupLabel !== currentGroup) {
            if (currentGroup !== '') html += `</div></div>`; // 前のグループを閉じる
            html += `
                <div class="scaffold-group" style="margin-top: 5px;">
                    <div class="scaffold-label">${item.groupLabel}</div>
                    <div class="scaffold-2col">
            `;
            currentGroup = item.groupLabel;
        }

        let enText = item.text.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
        let cleanEnText = item.text.replace(/\*(.*?)\*/g, "$1").replace(/'/g, "\\'"); 
        // ★ ここがデータファイルの text_ja を正確に読み込むための修正箇所です ★
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

    if (currentGroup !== '') html += `</div></div>`; // 最後のグループを閉じる

    // ページネーションコントロール
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

function createGoldOverlayFromTarget(target) {
    const elData = cafeData.elements.find(e => e.id === target.id);
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
    if (currentStep <= totalSteps || categoryHits.setting < LIGHT_THRESHOLD || categoryHits.details < LIGHT_THRESHOLD) {
        if(skipBtn) skipBtn.classList.remove('hidden');
    } else {
        if(skipBtn) skipBtn.classList.add('hidden');
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
        // マウスの初期位置とサイドバーの初期幅を取得
        x = e.clientX;
        leftWidth = leftSide.getBoundingClientRect().width;

        // リサイズ中のマウスイベントを追加
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
        
        // ピンク色を維持するためのクラスを追加
        resizer.classList.add('resizing');
        document.body.style.cursor = 'col-resize'; // 全体のカーソルを変更
        
        // 画像やテキストの選択を防ぐ
        leftSide.style.userSelect = 'none';
        leftSide.style.pointerEvents = 'none';
    };

    const mouseMoveHandler = function (e) {
        // マウスの移動量を計算して新しい幅を設定
        const dx = e.clientX - x;
        const newWidth = leftWidth + dx;

        // 最小幅(250px)と最大幅(600px)の制限を設ける
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