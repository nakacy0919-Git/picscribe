/* Teacher Calibration Lab (local only): compare teacher judgments to AI estimates.
   This is NOT a teacher-authenticated service and MUST NOT be treated as an official score. */
(function () {
 'use strict';
 const host=document.getElementById('macro-academic');
 if(!host)return;
 const KEY='picscribe_calibration_v1',MAX=800,CRITERIA=['内容','構成','語彙','文法'];
 const wrapper=document.createElement('details');wrapper.className='ps-calibration';
 const heading=document.createElement('summary');
 heading.textContent='Teacher Calibration Lab — AI評価を教師採点と比較（端末内）';
 wrapper.appendChild(heading);
 const body=document.createElement('div');body.className='ps-calibration-body';
 const note=document.createElement('p');
 note.textContent='先生の4観点の採点とAIの参考採点を照合します。氏名・答案本文は保存しません。認証機能はないため、生徒が使う共有端末に成績を残さないでください。';
 body.appendChild(note);
 const context=document.createElement('p');context.className='ps-calibration-context';
 context.textContent='AI添削を実行すると、比較する答案の情報が表示されます。';
 body.appendChild(context);
 const form=document.createElement('div');form.className='ps-calibration-form';
 body.appendChild(form);
 const actions=document.createElement('div');actions.className='ps-calibration-actions';
 body.appendChild(actions);
 const results=document.createElement('div');results.className='ps-calibration-results';
 results.setAttribute('aria-live','polite');
 body.appendChild(results);
 wrapper.appendChild(body);
 host.appendChild(wrapper);
 let recent=null;
 function getData(){
   try{const rows=JSON.parse(localStorage.getItem(KEY)||'[]');
     return Array.isArray(rows)?rows.slice(-MAX):[];}catch(_){return [];}
 }
 function saveData(rows){
   try{localStorage.setItem(KEY,JSON.stringify(rows.slice(-MAX)));return true;}
   catch(_){return false;}
 }
 function button(label,fn) {
   const node=document.createElement('button');node.type='button';node.textContent=label;
   node.addEventListener('click',fn);actions.appendChild(node);return node;
 }
 const inputs=CRITERIA.map(label=>{
   const row=document.createElement('label');row.className='ps-calibration-row';
   const title=document.createElement('strong');title.textContent=label;
   const model=document.createElement('span');model.textContent='AI: —';
   const score=document.createElement('select');score.setAttribute('aria-label',label+' 教師採点');
   [-1,0,1,2,3,4].forEach(n=>{
     const option=document.createElement('option');option.value=String(n);
     option.textContent=n===-1?'教師採点を選択':n+' / 4';
     score.appendChild(option);
   });
   row.appendChild(title);row.appendChild(model);row.appendChild(score);
   form.appendChild(row);return {title:label,model,score};
 });
 const save=button('この答案の比較を記録',()=>{
   if(!recent){context.textContent='先に英検ライティングをAI添削してください。';return;}
   if(recent.saved){context.textContent='この答案の比較は記録済みです。次の答案をAI添削してください。';return;}
   const selected=inputs.map(x=>Number(x.score.value));
   if(selected.some(n=>!Number.isInteger(n)||n<0||n>4)){
     context.textContent='4観点すべてに先生の採点を入力してください。';return;
   }
   const records=getData();records.push({
     at:new Date().toISOString(),exerciseId:recent.exerciseId,grade:recent.grade,task:recent.task,
     wordCount:recent.wordCount,
     teacher:selected,ai:recent.ai
   });
   if(!saveData(records)){context.textContent='端末に記録できませんでした。空き容量を確認してください。';return;}
   recent.saved=true;
   context.textContent='答案本文を保存せず、4観点の比較を記録しました。';
   renderStats();
 });
 button('比較CSVを書き出す',()=>{
   const records=getData();
   if(!records.length){context.textContent='比較データがありません。';return;}
   const csv=[['date','exercise','grade','task','word_count',
     ...CRITERIA.map(s=>'teacher_'+s),...CRITERIA.map(s=>'ai_'+s)]];
   records.forEach(r=>csv.push([r.at,r.exerciseId,r.grade,r.task,r.wordCount,...r.teacher,...r.ai]));
   const line=csv.map(r=>r.map(cell=>'"'+String(cell==null?'':cell).replace(/"/g,'""')+'"').join(',')).join('\r\n');
   const blob=new Blob(['\ufeff'+line],{type:'text/csv;charset=utf-8'});
   const url=URL.createObjectURL(blob),a=document.createElement('a');
   a.href=url;a.download='picscribe-teacher-calibration.csv';
   document.body.appendChild(a);a.click();a.remove();
   setTimeout(()=>URL.revokeObjectURL(url),1000);
 });
 button('この端末の比較記録を削除',()=>{
   if(window.confirm('教師採点との比較データを、この端末から削除しますか？')){
     localStorage.removeItem(KEY);renderStats();
   }
 });
 function renderStats(){
   const rows=getData();results.replaceChildren();
   const heading=document.createElement('strong');heading.textContent='累積比較 '+rows.length+'件';results.appendChild(heading);
   if(!rows.length)return;
   const diffs=[];
   rows.forEach(r=>{
     if(!Array.isArray(r.ai)||!Array.isArray(r.teacher))return;
     for(let i=0;i<4;i++){
       if(Number.isInteger(r.ai[i])&&Number.isInteger(r.teacher[i]))diffs.push(Math.abs(r.ai[i]-r.teacher[i]));
     }
   });
   if(!diffs.length)return;
   const avg=diffs.reduce((a,b)=>a+b,0)/diffs.length;
   const exact=diffs.filter(n=>n===0).length/diffs.length*100;
   const withinOne=diffs.filter(n=>n<=1).length/diffs.length*100;
   const row=document.createElement('p');
   row.textContent='観点別平均絶対誤差 '+avg.toFixed(2)+'点 ／ 完全一致 '+exact.toFixed(1)+'% ／ ±1点以内 '+withinOne.toFixed(1)+'%';
   results.appendChild(row);
   const advice=document.createElement('p');
   advice.textContent=rows.length<20?
     '比較数が少ないため、精度の判断には使えません。多様な級・問題形式・答案で検証してください。':
     '集計は参考値です。級・問題形式ごとの偏りと、2点以上ずれた答案を別途検討してください。';
   results.appendChild(advice);
   const last=document.createElement('p');last.className='ps-calibration-last';
   last.textContent='直近の差：'+rows.slice(-1)[0].teacher.map((v,i)=>{
     const diff=rows.slice(-1)[0].ai[i]-v;return CRITERIA[i]+' '+(diff>0?'+':'')+diff;
   }).join(' / ');
   results.appendChild(last);
   const groups=new Map();
   rows.forEach(r=>{
     const key=String(r.grade||'')+' / '+String(r.task||'');
     const group=groups.get(key)||{count:0,diffs:[],flags:0};
     group.count++;
     if(Array.isArray(r.teacher)&&Array.isArray(r.ai)&&r.teacher.length===4&&r.ai.length===4){
       r.teacher.forEach((score,i)=>{
         const difference=Math.abs(Number(r.ai[i])-Number(score));
         if(Number.isFinite(difference)) {
           group.diffs.push(difference);
           if(difference>=2)group.flags++;
         }
       });
     }
     groups.set(key,group);
   });
   const groupTitle=document.createElement('strong');groupTitle.textContent='級・形式別の比較';
   results.appendChild(groupTitle);
   const groupList=document.createElement('div');groupList.className='ps-calibration-groups';
   for(const [name,group] of groups){
     const p=document.createElement('p');
     const avg=group.diffs.length?group.diffs.reduce((a,b)=>a+b,0)/group.diffs.length:0;
     p.textContent=name+'：'+group.count+'件 ／ 平均絶対誤差 '+avg.toFixed(2)+
       '点 ／ 2点以上の差 '+group.flags+'観点';
     groupList.appendChild(p);
   }
   results.appendChild(groupList);
 }
 window.addEventListener('picscribe:ai-feedback',e=>{
   const d=e.detail||{};
   if(d.mode!=='eiken'||!d.result)return;
   const scores=Array.isArray(d.result.scores)?d.result.scores:[];
   if(scores.length!==4)return;
   const map=new Map(scores.map(x=>[x.criterion,x.score]));
   if(CRITERIA.some(x=>!Number.isInteger(map.get(x))))return;
   recent={exerciseId:String(d.exerciseId||'').slice(0,80),
     grade:String(d.grade||'').slice(0,15),task:String(d.task||'').slice(0,15),
     wordCount:Number(d.result.word_count)||0,ai:CRITERIA.map(x=>map.get(x)),saved:false};
   inputs.forEach((input,i)=>{input.model.textContent='AI参考: '+recent.ai[i]+'/4';
     input.score.value='-1';});
   context.textContent='比較対象：'+recent.exerciseId+'（'+recent.grade+' / '+recent.task+'）';
   // Do not automatically expand; teacher decides when to review.
 });
 for(const id of ['ps-grade','ps-task','ps-exercise']){
   const node=document.getElementById(id);
   if(node)node.addEventListener('change',()=>{
     recent=null;inputs.forEach(input=>{input.model.textContent='AI: —';input.score.value='-1';});
     context.textContent='出題が変わりました。新しい答案を添削してから比較してください。';
   });
 }
 renderStats();
})();
