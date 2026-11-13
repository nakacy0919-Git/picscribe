/* PicScribe Writing Quests: optional micro missions, no model/API calls */
(function(){
 'use strict';
 const input=document.getElementById('user-input'), wrapper=document.querySelector('.ps-coach');
 if(!input||!wrapper)return;
 const block=document.createElement('section');
 block.className='ps-quests';block.setAttribute('aria-label','Writing Quests');
 block.innerHTML='<div class="ps-quests-title"><strong>Writing Quests</strong><span class="ps-quest-rank" aria-live="polite">0 / 4</span></div>'+
   '<div class="ps-quest-track" role="progressbar" aria-valuemin="0" aria-valuemax="4" aria-valuenow="0" aria-label="達成した書き方のミッション"><span class="ps-quest-bar"></span></div>'+
   '<div class="ps-quest-list"></div><p class="ps-quest-next" aria-live="polite"></p>'+
   '<p class="ps-quest-notice">構文の利用を検出するミニゲームです。正確な文法評価や英検スコアではありません。</p>';
 const actions=wrapper.querySelector('.ps-coach-actions');
 if(actions)wrapper.insertBefore(block,actions);
 else wrapper.appendChild(block);
 const quests=[
   {key:'action',label:'進行形で動作を書く',tip:'例：A person is walking.',test:text=>/\b(?:am|is|are)\s+(?:\w+\s+){0,2}\w+ing\b/i.test(text)},
   {key:'place',label:'位置・場所を表現する',tip:'例：near the window / on the table',test:text=>/\b(?:near|beside|behind|under|above|between|inside|outside|next\s+to|in\s+front\s+of|in\s+the\s+(?:background|foreground)|on\s+the\s+\w+|at\s+the\s+\w+)\b/i.test(text)},
   {key:'detail',label:'2つ以上の文で描写する',tip:'人物だけでなく、背景や小物も加えよう。',test:text=>(text.match(/[.!?](?=\s|$)/g)||[]).length>=2},
   {key:'connect',label:'文と文をつなぐ',tip:'because / while / which / who / although を使って情報をつなごう。',test:text=>/\b(?:because|while|although|however|which|who|whereas|as\s+if)\b/i.test(text)}
 ];
 const list=block.querySelector('.ps-quest-list'),bar=block.querySelector('.ps-quest-bar'),
       badge=block.querySelector('.ps-quest-rank'),next=block.querySelector('.ps-quest-next'),
       track=block.querySelector('.ps-quest-track');
 const items=quests.map(q=>{
   const el=document.createElement('div');el.className='ps-quest';
   const check=document.createElement('span');check.className='ps-quest-check';check.textContent='○';
   const info=document.createElement('div');
   const title=document.createElement('strong');title.textContent=q.label;
   const desc=document.createElement('small');desc.textContent=q.tip;
   info.appendChild(title);info.appendChild(desc);
   el.appendChild(check);el.appendChild(info);list.appendChild(el);
   return {el,check};
 });
 let latestScene='',unlocked=new Set();
 function scene() {
   const data=window.currentSceneData||{};
   return String(data.id||data.image_id||'');
 }
 function update() {
   const current=scene();if(current!==latestScene){latestScene=current;unlocked=new Set();}
   const text=input.innerText||'';let n=0;
   quests.forEach((q,i)=>{
     let earned=false;
     try{earned=q.test(text);}catch(_){earned=false;}
     if(earned)n++;
     items[i].el.classList.toggle('ps-quest-done',earned);
     items[i].check.textContent=earned?'✓':'○';
     items[i].check.setAttribute('aria-label',earned?'達成':'未達成');
   });
   badge.textContent=n+' / 4';
   bar.style.width=(n/4*100)+'%';
   track.setAttribute('aria-valuenow',String(n));
   const upcoming=quests.find(q=>!q.test(text));
   next.textContent=upcoming?'次の挑戦：'+upcoming.label:'4つの挑戦を達成！ 別の写真や自分の言い換えでも挑戦しましょう。';
   // Only celebrate *new* milestones, never initial restore or scene navigation.
   if(unlocked.size===0 && text.trim())quests.forEach(q=>{if(q.test(text))unlocked.add(q.key);});
   else if(text.trim()) {
     quests.forEach(q=>{if(q.test(text)&&!unlocked.has(q.key)){unlocked.add(q.key);
       if(!window.matchMedia||!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
         block.classList.remove('ps-quest-pop');void block.offsetWidth;block.classList.add('ps-quest-pop');
       }
     }});
   }
 }
 input.addEventListener('input',update);
 const previous=window.launchGame;
 if(typeof previous==='function')window.launchGame=function(sceneId){previous(sceneId);update();};
 update();
})();
