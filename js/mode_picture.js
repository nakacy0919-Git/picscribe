/**
 * mode_picture.js
 * ピクチャー描写モードの初期化・司令塔（全体の制御）
 */

function initGame(sceneId = 'cafe') {
    // ゲームデータをセットアップ
    setupGameData();
    
    document.getElementById('target-image').src = cafeData.imageUrl ? cafeData.imageUrl : ("images/" + cafeData.image_id);
    
    // 入力とスコアのリセット
    const userInput = document.getElementById('user-input');
    userInput.innerText = ''; 
    alreadyHitWords = []; 
    currentEarnedScore = 0;
    categoryHits = { gist: 0, setting: 0, details: 0 };
    currentStep = 1;
    
    // UIのリセット
    document.getElementById('overlays-container').innerHTML = ''; 
    document.querySelectorAll('.gold-overlay, .hint-glow-overlay').forEach(el => el.remove());
    updateCoverageDisplay();
    
    const resultArea = document.getElementById('result-area');
    if(resultArea) resultArea.classList.add('hidden'); 
    
    const modalEl = document.getElementById('finish-modal');
    if (modalEl) modalEl.classList.add('hidden');

    // ★ 初期状態の案内文をアップデート
    document.getElementById('hint-content').innerHTML = '<p class="hint-placeholder" style="margin-top: 30px;">右のFocusボタン（Main Gist / Setting / Mood）のいずれかを押すと、画像の描写ヒント枠が表示されます。</p>';
    document.getElementById('hint-title').textContent = "💡 Hint Area";

    // 枠線を初期状態では隠す
    document.getElementById('image-area').classList.remove('support-active');
    
    userInput.contentEditable = "true"; 
    const submitBtn = document.getElementById('submit-btn');
    if(submitBtn) submitBtn.disabled = false;
    
    updateGlowAndButtons(); 
    userInput.focus();
}