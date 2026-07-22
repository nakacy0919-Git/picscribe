/**
 * ocr_scanner.js
 * Tesseract.jsを利用した手書き文字認識機能（全モード共通）
 */

document.addEventListener("DOMContentLoaded", () => {
    const ocrFileInput = document.getElementById('ocr-file-input');
    const ocrLoading = document.getElementById('ocr-loading');
    const ocrProgress = document.getElementById('ocr-progress');
    const userInputField = document.getElementById('user-input');

    if (ocrFileInput) {
        ocrFileInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            ocrLoading.classList.remove('hidden');
            ocrProgress.textContent = "0";

            try {
                const result = await Tesseract.recognize(
                    file,
                    'eng',
                    {
                        logger: m => {
                            if (m.status === 'recognizing text') {
                                ocrProgress.textContent = Math.floor(m.progress * 100);
                            }
                        }
                    }
                );

                const cleanText = result.data.text.replace(/\n/g, ' ').trim();
                
                if (cleanText) {
                    if (userInputField.innerText.trim().length > 0) {
                        userInputField.innerText += " " + cleanText;
                    } else {
                        userInputField.innerText = cleanText;
                    }
                    
                    // 文字が入ったことをシステムに通知して判定を走らせる
                    const event = new Event('input', { bubbles: true });
                    userInputField.dispatchEvent(event);
                    
                    alert("手書き文字を読み込みました！間違いがないか確認して修正してください。");
                } else {
                    alert("文字が読み取れませんでした。もう少し明るい場所で、はっきりと撮影してみてください。");
                }

            } catch (error) {
                console.error("OCR Error:", error);
                alert("解析中にエラーが発生しました。");
            } finally {
                ocrLoading.classList.add('hidden');
                ocrFileInput.value = '';
            }
        });
    }
});