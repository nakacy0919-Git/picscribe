/* PicScribe EIKEN Exam Simulator + Self-review: local-only, not official timing */
(function() {
 'use strict';
 const editor=document.getElementById('ps-answer'),host=document.querySelector('.ps-exam');
 if(!editor||!host)return;
 const controls=document.createElement('section');controls.className='ps-exam-lab';
 controls.innerHTML=
   '<div class="ps-exam-lab-head"><strong>Writing Lab</strong><span>練習用タイマー・自己チェック</span></div>'+
   '<div class="ps-exam-timer"><label for="ps-exam-minutes">練習時間</label><select id="ps-exam-minutes">'+
   '<option value="10">10分</option><option value="15" selected>15分</option><option value="20">20分</option><option value="30">30分</option></select>'+
   '<output id="ps-exam-clock" aria-label="残り時間" role="timer">15:00</output>'+
   '<button type="button" id="ps-exam-start">開始</button><button type="button" id="ps-exam-pause" disabled>一時停止</button>'+
   '<button type="button" id="ps-exam-reset">リセット</button></div>'+
   '<div class="ps-selfreview-title">提出前のセルフチェック</div><div class="ps-selfreview-list"></div>'+
   '<p class="ps-exam-caveat" id="ps-exam-caveat" aria-live="polite">時間は練習用の設定です。実際の英検の制限時間ではありません。</p>';
 const before=document.getElementById('ps-selfcheck');
 if(before&&before.parentNode===host)host.insertBefore(controls,before);
 else host.appendChild(controls);
 const $=id=>document.getElementById(id);
 const minutes=$('ps-exam-minutes'),clock=$('ps-exam-clock'),start=$('ps-exam-start'),
       pause=$('ps-exam-pause'),reset=$('ps-exam-reset'),hint=$('ps-hint-toggle'),
       notice=$('ps-exam-caveat'),reviews=controls.querySelector('.ps-selfreview-list');
 const grade=$('ps-grade'),task=$('ps-task'),exercise=$('ps-exercise');
 let remaining=15*60*1000,until=0,running=false,interval=null;
 const targets={
   essay:['自分の意見・立場を明確にした','理由を2つ以上説明した','具体例を加えた','段落と結論を確認した'],
   email:['相手の質問に答えた','指定された質問・必要情報をすべて入れた','自然なメールの構成にした','丁寧な締めくくりとスペルを確認した'],
   summary:['原文の中心的な内容をまとめた','メリットと課題など重要な対比を取り入れた','原文にない意見や事実を加えていない','言い換えと語数を確認した']
 };
 function stamp(ms){const s=Math.max(0,Math.ceil(ms/1000));return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');}
 function stopTimer(){if(interval!==null)clearInterval(interval);interval=null;}
 function renderClock(){
   if(running){remaining=Math.max(0,until-Date.now());
     if(remaining<=0){running=false;stopTimer();notice.textContent='練習時間になりました。答案の見直しや書き直しは続けられます。';}
   }
   clock.textContent=stamp(remaining);
   pause.disabled=!running;start.disabled=running;
   minutes.disabled=running||remaining!==Number(minutes.value)*60000;
   clock.classList.toggle('ps-time-end',remaining===0);
 }
 function resetTimer() {
   running=false;stopTimer();remaining=Number(minutes.value)*60000;
   notice.textContent='時間は練習用の設定です。実際の英検の制限時間ではありません。';
   renderClock();
   if(hint)hint.disabled=false;
 }
 function startTimer(){
   if(!running){if(remaining<=0)remaining=Number(minutes.value)*60000;
     until=Date.now()+remaining;running=true;stopTimer();
     interval=setInterval(renderClock,350);renderClock();
     notice.textContent='時間を意識して書いてみましょう。必要なら一時停止できます。';
   }
 }
 function pauseTimer(){if(running){remaining=Math.max(0,until-Date.now());running=false;stopTimer();renderClock();}}
 function refreshReview(){
   reviews.replaceChildren();
   const type=task.value;
   (targets[type]||targets.essay).forEach((label,i)=>{
     const item=document.createElement('label');item.className='ps-selfreview-item';
     const checkbox=document.createElement('input');checkbox.type='checkbox';checkbox.setAttribute('aria-label',label);
     const span=document.createElement('span');span.textContent=label;
     item.appendChild(checkbox);item.appendChild(span);reviews.appendChild(item);
   });
   // Reloading tasks should clear the timer but never delete student writing.
   resetTimer();
 }
 start.addEventListener('click',startTimer);
 pause.addEventListener('click',pauseTimer);
 reset.addEventListener('click',resetTimer);
 minutes.addEventListener('change',resetTimer);
 task.addEventListener('change',refreshReview);
 grade.addEventListener('change',refreshReview);
 exercise.addEventListener('change',refreshReview);
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)renderClock();});
 refreshReview();
})();
