/* Revision Workshop: students attempt a correction before reading a suggested answer.
   Teacher/model examples are not the only valid answers. No remote calls. */
(function () {
  'use strict';
  let live = null;
  const ID='ps-revision-workshop';
  const text = (tag,value,className) => {
    const node=document.createElement(tag);
    node.textContent=String(value||'');
    if(className)node.className=className;
    return node;
  };
  function createButton(label,callback) {
    const b=text('button',label);b.type='button';
    b.addEventListener('click',callback);return b;
  }
  function saveCurrent(mode) {
    const selector=mode==='eiken'?'#ps-save-version':'.ps-coach [data-action="snapshot"]';
    const button=document.querySelector(selector);
    if(button&&typeof button.click==='function')button.click();
  }
  function render(detail) {
    if(!detail||!['eiken','picture'].includes(detail.mode)||!detail.result)return;
    const root=detail.mode==='eiken'?document.getElementById('ps-ai-output'):
      document.querySelector('.ps-ai-feedback');
    if(!root||!root.parentNode)return;
    const prior=document.getElementById(ID);if(prior)prior.remove();
    const result=detail.result,editor=detail.mode==='eiken'?
      document.getElementById('ps-answer'):document.getElementById('user-input');
    if(!editor)return;
    const getText=()=>detail.mode==='eiken'?editor.value:editor.innerText;
    const setText=value=>{
      if(detail.mode==='eiken')editor.value=value;else editor.innerText=value;
      editor.dispatchEvent(new Event('input',{bubbles:true}));
    };
    const panel=document.createElement('section');
    panel.id=ID;panel.className='ps-revision-workshop';
    panel.appendChild(text('h3','Rewrite to Improve — 自分で直してみよう'));
    const description=text('p','AIの提案を見る前に、指摘された箇所を自分で書き直します。正しい書き方は1つとは限りません。','ps-revision-instructions');
    panel.appendChild(description);
    const rows=Array.isArray(result.revisions)?result.revisions.filter(r=>r&&
      typeof r.original==='string'&&detail.draft.includes(r.original)):[];

    if(!rows.length){
      panel.appendChild(text('p','確認できる具体的な誤りの引用はありません。全文を見直したうえで、追加の理由や具体例を加えてみましょう。'));
    }
    rows.slice(0,4).forEach((r,index)=>{
      const item=document.createElement('div');item.className='ps-revision-item';
      item.appendChild(text('strong','改善ポイント '+(index+1)));
      item.appendChild(text('p','元の表現：'+r.original,'ps-revision-original'));
      const hint=document.createElement('details');hint.className='ps-revision-hint';
      const hintTitle=text('summary','ヒントを表示');
      hint.appendChild(hintTitle);
      hint.appendChild(text('p',r.explanation_ja||'表現をもう一度確かめましょう。'));
      item.appendChild(hint);
      const label=text('label','自分ならどう直す？','ps-revision-label');label.htmlFor='ps-revision-input-'+index;
      const editorArea=document.createElement('textarea');
      editorArea.rows=2;editorArea.id=label.htmlFor;editorArea.spellcheck=true;
      editorArea.placeholder='Write your improved expression in English...';
      editorArea.maxLength=500;editorArea.setAttribute('aria-label','修正する英文 '+(index+1));
      item.appendChild(label);item.appendChild(editorArea);
      const control=document.createElement('div');control.className='ps-revision-actions';
      const message=text('p','','ps-revision-note');
      const details=document.createElement('details');details.className='ps-revision-example';
      details.appendChild(text('summary','AIの修正例を表示'));
      details.appendChild(text('p',r.revised));
      control.appendChild(createButton('自分の修正版を確認',()=>{
        const attempt=editorArea.value.trim();
        if(!attempt){message.textContent='先に自分の修正版を書いてください。';return;}
        if(attempt.toLowerCase().replace(/\s+/g,' ')===r.revised.trim().toLowerCase().replace(/\s+/g,' '))
          message.textContent='AIの修正例と一致しました。自分で考えて書けた点が大切です。';
        else message.textContent='修正版を作れました。別の正しい表現もあります。必要ならAIの修正例と比べてみましょう。';
      }));
      control.appendChild(createButton('自分の修正版を本文へ反映',()=>{
        const attempt=editorArea.value.trim();
        if(!attempt){message.textContent='修正した英文を書いてください。';return;}
        if(attempt.length>500){message.textContent='修正版が長すぎます。';return;}
        const current=getText();
        if(current.length>6000){message.textContent='本文が長すぎます。';return;}
        const at=current.indexOf(r.original);
        if(at<0){message.textContent='元の表現が本文で見つかりません。本文が変更された可能性があります。';return;}
        const next=current.slice(0,at)+attempt+current.slice(at+r.original.length);
        if(next.length>6000){message.textContent='修正後の文章が長すぎます。';return;}
        if(!window.confirm('修正前の文章を保存し、この表現を置き換えますか？'))return;
        saveCurrent(detail.mode);setText(next);
        message.textContent='本文を更新しました。もう一度読み直してみましょう。';
      }));
      item.appendChild(control);item.appendChild(message);item.appendChild(details);
      panel.appendChild(item);
    });
    const final=document.createElement('details');final.className='ps-revision-final';
    final.appendChild(text('summary','文章全体の改善例を見る（自力で直した後に）'));
    final.appendChild(text('strong','最小限の修正例'));
    final.appendChild(text('p',result.corrected||''));
    final.appendChild(text('strong','発展的な言い換え例'));
    final.appendChild(text('p',result.upgraded||''));
    panel.appendChild(final);
    root.insertAdjacentElement('afterend',panel);
    live={detail,panel};
  }
  window.addEventListener('picscribe:ai-feedback',event=>{render(event.detail);});
  // A question change invalidates prior feedback, rather than showing it beside a new prompt.
  for(const id of ['ps-grade','ps-task','ps-exercise']){
    const select=document.getElementById(id);
    if(select)select.addEventListener('change',()=>{
      const old=document.getElementById(ID);if(old)old.remove();live=null;
    });
  }
  const back=document.getElementById('back-to-home-btn');
  if(back)back.addEventListener('click',()=>{
    const old=document.getElementById(ID);if(old)old.remove();live=null;
  });
})();
