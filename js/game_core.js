/**
 * game_core.js
 * タイピング判定、カバレッジ計算（部分一致＆文章成立チェック）、サウンド再生
 */

let scoringTargets = [];
let maxScore = 0;
let categoryHits = { gist: 0, setting: 0, mood: 0 }; 
let alreadyHitWords = []; 
const CLEAR_THRESHOLD = 2; 
let currentEarnedScore = 0;
let isFormatting = false;

const userInput = document.getElementById('user-input');
const liveScoreDisplay = document.getElementById('live-score');

// --- オーディオ設定 ---
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function initAudio() { if (!audioCtx) audioCtx = new AudioContext(); }

function playHitSound(isPerfect = false) {
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    if (isPerfect) {
        // 完全一致や高得点時のキラキラ和音（ちょっと豪華に）
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1046.50, audioCtx.currentTime); // C6
        osc.frequency.setValueAtTime(1318.51, audioCtx.currentTime + 0.05); // E6
        osc.frequency.setValueAtTime(1567.98, audioCtx.currentTime + 0.1); // G6
    } else {
        // 部分一致や単語ヒット時のシンプルな音
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, audioCtx.currentTime); 
        osc.frequency.exponentialRampToValueAtTime(1760, audioCtx.currentTime + 0.1);
    }
    
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.4);
}

// --- データセットアップ（配点の最適化） ---
function setupGameData() {
    scoringTargets = []; maxScore = 0; categoryHits = { gist: 0, setting: 0, mood: 0 };

    // ヒントデータ等からターゲットとなる表現を抽出
    cafeData.elements.forEach(el => {
        let bucket = 'setting';
        const isPrimary = el.importance === 'primary';

        if (el.category === 'person' || (isPrimary && el.category === 'food_and_drink')) { 
            bucket = 'gist'; 
        } else if (['architecture', 'place', 'furniture', 'equipment'].includes(el.category)) { 
            bucket = 'setting'; 
        } else if (['nature', 'decoration', 'lighting', 'environment', 'sign', 'mood'].includes(el.category) || (!isPrimary && el.category === 'object')) { 
            bucket = 'mood'; 
        }

        const wordsArray = el.accepted_words || el.synonyms_and_related_words || [];
        
        // ターゲット表現ごとに、単語数に応じたウェイト（配点）を設定
        wordsArray.forEach(w => {
            const wordCount = w.split(' ').length;
            let weight = 3; // デフォルト（単語）
            if (wordCount >= 4) weight = 10; // 長いフレーズや文は高得点
            else if (wordCount >= 2) weight = 6; // 短いフレーズは中得点
            
            scoringTargets.push({
                id: el.id, bucket: bucket, 
                targetPhrase: w.toLowerCase(),
                wordCount: wordCount,
                weight: weight, 
                earnedPoints: 0 // 獲得済みのポイント（部分一致に対応するため）
            });
            // 最大スコアの計算（全ターゲットの合計ではなく、各エレメントの最大値を加算するなど調整可能ですが、今回は単純加算ベースで全体のパイを計算します）
            maxScore += weight; 
        });
    });

    // アクションなどの追加データ
    cafeData.actions_analysis.forEach(action => {
        const wordsArray = action.accepted_words || action.synonyms || [];
        wordsArray.forEach(p => {
            scoringTargets.push({
                id: action.id, bucket: 'gist', 
                targetPhrase: p.toLowerCase(),
                wordCount: p.split(' ').length,
                weight: p.split(' ').length >= 3 ? 10 : 6, 
                earnedPoints: 0
            });
            maxScore += (p.split(' ').length >= 3 ? 10 : 6);
        });
    });
}

// --- カバレッジと文章ルール・3要素網羅の厳格な判定 ---
function updateCoverageDisplay(rawText) {
    const targetScore = maxScore * 0.15; // 獲得スコアの基準値
    let baseCoverage = Math.floor((currentEarnedScore / targetScore) * 100);

    // ★ 1. 文章成立チェック（The Sentence Barrier）
    const words = rawText.trim().split(/\s+/);
    const hasCapital = /^[A-Z]/.test(rawText.trim());
    const hasPeriod = /[.!?]$/.test(rawText.trim());
    const isValidSentence = hasCapital && hasPeriod && words.length >= 3;

    // ★ 2. 3要素網羅チェック（Gist, Setting, Moodのすべてで1回以上ヒットしているか）
    const allCategoriesHit = (categoryHits.gist > 0 && categoryHits.setting > 0 && categoryHits.mood > 0);

    let finalCoverage = baseCoverage;

    // --- 厳格な上限（キャップ）システム ---
    if (!isValidSentence) {
        // 文のルールを満たしていなければ、最大50%
        finalCoverage = Math.min(finalCoverage, 50);
    } else if (!allCategoriesHit) {
        // 文にはなっているが、3要素が揃っていなければ、最大80%
        finalCoverage = Math.min(finalCoverage, 80);
    } else {
        // 文になっており、かつ3要素揃っていれば100%到達を許可！
        // （スコアが足りなくても、条件を満たして80%を超えていれば100%にして達成感を与える）
        if (finalCoverage >= 80) finalCoverage = 100; 
    }

    // 100を超えないようにガード
    if (finalCoverage > 100) finalCoverage = 100;

    // --- UIへの反映（ゲージの色と数値） ---
    liveScoreDisplay.innerHTML = `${finalCoverage}<span class="pts">%</span>`;
    const offset = 125.6 - (125.6 * (finalCoverage / 100));
    const gaugePath = document.getElementById('gauge-fill-path');
    
    if(gaugePath) {
        gaugePath.style.strokeDashoffset = offset;
        gaugePath.style.transition = "stroke-dashoffset 0.5s ease-out, stroke 0.5s ease";
        
        if (finalCoverage === 100) {
            gaugePath.style.stroke = "#10b981"; // 完璧！(緑)
        } else if (isValidSentence && finalCoverage > 50) {
            gaugePath.style.stroke = "#3b82f6"; // 文になっているが要素不足(青)
        } else if (!isValidSentence && baseCoverage > 50) {
            gaugePath.style.stroke = "#f59e0b"; // 単語は合ってるが文じゃない警告(オレンジ)
        } else {
            gaugePath.style.stroke = "#1a1a1a"; // 初期状態(黒)
        }
    }
}

function updateFocusButtonStyles() {
    if (categoryHits.gist >= CLEAR_THRESHOLD) {
        const btn = document.querySelector('.gist-btn');
        if (btn && !btn.classList.contains('mission-completed')) btn.classList.add('mission-completed');
    }
    if (categoryHits.setting >= CLEAR_THRESHOLD) {
        const btn = document.querySelector('.setting-btn');
        if (btn && !btn.classList.contains('mission-completed')) btn.classList.add('mission-completed');
    }
    if (categoryHits.mood >= CLEAR_THRESHOLD) {
        const btn = document.querySelector('.mood-btn');
        if (btn && !btn.classList.contains('mission-completed')) btn.classList.add('mission-completed');
    }
}

function boldMatchedWords() {
    let htmlContent = userInput.innerText; 
    alreadyHitWords.forEach(word => {
        // 単語の一部がHTMLタグと干渉しないように安全に置換
        const regex = new RegExp(`\\b(${word})\\b`, 'gi');
        htmlContent = htmlContent.replace(regex, `<span class="matched-word">$1</span>`);
    });
    userInput.innerHTML = htmlContent;
    placeCaretAtEnd(userInput);
}

function placeCaretAtEnd(el) {
    el.focus();
    if (typeof window.getSelection !== "undefined" && typeof document.createRange !== "undefined") {
        const range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }
}

// --- タイピング判定ロジック（部分一致アルゴリズム搭載） ---
userInput.addEventListener('input', () => {
    if (isFormatting) return; 
    initAudio(); 
    
    const rawText = userInput.innerText;
    // 判定用に記号を抜いた小文字の配列を作成
    const textForTyping = rawText.toLowerCase().replace(/[,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    const inputWords = textForTyping.split(/\s+/);
    
    let newHitFound = false;
    let perfectHitFound = false;

    scoringTargets.forEach(target => {
        // 既に満点を獲得しているターゲットはスキップ
        if (target.earnedPoints >= target.weight) return;

        const targetWords = target.targetPhrase.split(' ');
        let matchCount = 0;

        // ターゲットフレーズの各単語が、ユーザー入力に含まれているかチェック
        targetWords.forEach(tw => {
            if (inputWords.includes(tw)) {
                matchCount++;
                if (!alreadyHitWords.includes(tw)) alreadyHitWords.push(tw);
            }
        });

        // 一致率を計算 (0.0 〜 1.0)
        const matchRatio = matchCount / target.wordCount;
        let pointsToAward = 0;

        if (matchRatio === 1.0) {
            // 完全一致：満点
            pointsToAward = target.weight;
            perfectHitFound = true;
        } else if (matchRatio >= 0.5) {
            // 半分以上一致（惜しい！）：半分のスコア
            pointsToAward = target.weight * 0.5;
        }

        // 過去に獲得したポイントよりも高くなった場合のみ、差分を加算
        if (pointsToAward > target.earnedPoints) {
            const diff = pointsToAward - target.earnedPoints;
            currentEarnedScore += diff;
            target.earnedPoints = pointsToAward; // 獲得スコアを更新
            
            // カテゴリヒット数をカウント（完全一致の場合のみ確実にカウント）
            if (matchRatio === 1.0) {
                categoryHits[target.bucket]++; 
                createGoldOverlayFromTarget(target);
            }

            newHitFound = true;
            userInput.classList.add('hit-flash');
            setTimeout(() => userInput.classList.remove('hit-flash'), 200);
        }
    });

    updateCoverageDisplay(rawText);

    if (newHitFound) {
        updateFocusButtonStyles(); 
        playHitSound(perfectHitFound); // 完全一致時は豪華な音を鳴らす
        isFormatting = true;
        try {
            boldMatchedWords();
        } finally {
            isFormatting = false;
        }
    }
});

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