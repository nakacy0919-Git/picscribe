/* PicScribe centralized AI connection; browser never receives provider API keys */
(function(){
 'use strict';
 let classCode='';
 let availability=null;
 async function status() {
   if(availability !== null) return availability;
   const controller=new AbortController();
   const timer=setTimeout(()=>controller.abort(),9000);
   try {
     const response=await fetch('/api/writing-feedback',{method:'GET',signal:controller.signal,cache:'no-store'});
     if(!response.ok)throw Error('AI機能の状態を確認できませんでした。');
     const payload=await response.json();
     availability=payload&&payload.enabled===true;
     return availability;
   }finally{clearTimeout(timer);}
 }
 async function submit(request) {
   if(!(await status()))throw Error('AI添削はまだ有効ではありません。先生の設定が必要です。');
   if(!window.confirm('作文の内容を外部のAIサービスへ送信して添削します。氏名・メールアドレスなどの個人情報は入力しないでください。送信しますか？')) {
     throw Error('AI添削への送信を取り消しました。');
   }
   if(!classCode) {
     const answer=window.prompt('先生から配布されたAI利用コードを入力してください（保存されません）。');
     if(!answer)throw Error('利用コードが未入力のため送信しませんでした。');
     classCode=answer.trim();
   }
   if(classCode.length>256) {classCode='';throw Error('利用コードが長すぎます。');}
   let response,payload;
   try {
     response=await fetch('/api/writing-feedback',{
       method:'POST',
       headers:{'Content-Type':'application/json','X-PicScribe-Class-Code':classCode},
       body:JSON.stringify(request),
       cache:'no-store'
     });
     payload=await response.json();
   }catch(_){throw Error('ネットワーク接続を確認して再度お試しください。');}
   if(response.status===401)classCode='';
   if(!response.ok)throw Error(payload&&payload.message||'AI添削を完了できませんでした。');
   return payload;
 }
 window.PicScribeAI={submit,status};
})();
