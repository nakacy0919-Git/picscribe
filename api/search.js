// Dictionary search uses small prefix shards prepared by npm run build.
// The original ~49MB source is not imported by the running API.
import {readFileSync, existsSync} from 'node:fs';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const INDEX = process.env.PICSCRIBE_DICTIONARY_INDEX_DIR ||
  join(dirname(fileURLToPath(import.meta.url)), '_dictionary');
const cache = new Map();
const normalize = value => String(value ?? '').normalize('NFKC')
  .toLowerCase().replace(/\s+/g, ' ').trim();

function bucketFor(value) {
  const key = normalize(value);
  if (!key) return null;
  return /^[a-z0-9]$/.test(key[0]) ? key[0] :
    'u' + String(key.codePointAt(0) % 64).padStart(2, '0');
}

function readShard(bucket) {
  if (cache.has(bucket)) {
    const rows = cache.get(bucket);
    cache.delete(bucket);
    cache.set(bucket, rows);
    return rows;
  }
  let rows;
  try {
    rows = JSON.parse(readFileSync(join(INDEX, bucket + '.json'), 'utf8'));
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    rows = [];
  }
  if (!Array.isArray(rows)) throw new Error('Invalid dictionary shard');
  cache.set(bucket, rows);
  if (cache.size > 6) cache.delete(cache.keys().next().value);
  return rows;
}

function findMatches(rows, query) {
  const exact = [], prefix = [], seen = new Set();
  for (const row of rows) {
    if (!Array.isArray(row) || row.length < 3) continue;
    const [word, meaning, keys] = row;
    if (typeof word !== 'string' || typeof meaning !== 'string' ||
        !Array.isArray(keys) || !keys.some(key => typeof key === 'string' &&
        key.startsWith(query))) continue;
    const dedupe = word + '\u0000' + meaning;
    if (seen.has(dedupe)) continue;
    seen.add(dedupe);
    const item = {word, meaning,
      explanation: '【意味】 ' + meaning + '\n（JMdict収録語彙）'};
    (normalize(word) === query || normalize(meaning) === query ?
      exact : prefix).push(item);
  }
  return exact.concat(prefix).slice(0, 10);
}

export default function handler(req, res) {
  if (req.method && req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({error:'Method not allowed'});
  }
  const raw = req.query?.q;
  if (typeof raw !== 'string') return res.status(200).json([]);
  const query = normalize(raw);
  if (!query || query.length > 80 ||
      (/^[a-z0-9]/.test(query) && query.length < 2)) return res.status(200).json([]);
  if (!existsSync(join(INDEX,'manifest.json'))) {
    console.error('Dictionary index missing: run npm run build');
    res.setHeader('Cache-Control','no-store');
    return res.status(503).json({error:'Dictionary index unavailable'});
  }
  try {
    const results = findMatches(readShard(bucketFor(query)), query);
    res.setHeader('Cache-Control','public, s-maxage=600, stale-while-revalidate=86400');
    return res.status(200).json(results);
  } catch (error) {
    console.error('Dictionary search error:', error);
    res.setHeader('Cache-Control','no-store');
    return res.status(500).json({error:'Dictionary search failed'});
  }
}
