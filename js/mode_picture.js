/**
 * mode_picture.js
 * ピクチャー描写モードの初期化・司令塔（全体の制御）
 */

// ★追加：システム全体で「現在どのシーンをプレイしているか」を共有するための変数
window.currentSceneData = null;

function initGame(sceneId = 'cafe') {
    // 1. sceneId（例: 'library_boy'）に基づいて、使用するデータを自動で切り替える
    if (sceneId === 'cafe') {
        window.currentSceneData = typeof cafeData !== 'undefined' ? cafeData : null;
    } else if (sceneId === 'library_boy') {
        window.currentSceneData = typeof libraryBoyData !== 'undefined' ? libraryBoyData : null;
    } 
    // ※今後30枚増えたら、ここに else if (sceneId === 'bedroom') {...} と足していくだけでOKです！
    else {
        window.currentSceneData = typeof cafeData !== 'undefined' ? cafeData : null; // 安全装置
    }

    if (!window.currentSceneData) {
        console.error("エラー: 指定されたシーンのデータが見つかりません。(" + sceneId + ")");
        return;
    }

    // 2. 決定したデータを基にゲームをセットアップ（※game_core.jsも後で修正します）
    setupGameData();
    
    // 3. 画像も cafeData 固定ではなく、現在選択中のデータから読み込む
    const imagePath = window.currentSceneData.imageUrl ? window.currentSceneData.imageUrl : ("images/" + window.currentSceneData.image_id);
    document.getElementById('target-image').src = imagePath;
    
    // 入力とスコアのリセット
    const userInput = document.getElementById('user-input');
    userInput.innerText = ''; 
    alreadyHitWords = []; 
    currentEarnedScore = 0;
    categoryHits = { gist: 0, setting: 0, mood: 0 }; // detailsではなくmoodに修正
    if (typeof currentStep !== 'undefined') currentStep = 1;
    
    // UIのリセット
    const overlaysContainer = document.getElementById('overlays-container');
    if (overlaysContainer) overlaysContainer.innerHTML = ''; 
    
    document.querySelectorAll('.gold-overlay, .hint-glow-overlay').forEach(el => el.remove());
    if (typeof updateCoverageDisplay === 'function') updateCoverageDisplay('');
    
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
    
    userInput.contentEditable = "true"; 
    const submitBtn = document.getElementById('submit-btn');
    if(submitBtn) submitBtn.disabled = false;
    
    // UI更新関数の呼び出し（存在する場合）
    if (typeof updateGlowAndButtons === 'function') updateGlowAndButtons(); 
    
    // 少し待ってからフォーカスを当てる（画面遷移時のバグ防止）
    setTimeout(() => {
        userInput.focus();
    }, 100);
}