// api/search.js (Vercelの裏側で動くAPI)
import dictData from '../data/jmdict_light.json';

export default function handler(req, res) {
    // フロントエンド(app.js)から送られてきた検索キーワード(q)を受け取る
    const query = req.query.q ? req.query.q.toLowerCase().trim() : '';

    if (!query) {
        return res.status(200).json([]);
    }

    const results = [];
    
    // 軽量化された辞書の中からキーワードに一致するものを探す
    for (const [key, data] of Object.entries(dictData)) {
        // キーワードが含まれているかチェック
        const isMatch = data.searchKeys.some(searchKey => searchKey.includes(query));
        
        if (isMatch) {
            results.push(data);
        }

        // 検索結果が10件見つかったらそこでストップ（爆速化の秘訣）
        if (results.length >= 10) break;
    }

    // 見つかったデータだけをフロントエンドに返す
    res.status(200).json(results);
}