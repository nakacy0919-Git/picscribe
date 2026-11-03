// Vercel serverless dictionary search. Public read-only endpoint.
import dictData from '../data/jmdict_light.json';

// Cache the array across requests within the same warm function instance.
const entries = Object.values(dictData);

export default function handler(req, res) {
    if (req.method && req.method !== 'GET') {
        res.setHeader('Allow', 'GET');
        return res.status(405).json({error: 'Method not allowed'});
    }
    const raw = req.query && req.query.q;
    if (typeof raw !== 'string') return res.status(200).json([]);
    const query = raw.normalize('NFKC').toLowerCase().trim();
    if (!query || query.length > 80) return res.status(200).json([]);

    const matches = [];
    for (const data of entries) {
        if (!data || !Array.isArray(data.searchKeys)) continue;
        if (data.searchKeys.some(key => typeof key === 'string' &&
            key.toLowerCase().includes(query))) {
            matches.push({word: data.word, meaning: data.meaning,
                explanation: data.explanation});
            if (matches.length >= 10) break;
        }
    }
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    return res.status(200).json(matches);
}
