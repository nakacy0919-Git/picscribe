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
        // 🌟 今後イラストが増えたら、ここに1行ずつ足していくだけでOKです！
        // 'bedroom': typeof bedroomData !== 'undefined' ? bedroomData : null,
    };

    // 辞書からデータを取得（見つからなければ安全装置としてcafeをセット）
    window.currentSceneData = sceneDataMap[sceneId] || sceneDataMap['cafe'];

    if (!window.currentSceneData) {
        console.error("エラー: 指定されたシーンのデータが見つかりません。(" + sceneId + ")");
        return;
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
}