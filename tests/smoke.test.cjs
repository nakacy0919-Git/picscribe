/**
 * PicScribe local smoke tests. No dependencies and NO external API calls.
 * Run with: node --test tests/smoke.test.cjs
 */
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const ROOT=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(ROOT,p),'utf8');
function domNode(){
  const events={};const classes=new Set();
  return {
    innerText:'',innerHTML:'',textContent:'',style:{},
    events,addEventListener:(name,fn)=>{events[name]=fn;},
    dispatchEvent:(event)=>{if(events[event.type])events[event.type](event);},
    classList:{add:s=>classes.add(s),remove:s=>classes.delete(s),contains:s=>classes.has(s)}
  };
}
test('index loads all new modules in dependency order',()=>{
  const html=read('index.html');
  const scripts=[...html.matchAll(/<script src="(js\/[^"]+)"/g)].map(m=>m[1]);
  for(const s of ['js/ai_client.js','js/writing_coach.js','js/writing_quests.js',
    'js/eiken_practice.js','js/eiken_exam_mode.js','js/writing_portfolio.js']){
    assert.ok(scripts.includes(s),s);
    assert.ok(fs.existsSync(path.join(ROOT,s)),s);
  }
  assert.ok(scripts.indexOf('js/ai_client.js')<scripts.indexOf('js/writing_coach.js'));
  assert.ok(scripts.indexOf('js/writing_coach.js')<scripts.indexOf('js/writing_quests.js'));
  assert.ok(scripts.indexOf('js/eiken_practice.js')<scripts.indexOf('js/eiken_exam_mode.js'));
  for(const [,link] of html.matchAll(/href="(css\/[^"]+\.css)"/g))
    assert.ok(fs.existsSync(path.join(ROOT,link)),link);
});
test('browser scripts and server API parse without syntax errors',()=>{
  for(const p of ['js/game_core.js','js/ui_focus.js','js/main.js','js/writing_coach.js',
    'js/writing_quests.js','js/writing_portfolio.js','js/eiken_practice.js',
    'js/eiken_exam_mode.js','js/ai_client.js','api/writing-feedback.js']){
    const source=read(p).replace('export default async function handler','async function handler');
    assert.doesNotThrow(()=>new Function(source),p);
  }
});
test('coverage is heuristic and cannot hit 100 with a keyword fragment; input HTML not rewritten',()=>{
  const nodes={};const get=id=>nodes[id]||=domNode();
  const document={getElementById:get,querySelector:()=>domNode(),createRange:()=>({})};
  const scene={
    elements:[
      {id:'person',category:'person',accepted_words:['woman','lady','girl']},
      {id:'window',category:'object',accepted_words:['window','big window']},
      {id:'plant',category:'nature',accepted_words:['green plant']},
      {id:'sun',category:'lighting',accepted_words:['sunlight','warm']}
    ],
    actions_analysis:[{id:'drink',accepted_words:['drinking coffee','holding a cup']}],
    overall_mood:['warm','peaceful']
  };
  const win={currentSceneData:scene};
  const boot=new Function('document','window','setTimeout',
    read('js/game_core.js')+'\nreturn {setupGameData, readHits:()=>categoryHits};');
  const engine=boot(document,win,fn=>fn());
  engine.setupGameData();
  const input=get('user-input');
  input.innerText='woman window warm.';
  input.dispatchEvent({type:'input'});
  assert.ok(Number.parseInt(get('live-score').innerHTML,10)<=79);
  const untrusted='<img src=x onerror=alert(1)>';
  input.innerText=untrusted+' A woman is drinking coffee near the window.';
  input.dispatchEvent({type:'input'});
  assert.equal(input.innerHTML,'');
  assert.ok(!read('js/game_core.js').includes('userInput.innerHTML ='));
});
function fakeRes(){
  return {code:200,setHeader(){},status(code){this.code=code;return this;},
    json(payload){this.payload=payload;return this;}};
}
function handler(env,fetcher){
  const js=read('api/writing-feedback.js').replace(
    'export default async function handler','async function handler');
  return new Function('process','fetch','Buffer','AbortController','setTimeout','clearTimeout',
    js+'\nreturn handler;')({env},fetcher,Buffer,AbortController,setTimeout,clearTimeout);
}
test('AI endpoint is disabled without server secrets and requires teacher code',async()=>{
  let modelCalls=0;
  const noCalls=async()=>{modelCalls++;throw Error('Provider must not be called');};
  const disabled=fakeRes();
  await handler({},noCalls)({method:'POST',headers:{},body:{}},disabled);
  assert.equal(disabled.code,503);
  const env={PICSCRIBE_AI_ENABLED:'true',OPENAI_API_KEY:'dummy',
    PICSCRIBE_AI_CLASS_CODE:'long-private-teacher-code'};
  const unauthorized=fakeRes();
  await handler(env,noCalls)({method:'POST',headers:{},body:{}},unauthorized);
  assert.equal(unauthorized.code,401);
  assert.equal(modelCalls,0);
});
test('EIKEN studio contains all grades and distinct task types',()=>{
  const src=read('js/eiken_practice.js');
  for(const code of ['g3','p2','p2plus','g2','p1','g1'])assert.ok(src.includes(code+':'));
  for(const mode of ['essay','email','summary'])assert.ok(src.includes(mode+':'));
  assert.ok(src.includes('ps-wordcount'));
  assert.ok(src.includes('Writing Studio'));
});
test('privacy tools include bounded backups and explicit clearing',()=>{
  const src=read('js/writing_portfolio.js');
  assert.ok(src.includes('MAX_BYTES'));
  assert.ok(src.includes('window.showSelectionScreen'));
  assert.ok(src.includes("back.addEventListener('click',render)"));
  assert.ok(src.includes('confirm('));
  const api=read('js/ai_client.js');
  assert.ok(api.includes('window.confirm('));
  assert.ok(api.includes("window.prompt("));
});
