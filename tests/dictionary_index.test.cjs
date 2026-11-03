const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {spawnSync} = require('node:child_process');
const {pathToFileURL} = require('node:url');
const {bucketFor, buildShards} = require('../scripts/build-dictionary-index.cjs');

const sample = {
  word_0: {word:'apple',meaning:'りんご',searchKeys:['apple','red apple','りんご']},
  word_1: {word:'a cup of coffee',meaning:'コーヒー',searchKeys:['a cup of coffee','hot coffee','珈琲']},
  word_2: {word:'study',meaning:'勉強',searchKeys:['study','studying','勉強する']}
};

test('sharding stores English inner tokens and Japanese prefixes', () => {
  const {shards,count} = buildShards(sample);
  assert.equal(count,3);
  assert.ok(shards.get(bucketFor('coffee')).some(row => row[0]==='a cup of coffee'));
  assert.ok(shards.get(bucketFor('りん')).some(row => row[0]==='apple'));
  assert.equal(bucketFor('Ａpple'),bucketFor('apple'));
});

test('build and API lookup use only generated shards', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(),'picscribe-index-'));
  const dataFile = path.join(dir,'source.json');
  const indexDir = path.join(dir,'_dictionary');
  fs.writeFileSync(dataFile,JSON.stringify(sample));
  const build = spawnSync(process.execPath,
    [path.join(__dirname,'../scripts/build-dictionary-index.cjs')],{
      env:{...process.env,PICSCRIBE_DICTIONARY_SOURCE:dataFile,
        PICSCRIBE_DICTIONARY_OUTPUT:indexDir}, encoding:'utf8'
    });
  try {
    assert.equal(build.status,0,build.stderr);
    const manifest = JSON.parse(fs.readFileSync(path.join(indexDir,'manifest.json'),'utf8'));
    assert.equal(manifest.entries,3);
    assert.ok(manifest.indexBytes>0);
    process.env.PICSCRIBE_DICTIONARY_INDEX_DIR=indexDir;
    const apiUrl = pathToFileURL(path.join(__dirname,'../api/search.js')).href;
    const {default: handler} = await import(apiUrl+'?fixture='+Date.now());
    const invoke = (q,method='GET') => {
      const res = {
        code:200,headers:{},body:null,
        setHeader(key,value){this.headers[key]=value;},
        status(code){this.code=code;return this;},
        json(body){this.body=body;return this;}
      };
      handler({method,query:{q}},res);
      return res;
    };
    const coffee = invoke('coffee');
    assert.equal(coffee.code,200);
    assert.ok(coffee.body.some(item=>item.word==='a cup of coffee'));
    const japanese = invoke('りん');
    assert.ok(japanese.body.some(item=>item.meaning==='りんご'));
    assert.equal(invoke('pple').body.length,0); // intended prefix behavior
    assert.equal(invoke('a').body.length,0); // avoid costly one-letter queries
    assert.equal(invoke('coffee','POST').code,405);
  } finally {
    delete process.env.PICSCRIBE_DICTIONARY_INDEX_DIR;
    fs.rmSync(dir,{recursive:true,force:true});
  }
});

test('all 35 scene images have lazy selection without preload scripts', () => {
  const root=path.join(__dirname,'..');
  const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
  const selected=[...html.matchAll(/launchGame\('([^']+)'\)/g)].map(m=>m[1]);
  assert.equal(selected.length,35);
  assert.equal(new Set(selected).size,35);
  assert.equal((html.match(/<script src="data\//g)||[]).length,0);
  for(const sceneId of selected) {
    const filename=sceneId==='cafe'?'data/data_picture.js':
      sceneId==='library_boy'?'data/library_boy_data.js':
      'data/'+sceneId.slice(-3)+'_data.js';
    assert.ok(fs.existsSync(path.join(root,filename)),filename);
  }
});
