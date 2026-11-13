/* PicScribe Writing Portfolio: on-device only. No remote tracking. */
(function() {
 'use strict';
 const screen=document.getElementById('selection-screen');
 if(!screen)return;
 const KEYS=['picscribe_writing_v1','picscribe_eiken_drafts_v1'];
 const MAX_BYTES=2*1024*1024;
 const section=document.createElement('section');
 section.className='ps-portfolio';
 section.setAttribute('aria-label','My Writing Portfolio');
 section.innerHTML=
  '<div class="ps-portfolio-head"><div><h2>My Writing Portfolio</h2><p>書いた回数ではなく、書き直して上達する。</p></div>'+
  '<div class="ps-portfolio-actions"><button type="button" data-portfolio="export">バックアップ</button>'+
  '<button type="button" data-portfolio="import">復元</button>'+
  '<button type="button" data-portfolio="clear">端末の記録を削除</button></div></div>'+
  '<div class="ps-stats" role="group" aria-label="学習の状況"></div>'+
  '<div class="ps-recent"><h3>続きを書く・復習する</h3><div class="ps-recent-items"></div></div>'+
  '<p class="ps-portfolio-note">端末内に保存された下書きと修正履歴だけを表示します。学校や先生への自動送信・同期はありません。共有iPadでは使用後に記録を削除してください。</p>'+
  '<input type="file" accept=".json,application/json" class="ps-import-file" hidden>';
 screen.appendChild(section);
 const stats=section.querySelector('.ps-stats'),items=section.querySelector('.ps-recent-items');
 const fileInput=section.querySelector('.ps-import-file');
 function parse(key) {
   try {
     const raw=localStorage.getItem(key);const value=raw&&JSON.parse(raw);
     return value&&typeof value==='object'&&!Array.isArray(value)?value:{};
   }catch(_){return {};}
 }
 function dateValue(value) {
   const n=Date.parse(String(value||''));
   return Number.isFinite(n)?n:0;
 }
 function rows() {
   const picture=parse(KEYS[0]), eiken=parse(KEYS[1]), result=[];
   for(const [type,records] of [['picture',picture],['eiken',eiken]]) {
     Object.keys(records).slice(0,100).forEach(id=>{
       const entry=records[id];
       if(!entry||typeof entry!=='object'||Array.isArray(entry))return;
       const text=String(entry.draft||'');
       const revisions=Array.isArray(entry.revisions)?entry.revisions.length:0;
       if(!text.trim()&&!revisions)return;
       result.push({type,id,text,versions:revisions,updatedAt:dateValue(entry.updatedAt)});
     });
   }
   return result.sort((a,b)=>b.updatedAt-a.updatedAt);
 }
 function stat(label,value) {
   const div=document.createElement('div');div.className='ps-stat';
   const strong=document.createElement('strong');strong.textContent=String(value);
   const small=document.createElement('span');small.textContent=label;
   div.appendChild(strong);div.appendChild(small);stats.appendChild(div);
 }
 function title(row) {
   if(row.type==='picture') {
     if(row.id==='cafe_woman.webp'||row.id==='cafe')return 'At a Cafe';
     if(row.id==='library_boy.webp'||row.id==='library_boy')return 'Library';
     return 'Photo '+row.id.replace(/^scene_/,'#');
   }
   return 'EIKEN '+row.id.replace(/-/g,' · ');
 }
 function go(row) {
   if(row.type==='picture') {
     const name=row.id==='cafe_woman.webp'?'cafe':row.id==='library_boy.webp'?'library_boy':row.id;
     if(typeof window.launchGame==='function')window.launchGame(name);
     return;
   }
   const match=row.id.match(/^(g3|p2plus|p2|g2|p1|g1)-(essay|email|summary)-/);
   const card=document.querySelector('.macro-card[onclick*="macro-academic"]');
   if(!match||!card)return;
   card.click();
   const grade=document.getElementById('ps-grade'),task=document.getElementById('ps-task'),exercise=document.getElementById('ps-exercise');
   if(!grade||!task||!exercise)return;
   grade.value=match[1];grade.dispatchEvent(new Event('change'));
   task.value=match[2];task.dispatchEvent(new Event('change'));
   if(Array.from(exercise.options).some(o=>o.value===row.id)){
     exercise.value=row.id;exercise.dispatchEvent(new Event('change'));
   }
   card.scrollIntoView({behavior:'smooth',block:'start'});
 }
 function render() {
   const list=rows();
   stats.replaceChildren();items.replaceChildren();
   stat('写真描写に挑戦',list.filter(r=>r.type==='picture').length);
   stat('英検ライティング',list.filter(r=>r.type==='eiken').length);
   stat('保存した書き直し',list.reduce((n,r)=>n+r.versions,0));
   if(!list.length) {
     const empty=document.createElement('p');empty.className='ps-empty';
     empty.textContent='まだ記録がありません。写真描写か英検ライティングを始めましょう。';items.appendChild(empty);return;
   }
   list.slice(0,5).forEach(row=>{
     const button=document.createElement('button');button.type='button';button.className='ps-recent-card';
     const name=document.createElement('strong');name.textContent=title(row);
     const summary=document.createElement('span');
     const last=row.updatedAt?new Date(row.updatedAt).toLocaleDateString('ja-JP'):'保存日時なし';
     summary.textContent=last+' ・ '+(row.text.match(/[A-Za-z]+(?:['’][A-Za-z]+)?/g)||[]).length+'語 ・ 修正記録'+row.versions+'件';
     button.appendChild(name);button.appendChild(summary);button.addEventListener('click',()=>go(row));
     items.appendChild(button);
   });
 }
 function exportData() {
   const content={schema:'picscribe-local-portfolio-v1',exportedAt:new Date().toISOString(),records:{
     picscribe_writing_v1:parse(KEYS[0]),picscribe_eiken_drafts_v1:parse(KEYS[1])
   }};
   const blob=new Blob([JSON.stringify(content,null,2)],{type:'application/json'});
   const url=URL.createObjectURL(blob),a=document.createElement('a');
   a.href=url;a.download='picscribe-portfolio-'+new Date().toISOString().slice(0,10)+'.json';
   document.body.appendChild(a);a.click();a.remove();
   setTimeout(()=>URL.revokeObjectURL(url),1000);
 }
 function sanitizeEntry(entry) {
   if(!entry||typeof entry!=='object'||Array.isArray(entry))return null;
   const revisions=(Array.isArray(entry.revisions)?entry.revisions:[]).slice(-5)
     .filter(v=>v&&typeof v==='object'&&typeof v.text==='string')
     .map(v=>({text:v.text.slice(0,6000),at:String(v.at||'').slice(0,40)}));
   return {draft:String(entry.draft||'').slice(0,6000),revisions,
     updatedAt:String(entry.updatedAt||'').slice(0,40)};
 }
 function validateRecordSet(set) {
   if(!set||typeof set!=='object'||Array.isArray(set))throw Error('復元データが正しくありません。');
   const dest=Object.create(null);
   for(const key of Object.keys(set).slice(0,70)) {
     if(!/^[a-z0-9_.-]{1,80}$/i.test(key)||key==='__proto__'||key==='constructor'||key==='prototype')continue;
     const cleaned=sanitizeEntry(set[key]);
     if(cleaned)dest[key]=cleaned;
   }
   return dest;
 }
 async function importData(file) {
   if(!file||file.size>MAX_BYTES)throw Error('2MB以下のバックアップを選択してください。');
   const payload=JSON.parse(await file.text());
   if(!payload||payload.schema!=='picscribe-local-portfolio-v1'||!payload.records)
     throw Error('PicScribeのバックアップファイルではありません。');
   const picture=validateRecordSet(payload.records[KEYS[0]]);
   const eiken=validateRecordSet(payload.records[KEYS[1]]);
   if(!confirm('この端末の写真描写・英検ライティング記録をバックアップの内容に置き換えます。続けますか？'))return;
   // Safe bounded overwrite: do not import unrelated keys, URLs or HTML.
   const a=JSON.stringify(picture),b=JSON.stringify(eiken);
   if(a.length+b.length>MAX_BYTES)throw Error('復元データが大きすぎます。');
   localStorage.setItem(KEYS[0],a);localStorage.setItem(KEYS[1],b);
   render();alert('復元しました。');
 }
 section.addEventListener('click',e=>{
   const button=e.target.closest('[data-portfolio]');if(!button)return;
   const action=button.getAttribute('data-portfolio');
   if(action==='export')exportData();
   if(action==='import')fileInput.click();
   if(action==='clear'&&confirm('この端末に保存されたPicScribeの写真描写・英検ライティング下書きと修正履歴を削除します。バックアップは取りましたか？')) {
     KEYS.forEach(k=>localStorage.removeItem(k));render();
   }
 });
 fileInput.addEventListener('change',async()=>{
   const file=fileInput.files&&fileInput.files[0];
   try {if(file)await importData(file);}catch(e){alert(e.message||'復元できませんでした。');}
   fileInput.value='';
 });
 const original=window.showSelectionScreen;
 if(typeof original==='function')window.showSelectionScreen=function(){original();render();};
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)render();});
 render();
})();
