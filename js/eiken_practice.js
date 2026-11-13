/* PicScribe EIKEN Writing Practice - original exercises and local-first drafts */
(function () {
  'use strict';
  var host = document.getElementById('macro-academic');
  if (!host) return;

  var LEVELS = {
    g3: {label:'3級', tasks:{essay:[25,35],email:[15,25]}},
    p2: {label:'準2級',tasks:{essay:[50,60],email:[40,50]}},
    p2plus: {label:'準2級プラス',tasks:{essay:[50,60],summary:[25,35]}},
    g2: {label:'2級',tasks:{essay:[80,100],summary:[45,55]}},
    p1: {label:'準1級',tasks:{essay:[120,150],summary:[60,70]}},
    g1: {label:'1級',tasks:{essay:[200,240],summary:[90,110]}}
  };
  var TASK_LABELS = {essay:'意見論述',email:'Eメール',summary:'英文要約'};
  var EXERCISES = [
    {id:'g3-essay-1',grade:'g3',task:'essay',title:'After-school activities',prompt:'What do you like to do after school? Give two reasons for your answer.'},
    {id:'g3-email-1',grade:'g3',task:'email',title:'A visit to your town',prompt:'Your friend Alex wrote: "I will visit your town next month. What place should I visit? Why do you recommend it?" Write a friendly reply.'},
    {id:'p2-essay-1',grade:'p2',task:'essay',title:'Joining a club',prompt:'Do you think all high school students should join a school club? Give two reasons.'},
    {id:'p2-email-1',grade:'p2',task:'email',title:'Community event',prompt:'Reply to Alex. Answer the question and ask TWO specific questions about the community event mentioned in the message.',source:'Hi! Last Sunday, I joined a community event where local people planted trees in a park. More than fifty volunteers worked together. I enjoyed meeting people from different generations. Do you think these events will become more popular in the future? Your friend, Alex.'},
    {id:'p2plus-essay-1',grade:'p2plus',task:'essay',title:'Digital textbooks',prompt:'Do you think more schools should use digital textbooks instead of printed books? Give two reasons.'},
    {id:'p2plus-summary-1',grade:'p2plus',task:'summary',title:'Libraries and local communities',prompt:'Summarize the passage in your own English words.',source:'Some town libraries are changing the services they offer. In the past, people mainly visited libraries to borrow books or study quietly. Today, many libraries also organize language classes, homework support, and community events. These new services can help people of different ages meet and learn together. However, there are challenges. Library staff may have limited time, and organizing activities can be expensive. Some visitors also prefer quiet spaces for reading. For these reasons, towns need to balance traditional library services with new community activities.'},
    {id:'g2-essay-1',grade:'g2',task:'essay',title:'Flexible school schedules',prompt:'Do you think high schools should allow students to choose more of their own class schedules? Give reasons and examples.'},
    {id:'g2-essay-2',grade:'g2',task:'essay',title:'Supporting local businesses',prompt:'Should cities do more to support small local businesses? Give reasons and examples.'},
    {id:'g2-summary-1',grade:'g2',task:'summary',title:'Sharing tools',prompt:'Summarize the passage in your own English words.',source:'In many cities, people are starting to borrow tools instead of buying them. Community tool libraries lend equipment such as drills, gardening tools, and bicycle repair kits to members. This can save money because many people use such items only a few times a year. Sharing also reduces the need to manufacture and store new products, which may lower environmental damage. However, tool libraries need space, funding, and people who can check equipment for safety. Members may also have to wait when a popular tool is unavailable. Supporters believe that clear borrowing rules and workshops can make the system more useful for everyone.'},
    {id:'p1-essay-1',grade:'p1',task:'essay',title:'Public transport investment',prompt:'Should governments prioritize public transportation over building more roads? Discuss your position using reasons and concrete examples.'},
    {id:'p1-summary-1',grade:'p1',task:'summary',title:'Urban rooftop gardens',prompt:'Summarize the main ideas and the benefits and challenges in your own words.',source:'As urban populations grow, some cities are encouraging rooftop gardens on office buildings, schools, and apartments. Rooftops offer unused spaces that can be transformed into small green areas. Plants may reduce temperatures inside buildings, absorb some rainwater, and provide habitats for insects. In addition, schools sometimes use such gardens to teach students about food production and environmental issues. However, rooftop gardens can be difficult to install. Buildings must be strong enough to hold the additional weight of soil and water, and owners need to pay for maintenance. Gardens also require regular watering, particularly during hot summers. Some city governments now offer advice and financial support to building owners. Researchers say that rooftop gardens will not solve every urban problem, but they can contribute to healthier and more resilient neighborhoods when combined with other policies.'},
    {id:'g1-essay-1',grade:'g1',task:'essay',title:'Artificial intelligence and public services',prompt:'Should governments rely more heavily on artificial intelligence when providing public services? Evaluate both benefits and risks and present a reasoned position.'},
    {id:'g1-summary-1',grade:'g1',task:'summary',title:'Repairing consumer electronics',prompt:'Summarize the passage objectively in your own words.',source:'Modern consumer electronics have become increasingly complex, and many people replace devices that could potentially be repaired. Manufacturers argue that compact designs and specialized components allow them to deliver products that are lighter, faster, and more reliable. However, independent repair businesses often struggle to obtain replacement parts, diagnostic tools, and technical information. Consumer advocates say these barriers increase costs and contribute to electronic waste. In response, some governments have introduced policies requiring manufacturers to make certain parts and repair information available. Supporters believe such measures could extend the life of products, support local repair jobs, and reduce the environmental impact of manufacturing. Critics warn that broad requirements might expose proprietary designs, create security risks, or raise production costs. The debate has also inspired new business models: some companies are designing devices with replaceable batteries or modular components, while others provide certified repair programs. Researchers emphasize that the environmental benefits of repair depend on the device, the energy used during its lifetime, and the materials required for a replacement. They suggest that consumer information, durable product design, and responsible recycling should be considered alongside repair rights.'}
  ];
  host.innerHTML =
    '<section class="ps-exam">' +
    '<div class="ps-exam-header"><h2>EIKEN Writing Studio</h2><p>級と問題形式を選んで、書く・直す・もう一度書く。</p></div>' +
    '<div class="ps-exam-controls"><label>級<select id="ps-grade"></select></label>' +
    '<label>形式<select id="ps-task"></select></label>' +
    '<label>問題<select id="ps-exercise"></select></label></div>' +
    '<article class="ps-question"><strong id="ps-title"></strong><p id="ps-prompt"></p>' +
    '<div class="ps-source hidden" id="ps-source"></div>' +
    '<p class="ps-target" id="ps-target"></p></article>' +
    '<div class="ps-editor-header"><strong>Your Writing</strong><span id="ps-wordcount" aria-live="polite">0 words</span></div>' +
    '<textarea id="ps-answer" rows="9" spellcheck="true" lang="en" placeholder="Write your answer in English..."></textarea>' +
    '<div class="ps-exam-hints"><button type="button" id="ps-hint-toggle">構成ヒント</button>' +
    '<div class="ps-hint-text hidden" id="ps-hint-text"></div></div>' +
    '<div id="ps-selfcheck" class="ps-selfcheck" aria-live="polite"></div>' +
    '<div class="ps-exam-actions"><button type="button" id="ps-save-version">この答案を記録</button>' +
    '<button type="button" id="ps-show-version">前回と比較</button>' +
    '<button type="button" class="ps-primary" id="ps-request-ai">AI添削</button></div>' +
    '<p class="ps-exam-note">オリジナル練習問題です。公式問題・公式採点ではありません。答案は端末に保存し、AI添削を押した時だけ送信します。</p>' +
    '<div class="ps-exam-output hidden" id="ps-version-output" aria-live="polite"></div>' +
    '<div class="ps-exam-output hidden" id="ps-ai-output" aria-live="polite"></div>' +
    '</section>';

  function el(id) { return document.getElementById(id); }
  var gradeSelect = el('ps-grade'), taskSelect = el('ps-task'), exerciseSelect = el('ps-exercise');
  var answer = el('ps-answer'), wordcount = el('ps-wordcount');
  var current = null, STORE_KEY = 'picscribe_eiken_drafts_v1';

  function countWords(text) { return (text.match(/[A-Za-z]+(?:[-'][A-Za-z]+)*/g) || []).length; }
  function storage() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY) || '{}') || {}; }
    catch (_) { return {}; }
  }
  function persist(obj) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(obj)); return true; }
    catch (_) { return false; }
  }
  function addOption(select, value, label) {
    var item = document.createElement('option');
    item.value = value; item.textContent = label;
    select.appendChild(item);
  }
  Object.keys(LEVELS).forEach(function(grade) {
    addOption(gradeSelect, grade, LEVELS[grade].label);
  });
  gradeSelect.value = 'g2';
  function refreshTasks() {
    taskSelect.replaceChildren();
    Object.keys(LEVELS[gradeSelect.value].tasks).forEach(function(task) {
      addOption(taskSelect, task, TASK_LABELS[task]);
    });
    refreshExercises();
  }
  function refreshExercises() {
    exerciseSelect.replaceChildren();
    EXERCISES.filter(function(ex) {
      return ex.grade === gradeSelect.value && ex.task === taskSelect.value;
    }).forEach(function(ex) { addOption(exerciseSelect, ex.id, ex.title); });
    refreshPrompt();
  }
  function refreshPrompt() {
    current = EXERCISES.find(function(ex) { return ex.id === exerciseSelect.value; });
    if (!current) return;
    var limit = LEVELS[current.grade].tasks[current.task];
    el('ps-title').textContent = current.title;
    el('ps-prompt').textContent = current.prompt;
    var source = el('ps-source');
    source.textContent = current.source || '';
    source.classList.toggle('hidden', !current.source);
    el('ps-target').textContent = '目標語数：' + limit[0] + '〜' + limit[1] + '語';
    el('ps-hint-text').classList.add('hidden');
    el('ps-version-output').classList.add('hidden');
    el('ps-ai-output').classList.add('hidden');
    var old = storage()[current.id];
    answer.value = old && old.draft || '';
    reviewLocal();
  }
  function saveDraft() {
    if (!current) return;
    var all = storage(), old = all[current.id] || {};
    all[current.id] = {draft: answer.value.slice(0, 6000),
      revisions: old.revisions || [], updatedAt: new Date().toISOString()};
    var keys = Object.keys(all).sort(function(a,b) {
      return (all[b].updatedAt || '').localeCompare(all[a].updatedAt || '');
    });
    keys.slice(60).forEach(function(key) {delete all[key];});
    persist(all);
  }
  function reviewLocal() {
    if (!current) return;
    var count = countWords(answer.value), limit = LEVELS[current.grade].tasks[current.task];
    wordcount.textContent = count + ' words';
    wordcount.className = count >= limit[0] && count <= limit[1] ? 'ps-word-ok' : 'ps-word-needs';
    var tips = [];
    if (count < limit[0]) tips.push('語数が少なめです。説明・理由を補いましょう。');
    else if (count > limit[1]) tips.push('語数が多めです。重複を減らしましょう。');
    else tips.push('指定語数の範囲内です。');
    if (answer.value.trim() && !/[.!?]["'’]?\s*$/.test(answer.value.trim())) tips.push('最後の句読点を確認しましょう。');
    if (current.task === 'email') {
      tips.push('相手の質問への答えがあるか確認しましょう。');
      if (current.grade === 'p2' && (answer.value.match(/\?/g) || []).length < 2)
        tips.push('準2級Eメール：具体的な質問を2つ入れましょう。');
    } else if (current.task === 'summary') tips.push('原文にない意見を加えず、重要点を言い換えましょう。');
    else tips.push('立場・理由・具体例を整理しましょう。');
    el('ps-selfcheck').replaceChildren();
    tips.forEach(function(tip) {
      var span = document.createElement('span');
      span.textContent = tip; span.className = 'ps-check';
      el('ps-selfcheck').appendChild(span);
    });
  }
  function hintText() {
    if (!current) return '';
    if (current.task === 'email')
      return '1. あいさつ  2. 相手の質問に答える  3. 理由を添える  4. 指定された質問を入れる  5. 自然に締めくくる。';
    if (current.task === 'summary')
      return '1. 原文の中心テーマ  2. 主なメリット・背景  3. 課題や対立点  4. 結論。自分の意見は加えないでください。';
    return '1. 自分の立場を明示  2. 理由その1と具体例  3. 理由その2と具体例  4. 結論で立場を再確認。';
  }
  function addText(container, heading, value) {
    if (!value) return;
    var p = document.createElement('p');
    var strong = document.createElement('strong');
    strong.textContent = heading + '：';
    p.appendChild(strong);
    p.appendChild(document.createTextNode(' ' + value));
    container.appendChild(p);
  }
  function saveVersion() {
    if (!current || !answer.value.trim()) {
      el('ps-version-output').classList.remove('hidden');
      el('ps-version-output').textContent = 'まず答案を書いてください。';
      return;
    }
    var all = storage(), item = all[current.id] || {revisions:[]};
    var revisions = item.revisions || [], text = answer.value.slice(0,6000);
    if (!revisions.length || revisions[revisions.length-1].text !== text)
      revisions.push({text:text, at:new Date().toISOString()});
    item.draft = text; item.revisions = revisions.slice(-5);
    item.updatedAt = new Date().toISOString(); all[current.id] = item;
    persist(all);
    el('ps-version-output').classList.remove('hidden');
    el('ps-version-output').textContent = '答案をこの端末内に記録しました。';
  }
  function compare() {
    var record = current && storage()[current.id], revisions = record && record.revisions || [];
    var out = el('ps-version-output'); out.replaceChildren();
    if (!revisions.length) addText(out,'比較','先に「この答案を記録」を押してください。');
    else {
      addText(out, 'Before', revisions[revisions.length-1].text);
      addText(out, 'Now', answer.value);
    }
    out.classList.remove('hidden');
  }
  function showAI(result) {
    var out = el('ps-ai-output'); out.replaceChildren();
    addText(out, 'AIによる参考評価', '英検公式の採点や合否判定ではありません');
    addText(out,'総評',result.summary_ja);
    if (result.scores && result.scores.length) {
      result.scores.forEach(function(entry) {
        addText(out,entry.criterion + ' ' + entry.score + '/4',entry.reason_ja);
      });
    }
    if (result.strengths && result.strengths.length)
      addText(out,'良かった点',result.strengths.join(' / '));
    if (result.revisions && result.revisions.length)
      result.revisions.forEach(function(r) {addText(out,'改善',r.original + ' → ' + r.revised + '（' + r.explanation_ja + '）');});
    addText(out,'必要最小限の修正例',result.corrected);
    addText(out,'発展した表現例',result.upgraded);
    addText(out,'次の練習',result.next_step_ja);
    out.classList.remove('hidden');
  }
  async function requestAI() {
    if (!current || countWords(answer.value) < 3) {
      el('ps-ai-output').classList.remove('hidden');
      el('ps-ai-output').textContent = '先に3語以上の英文を書いてください。'; return;
    }
    var out = el('ps-ai-output'), button = el('ps-request-ai');
    button.disabled = true; button.textContent = '添削中…';
    out.classList.remove('hidden'); out.textContent = 'AI添削に接続しています…';
    try {
      var response = await fetch('/api/writing-feedback', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body:JSON.stringify({mode:'eiken',grade:current.grade,task:current.task,
          draft:answer.value.slice(0,6000),
          context:{prompt:current.prompt,source:current.source || '', exerciseId:current.id}})
      });
      var result = await response.json();
      if (!response.ok) throw new Error(result.message || 'AI添削は設定されていません');
      showAI(result);
    } catch (error) {out.textContent = 'AI添削は現在利用できません: ' + error.message;}
    finally {button.disabled=false;button.textContent='AI添削';}
  }

  gradeSelect.addEventListener('change', refreshTasks);
  taskSelect.addEventListener('change', refreshExercises);
  exerciseSelect.addEventListener('change', refreshPrompt);
  answer.addEventListener('input', function(){saveDraft();reviewLocal();});
  el('ps-hint-toggle').addEventListener('click', function() {
    var h=el('ps-hint-text');h.textContent=hintText();h.classList.toggle('hidden');
  });
  el('ps-save-version').addEventListener('click',saveVersion);
  el('ps-show-version').addEventListener('click',compare);
  el('ps-request-ai').addEventListener('click',requestAI);
  refreshTasks();
})();
