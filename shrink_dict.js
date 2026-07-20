// shrink_dict.js
const fs = require('fs');

console.log("110MBの辞書データを読み込んでいます...（数秒かかります）");

// 110MBの元ファイルを読み込む
const rawData = JSON.parse(fs.readFileSync('./data/jmdict.json', 'utf8'));
const lightDict = {};

// 必要なデータ（英語と日本語）だけを抽出する
rawData.words.forEach((item, index) => {
    const japaneseWord = (item.kanji && item.kanji.length > 0) ? item.kanji[0].text : item.kana[0].text;
    
    let englishWords = [];
    item.sense.forEach(s => {
        s.gloss.forEach(g => { 
            englishWords.push(g.text.toLowerCase()); 
        });
    });

    if (englishWords.length > 0) {
        const primaryEnglishWord = englishWords[0];
        const uniqueId = `word_${index}`;

        // 超軽量化された辞書データ
        lightDict[uniqueId] = {
            word: primaryEnglishWord,
            meaning: japaneseWord,
            explanation: `【意味】 ${japaneseWord}\n(※18万語収録 JMdictより抽出)`,
            // 検索用のキーワードも一緒に保存しておく
            searchKeys: [...englishWords, japaneseWord]
        };
    }
});

// 軽量化したデータを新しいファイルとして書き出す
fs.writeFileSync('./data/jmdict_light.json', JSON.stringify(lightDict));

console.log("ダイエット完了！ dataフォルダに jmdict_light.json が作成されました。");