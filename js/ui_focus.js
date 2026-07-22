/**
 * ui_focus.js
 * Focusボタン、左サイドバー(Scaffolding)、画像クリックヒントのUI制御（統合版）
 */

const focusBtns = document.querySelectorAll('.focus-btn');
const hintTitle = document.getElementById('hint-title');
const hintContent = document.getElementById('hint-content');
const overlaysContainer = document.getElementById('overlays-container');
const imageArea = document.getElementById('image-area');

// 英語と日本語をセットにしたインタラクティブなタグを生成する関数
function createTagHtml(en, ja) {
    return `
        <div class="f-tag-wrapper" onclick="this.classList.toggle('show-ja')">
            <span class="f-tag">${en}</span>
            <span class="f-tag-ja">${ja}</span>
        </div>
    `;
}

// 専門用語を排除し、2段組＋翻訳に対応したヒントデータ
const focusHints = {
    'gist': {
        title: "💡 Main Gist のヒント",
        content: `
            <div class="friendly-scaffold">
                <p class="scaffold-desc">画像の中心となる<strong>「人物」</strong>や<strong>「主な動作」</strong>を書いてみましょう。<br><span style="font-size:11.5px;color:#888;">※英語をタップすると日本語訳が出ます</span></p>
                <div class="scaffold-group">
                    <div class="scaffold-label">📝 使える表現</div>
                    <div class="scaffold-2col">
                        ${createTagHtml('A young woman is ~', '若い女性が〜している')}
                        ${createTagHtml('She is holding ~', '彼女は〜を持っている')}
                        ${createTagHtml('drinking coffee', 'コーヒーを飲んでいる')}
                        ${createTagHtml('sitting at a table', 'テーブルに座っている')}
                    </div>
                </div>
            </div>
        `
    },
    'setting': {
        title: "💡 Setting のヒント",
        content: `
            <div class="friendly-scaffold">
                <p class="scaffold-desc">画像の点線枠をクリックして、窓や机などの<strong>「背景・モノ」</strong>を足してみましょう。<br><span style="font-size:11.5px;color:#888;">※英語をタップすると日本語訳が出ます</span></p>
                <div class="scaffold-group">
                    <div class="scaffold-label">🚀 文のつなぎ方</div>
                    <div class="scaffold-2col">
                        ${createTagHtml('There is a ~', '〜があります')}
                        ${createTagHtml('by the window', '窓のそばに')}
                        ${createTagHtml('on the table', '木製のテーブルの上に')}
                        ${createTagHtml('in the background', '背景に')}
                    </div>
                </div>
            </div>
        `
    },
    'mood': {
        title: "💡 Mood のヒント",
        content: `
            <div class="friendly-scaffold">
                <p class="scaffold-desc">光の加減や全体から感じる<strong>「雰囲気」</strong>を表現してみましょう。<br><span style="font-size:11.5px;color:#888;">※英語をタップすると日本語訳が出ます</span></p>
                <div class="scaffold-group">
                    <div class="scaffold-label">✨ 使えるフレーズ</div>
                    <div class="scaffold-2col">
                        ${createTagHtml('It looks relaxing.', 'リラックスしているように見える')}
                        ${createTagHtml('brightly lit', '明るく照らされた')}
                        ${createTagHtml('cozy atmosphere', '居心地の良い雰囲気')}
                        ${createTagHtml('warm sunlight', '暖かい日差し')}
                    </div>
                </div>
            </div>
        `
    }
};

// Focusボタンを押した時の処理
focusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        focusBtns.forEach(b => b.classList.remove('active-focus'));
        btn.classList.add('active-focus');

        const target = btn.getAttribute('data-target');
        const hintData = focusHints[target];
        
        // 1. 左枠にヒントデータを流し込む
        if (hintTitle) hintTitle.innerHTML = hintData.title;
        if (hintContent) {
            hintContent.style.opacity = 0;
            setTimeout(() => {
                hintContent.innerHTML = hintData.content;
                hintContent.style.transition = "opacity 0.3s ease";
                hintContent.style.opacity = 1;
            }, 10);
        }

        // 2. 自動的にSupport Mode（画像の白枠）をONにし、対象カテゴリのみ表示
        imageArea.classList.add('support-active');
        renderOverlays(target);
    });
});

// 画像の白枠を生成する関数（ボタンに合わせて要素をフィルタリング）
function renderOverlays(targetFocus = null) {
    overlaysContainer.innerHTML = ''; 
    cafeData.elements.forEach(element => {
        // 要素がどのFocus Areaに属するかを分類
        let elementFocus = 'setting'; // デフォルト（家具、背景、小物など）
        
        if (element.category === 'person' || (element.category === 'food_and_drink' && element.importance === 'primary')) {
            elementFocus = 'gist'; // メインの人物やアイテム
        } else if (['lighting', 'environment', 'decoration', 'mood'].includes(element.category)) {
            elementFocus = 'mood'; // 雰囲気、光、装飾など
        }

        // 選ばれたFocus Areaと一致しない要素はスキップ
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

// 画像の白枠をクリックした時に呼ばれる詳細ヒント
function showHints(element) {
    hintTitle.textContent = `${element.label_ja} (${element.label})`;
    let html = `
        <div class="friendly-scaffold">
            <p class="scaffold-desc" style="font-size:11.5px; color:#888;">※英語をタップすると日本語訳が出ます</p>
            <div class="scaffold-group">
    `;
    
    let hintsHtml = '';
    const levels = ['A1', 'A2', 'B1', 'B2', 'beginner', 'intermediate', 'advanced'];
    
    levels.forEach(level => {
        const levelHints = element.hints ? element.hints.filter(h => h.level === level) : [];
        if (levelHints.length > 0) {
            levelHints.forEach(hint => {
               let labelText = "📝 使える表現";
               if(hint.type === 'vocabulary') labelText = "📝 使える単語";
               if(hint.type === 'phrase' || hint.type === 'grammar') labelText = "🚀 フレーズ・構文";

               let enText = hint.text.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
               let jaText = hint.ja || "（詳細な訳）"; // データ側にjaがあればそれを表示

               hintsHtml += `
                   <div style="grid-column: span 2;">
                       <div class="scaffold-label" style="margin-top: 8px;">${labelText}</div>
                   </div>
                   <div class="f-tag-wrapper" style="grid-column: span 2;" onclick="this.classList.toggle('show-ja')">
                       <span class="f-tag" style="white-space: normal; text-align: left;">${enText}</span>
                       <span class="f-tag-ja">${jaText}</span>
                   </div>
               `;
            });
        }
    });
    
    html += `<div class="scaffold-2col">${hintsHtml}</div></div></div>`;
    hintContent.innerHTML = html;
}

// 判定時に自動で枠を出す処理（game_core.jsから呼ばれる）
function createGoldOverlayFromTarget(target) {
    const elData = cafeData.elements.find(e => e.id === target.id);
    if (!elData || !elData.bounding_box_conceptual) return;

    const [top, left, height, width] = elData.bounding_box_conceptual;
    const overlay = document.createElement('div');
    overlay.className = 'gold-overlay';
    overlay.style.top = `${top}%`; overlay.style.left = `${left}%`; overlay.style.height = `${height}%`; overlay.style.width = `${width}%`;
    imageArea.appendChild(overlay);
}

// Focusボタン自体のガイド処理（game_core.jsから呼ばれる）
function updateGlowAndButtons() {
    const skipBtn = document.getElementById('skip-step-btn');
    if (currentStep <= totalSteps || categoryHits.setting < LIGHT_THRESHOLD || categoryHits.details < LIGHT_THRESHOLD) {
        if(skipBtn) skipBtn.classList.remove('hidden');
    } else {
        if(skipBtn) skipBtn.classList.add('hidden');
    }
}