const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const input = path.resolve(process.env.PICSCRIBE_DICTIONARY_SOURCE || path.join(root,'data/jmdict_light.json'));
const output = path.resolve(process.env.PICSCRIBE_DICTIONARY_OUTPUT || path.join(root,'api/_dictionary'));
const normalize = value => String(value ?? '').normalize('NFKC').toLowerCase().replace(/\s+/g,' ').trim();

function bucketFor(value) {
  const key = normalize(value);
  if (!key) return null;
  return /^[a-z0-9]$/.test(key[0]) ? key[0] : 'u' + String(key.codePointAt(0)%64).padStart(2,'0');
}

function buildShards(dictionary) {
  const shards = new Map();
  let count = 0;
  for (const entry of Object.values(dictionary)) {
    if (typeof entry?.word !== 'string' || typeof entry?.meaning !== 'string') continue;
    count++;
    const terms = new Set();
    for (const raw of [entry.word, entry.meaning, ...(Array.isArray(entry.searchKeys)?entry.searchKeys:[])]) {
      if (typeof raw !== 'string') continue;
      const phrase = normalize(raw);
      if (!phrase || phrase.length > 120) continue;
      terms.add(phrase);
      if (/^[\x00-\x7f]+$/.test(phrase)) {
        for (const token of phrase.match(/[a-z0-9']+/g) || []) {
          if (token.length >= 2) terms.add(token);
        }
      }
    }
    const byBucket = new Map();
    for (const term of terms) {
      const bucket = bucketFor(term);
      if (!bucket) continue;
      if (!byBucket.has(bucket)) byBucket.set(bucket,[]);
      byBucket.get(bucket).push(term);
    }
    for (const [bucket, keys] of byBucket) {
      if (!shards.has(bucket)) shards.set(bucket,[]);
      shards.get(bucket).push([entry.word,entry.meaning,keys]);
    }
  }
  return {shards,count};
}

function main() {
  if (!fs.existsSync(input)) throw Error('Dictionary source not found: ' + input);
  if (path.basename(output) !== '_dictionary') throw Error('Unsafe dictionary output path');
  const sourceBytes = fs.statSync(input).size;
  const {shards,count} = buildShards(JSON.parse(fs.readFileSync(input,'utf8')));
  if (!shards.size) throw Error('Dictionary index would be empty');
  fs.mkdirSync(output,{recursive:true});
  for (const file of fs.readdirSync(output)) {
    if (/^(?:[a-z0-9]|u\d{2}|manifest)\.json$/.test(file)) fs.unlinkSync(path.join(output,file));
  }
  let indexBytes = 0;
  for (const [bucket,rows] of shards) {
    const json = JSON.stringify(rows);
    indexBytes += Buffer.byteLength(json);
    fs.writeFileSync(path.join(output,bucket+'.json'),json);
  }
  const manifest = {version:1,mode:'prefix',entries:count,sourceBytes,indexBytes,shardCount:shards.size};
  fs.writeFileSync(path.join(output,'manifest.json'),JSON.stringify(manifest));
  console.log(JSON.stringify(manifest,null,2));
}
if (require.main === module) main();
module.exports = {normalize,bucketFor,buildShards};
