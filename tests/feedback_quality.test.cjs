/**
 * Feedback quality and rubric guardrails without network/model charges.
 * Run in checkout: node --test tests/feedback_quality.test.cjs
 */
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const file=path.join(__dirname,'..','api','writing-feedback.js');
const server=fs.readFileSync(file,'utf8').replace(
 'export default async function handler','async function handler');
const env={
 PICSCRIBE_AI_ENABLED:'true',
 PICSCRIBE_AI_CLASS_CODE:'a-long-class-code-for-tests',
 OPENAI_API_KEY:'dummy-development-test'
};
const requestBody={
 mode:'eiken',grade:'g2',task:'essay',
 draft:'I think schools should provide more books. Books help students learn new ideas and share knowledge.',
 context:{prompt:'Should schools provide more books?'}
};
const criteria=['内容','構成','語彙','文法'];
const good={
 summary_ja:'理由は明確です。',strengths:['立場が明確です。'],
 revisions:[{
  original:'Books help students learn new ideas',
  revised:'Reading books helps students discover new ideas',
  explanation_ja:'表現の幅を広げられます。'
 },{
  original:'A fictional mistake not in the essay',
  revised:'An improved sentence',
  explanation_ja:'この誤りは存在しません。'
 }],
 corrected:'I think schools should provide more books. Books help students learn new ideas and share knowledge.',
 upgraded:'Schools should expand library access because reading encourages curiosity and learning.',
 next_step_ja:'具体例を1つ付けましょう。',
 scores:criteria.map(c=>({criterion:c,score:3,reason_ja:'確認できる根拠があります。'}))
};
function makeHandler(payload) {
 const mockFetch=async()=>({ok:true,json:async()=>({
   status:'completed',output:[{content:[{type:'output_text',text:JSON.stringify(payload)}]}]
 })});
 return new Function('process','fetch','Buffer','AbortController','setTimeout','clearTimeout',
   server+'\nreturn handler;')({env},mockFetch,Buffer,AbortController,setTimeout,clearTimeout);
}
function makeRes(){
 return {code:200,headers:{},setHeader(k,v){this.headers[k]=v;},
   status(n){this.code=n;return this;},json(payload){this.payload=payload;return this;}};
}
async function call(modelPayload,body=requestBody){
 const res=makeRes();
 await makeHandler(modelPayload)({method:'POST',
   headers:{'x-picscribe-class-code':env.PICSCRIBE_AI_CLASS_CODE},
   body},res);
 return res;
}
test('complete rubric is standard ordered 4×4 with deterministic word count',async()=>{
 const res=await call(good);
 assert.equal(res.code,200);
 assert.deepEqual(res.payload.scores.map(s=>s.criterion),criteria);
 assert.equal(res.payload.score_total,12);
 assert.equal(res.payload.word_count,16);
 assert.deepEqual(res.payload.word_target,[80,100]);
 assert.equal(res.payload.word_range_ok,false);
 assert.equal(res.payload.grade_status,'practice_estimate_not_official');
});
test('unsupported corrections are removed rather than hallucinated as student mistakes',async()=>{
 const res=await call(good);
 assert.equal(res.code,200);
 assert.equal(res.payload.revisions.length,1);
 assert.equal(res.payload.revisions[0].original,'Books help students learn new ideas');
});
test('an incomplete or duplicated four-criterion rubric is rejected',async()=>{
 const incomplete={...good,scores:good.scores.slice(0,3)};
 assert.equal((await call(incomplete)).code,502);
 const duplicated={...good,scores:[...good.scores.slice(0,3),good.scores[0]]};
 assert.equal((await call(duplicated)).code,502);
});
test('picture feedback has no fake exam score',async()=>{
 const picture={...good,scores:[],revisions:[]};
 const body={mode:'picture',draft:'A woman is sitting near the window.',
   context:{imageDescription:'A woman sitting in a cafe near a sunny window.'}};
 const res=await call(picture,body);
 assert.equal(res.code,200);
 assert.deepEqual(res.payload.scores,[]);
 assert.equal(res.payload.score_total,null);
});
