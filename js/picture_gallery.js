/* Searchable picture gallery with meaningful descriptions and local progress */
(function () {
 'use strict';
 const root=document.getElementById('macro-picture');
 if(!root)return;
 const scenes=new Map([
   ['cafe',typeof cafeData!=='undefined'?cafeData:null],
   ['library_boy',typeof libraryBoyData!=='undefined'?libraryBoyData:null],
   ['scene_003',typeof scene003Data!=='undefined'?scene003Data:null],
   ['scene_004',typeof scene004Data!=='undefined'?scene004Data:null],
   ['scene_005',typeof scene005Data!=='undefined'?scene005Data:null],
   ['scene_006',typeof scene006Data!=='undefined'?scene006Data:null],
   ['scene_007',typeof scene007Data!=='undefined'?scene007Data:null],
   ['scene_008',typeof scene008Data!=='undefined'?scene008Data:null],
   ['scene_009',typeof scene009Data!=='undefined'?scene009Data:null],
   ['scene_010',typeof scene010Data!=='undefined'?scene010Data:null],
   ['scene_011',typeof scene011Data!=='undefined'?scene011Data:null],
   ['scene_012',typeof scene012Data!=='undefined'?scene012Data:null],
   ['scene_013',typeof scene013Data!=='undefined'?scene013Data:null],
   ['scene_014',typeof scene014Data!=='undefined'?scene014Data:null],
   ['scene_015',typeof scene015Data!=='undefined'?scene015Data:null],
   ['scene_016',typeof scene016Data!=='undefined'?scene016Data:null],
   ['scene_017',typeof scene017Data!=='undefined'?scene017Data:null],
   ['scene_018',typeof scene018Data!=='undefined'?scene018Data:null],
   ['scene_019',typeof scene019Data!=='undefined'?scene019Data:null],
   ['scene_020',typeof scene020Data!=='undefined'?scene020Data:null],
   ['scene_021',typeof scene021Data!=='undefined'?scene021Data:null],
   ['scene_022',typeof scene022Data!=='undefined'?scene022Data:null],
   ['scene_023',typeof scene023Data!=='undefined'?scene023Data:null],
   ['scene_024',typeof scene024Data!=='undefined'?scene024Data:null],
   ['scene_025',typeof scene025Data!=='undefined'?scene025Data:null],
   ['scene_026',typeof scene026Data!=='undefined'?scene026Data:null],
   ['scene_027',typeof scene027Data!=='undefined'?scene027Data:null],
   ['scene_028',typeof scene028Data!=='undefined'?scene028Data:null],
   ['scene_029',typeof scene029Data!=='undefined'?scene029Data:null],
   ['scene_030',typeof scene030Data!=='undefined'?scene030Data:null],
   ['scene_031',typeof scene031Data!=='undefined'?scene031Data:null],
   ['scene_032',typeof scene032Data!=='undefined'?scene032Data:null],
   ['scene_033',typeof scene033Data!=='undefined'?scene033Data:null],
   ['scene_034',typeof scene034Data!=='undefined'?scene034Data:null],
   ['scene_035',typeof scene035Data!=='undefined'?scene035Data:null]
 ]);
 const imageGrid=root.querySelector('.image-grid');
 if(!imageGrid)return;
 const searchArea=document.createElement('div');searchArea.className='ps-gallery-tools';
 const title=document.createElement('label');title.htmlFor='ps-gallery-search';title.textContent='写真を探す';
 const input=document.createElement('input');input.id='ps-gallery-search';
 input.type='search';input.placeholder='キーワードを入力（日本語・英語）';
 input.autocomplete='off';
 const select=document.createElement('select');select.id='ps-gallery-filter';
 select.setAttribute('aria-label','進捗で絞り込み');
 [['all','すべての写真'],['new','未挑戦'],['started','下書きあり']].forEach(([id,label])=>{
   const item=document.createElement('option');item.value=id;item.textContent=label;select.appendChild(item);
 });
 const count=document.createElement('span');count.className='ps-gallery-count';count.setAttribute('aria-live','polite');
 searchArea.appendChild(title);searchArea.appendChild(input);searchArea.appendChild(select);searchArea.appendChild(count);
 imageGrid.parentNode.insertBefore(searchArea,imageGrid);
 const cards=Array.from(imageGrid.querySelectorAll('.image-card'));
 const items=[];
 const saved=()=>{try{return JSON.parse(localStorage.getItem('picscribe_writing_v1')||'{}')||{};}
   catch(_){return {};}};
 function excerpt(s,limit=68){
   const line=String(s||'').replace(/\s+/g,' ').trim();
   return line.length>limit?line.slice(0,limit).trim()+'…':line;
 }
 cards.forEach(card=>{
   const onClick=String(card.getAttribute('onclick')||'');
   const m=onClick.match(/launchGame\(['"]([^'"]+)['"]\)/);
   if(!m)return;
   const id=m[1],scene=scenes.get(id);
   const desc=card.querySelector('.image-card-desc');
   if(!scene){
     if(desc)desc.textContent='この教材は確認中です';
     card.classList.add('ps-gallery-missing');card.setAttribute('aria-disabled','true');
     // Prevent opening the fallback cafe when the scene script is absent.
     card.removeAttribute('onclick');return;
   }
   const japanese=String(scene.overall_description_ja||'').trim();
   const english=String(scene.overall_description_en||'').trim();
   if(desc)desc.textContent=excerpt(japanese||english);
   card.setAttribute('title',excerpt(english,180));
   const badge=document.createElement('span');badge.className='ps-gallery-badge';
   badge.setAttribute('aria-label','この写真の学習状況');
   const info=card.querySelector('.image-card-info');
   if(info)info.appendChild(badge);
   const key=String(scene.id||scene.image_id||id);
   items.push({id,card,badge,index:(id+' '+japanese+' '+english).toLowerCase(),key});
 });
 function render(){
   const drafts=saved(),term=input.value.trim().toLowerCase(),mode=select.value;
   let visible=0;
   items.forEach(item=>{
     const entry=drafts[item.key],hasDraft=Boolean(entry&&typeof entry.draft==='string'&&entry.draft.trim());
     item.badge.textContent=hasDraft?'続きから':'未挑戦';
     item.badge.classList.toggle('ps-gallery-started',hasDraft);
     const show=(!term||item.index.includes(term))&&
       (mode==='all'||(mode==='started'&&hasDraft)||(mode==='new'&&!hasDraft));
     item.card.hidden=!show;
     if(show)visible++;
   });
   count.textContent=visible+' / '+items.length+' シーン';
 }
 input.addEventListener('input',render);select.addEventListener('change',render);
 const back=document.getElementById('back-to-home-btn');
 if(back)back.addEventListener('click',render);
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)render();});
 render();
})();
