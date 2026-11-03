/**
 * mode_picture.js
 * ピクチャー描写モードの初期化・司令塔（全体の制御）
 */

// システム全体で「現在どのシーンをプレイしているか」を共有するための変数
window.currentSceneData = null;

function initGame(sceneId = 'cafe') {
    // 1. 【改善】30枚のデータを管理しやすいように「辞書（マップ）」化
    const sceneDataMap = {
        'cafe': typeof cafeData !== 'undefined' ? cafeData : null,
        'library_boy': typeof libraryBoyData !== 'undefined' ? libraryBoyData : null,
        'scene_003': typeof scene003Data !== 'undefined' ? scene003Data : null,
        'scene_004': typeof scene004Data !== 'undefined' ? scene004Data : null,
        'scene_005': typeof scene005Data !== 'undefined' ? scene005Data : null,
        'scene_006': typeof scene006Data !== 'undefined' ? scene006Data : null,
        'scene_007': typeof scene007Data !== 'undefined' ? scene007Data : null,
        'scene_008': typeof scene008Data !== 'undefined' ? scene008Data : null,
        'scene_009': typeof scene009Data !== 'undefined' ? scene009Data : null,
        'scene_010': typeof scene010Data !== 'undefined' ? scene010Data : null,
        'scene_011': typeof scene011Data !== 'undefined' ? scene011Data : null,
        'scene_012': typeof scene012Data !== 'undefined' ? scene012Data : null,
        'scene_013': typeof scene013Data !== 'undefined' ? scene013Data : null,
        'scene_014': typeof scene014Data !== 'undefined' ? scene014Data : null,
        'scene_015': typeof scene015Data !== 'undefined' ? scene015Data : null,
        'scene_016': typeof scene016Data !== 'undefined' ? scene016Data : null,
        'scene_017': typeof scene017Data !== 'undefined' ? scene017Data : null,
        'scene_018': typeof scene018Data !== 'undefined' ? scene018Data : null,
        'scene_019': typeof scene019Data !== 'undefined' ? scene019Data : null,
        'scene_020': typeof scene020Data !== 'undefined' ? scene020Data : null,
        'scene_021': typeof scene021Data !== 'undefined' ? scene021Data : null,
        'scene_022': typeof scene022Data !== 'undefined' ? scene022Data : null,
        'scene_023': typeof scene023Data !== 'undefined' ? scene023Data : null,
        'scene_024': typeof scene024Data !== 'undefined' ? scene024Data : null,
        'scene_025': typeof scene025Data !== 'undefined' ? scene025Data : null,
        'scene_026': typeof scene026Data !== 'undefined' ? scene026Data : null,
        'scene_027': typeof scene027Data !== 'undefined' ? scene027Data : null,
        'scene_028': typeof scene028Data !== 'undefined' ? scene028Data : null,
        'scene_029': typeof scene029Data !== 'undefined' ? scene029Data : null,
        'scene_030': typeof scene030Data !== 'undefined' ? scene030Data : null,
        'scene_031': typeof scene031Data !== 'undefined' ? scene031Data : null,
        'scene_032': typeof scene032Data !== 'undefined' ? scene032Data : null,
        'scene_033': typeof scene033Data !== 'undefined' ? scene033Data : null,
        'scene_034': typeof scene034Data !== 'undefined' ? scene034Data : null,
        'scene_035': typeof scene035Data !== 'undefined' ? scene035Data : null
    };

    // Never silently show a different picture when the selected scene fails.
    window.currentSceneData = sceneDataMap[sceneId] || null;
    if (!window.currentSceneData) {
        console.error('Missing PicScribe scene: ' + sceneId);
        return false;
    }

    // 2. 決定したデータを基にゲームをセットアップ
    if (typeof setupGameData === 'function') setupGameData();
    
    // 3. 画像の読み込み
    const imagePath = window.currentSceneData.imageUrl ? window.currentSceneData.imageUrl : ("images/" + window.currentSceneData.image_id);
    document.getElementById('target-image').src = imagePath;
    
    // 入力とスコアのリセット
    const userInput = document.getElementById('user-input');
    if (userInput) userInput.innerText = ''; 
    
    if (typeof alreadyHitWords !== 'undefined') alreadyHitWords = []; 
    if (typeof currentEarnedScore !== 'undefined') currentEarnedScore = 0;
    if (typeof categoryHits !== 'undefined') categoryHits = { gist: 0, setting: 0, mood: 0 };
    if (typeof currentStep !== 'undefined') currentStep = 1;
    
    // UIのリセット
    const overlaysContainer = document.getElementById('overlays-container');
    if (overlaysContainer) overlaysContainer.innerHTML = ''; 
    
    document.querySelectorAll('.gold-overlay, .hint-glow-overlay').forEach(el => el.remove());
    if (typeof updateCoverageDisplay === 'function') updateCoverageDisplay('');
    
    // ★追加改善：別の画像を選んだ時に、前のFocusボタンのオン状態を解除する
    document.querySelectorAll('.focus-btn').forEach(btn => btn.classList.remove('active-focus'));

    const resultArea = document.getElementById('result-area');
    if(resultArea) resultArea.classList.add('hidden'); 
    
    const modalEl = document.getElementById('finish-modal');
    if (modalEl) modalEl.classList.add('hidden');

    // 初期状態の案内文をアップデート
    const hintContent = document.getElementById('hint-content');
    if (hintContent) hintContent.innerHTML = '<p class="hint-placeholder" style="margin-top: 30px;">右のFocusボタン（Main Gist / Setting / Mood）のいずれかを押すと、画像の描写ヒント枠が表示されます。</p>';
    const hintTitle = document.getElementById('hint-title');
    if (hintTitle) hintTitle.textContent = "💡 Hint Area";

    // 枠線を初期状態では隠す
    const imageArea = document.getElementById('image-area');
    if (imageArea) imageArea.classList.remove('support-active');
    
    if (userInput) userInput.contentEditable = "true"; 
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) submitBtn.disabled = false;
    
    // UI更新関数の呼び出し
    if (typeof updateGlowAndButtons === 'function') updateGlowAndButtons(); 
    
    // 少し待ってからフォーカスを当てる（画面遷移時のバグ防止）
    setTimeout(() => {
        if (userInput) userInput.focus();
    }, 100);
    return true;
}