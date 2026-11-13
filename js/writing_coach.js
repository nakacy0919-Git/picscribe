/* PicScribe Guided Writing Coach - local-first, no API dependency */
(function () {
  'use strict';
  var input = document.getElementById('user-input');
  var area = document.getElementById('input-area-wrapper');
  if (!input || !area) return;

  var panel = document.createElement('section');
  panel.className = 'ps-coach';
  panel.setAttribute('aria-label', 'Writing Coach');
  panel.innerHTML =
    '<div class="ps-coach-head"><strong>Writing Coach</strong><div class="ps-mode-switch">' +
    '<button type="button" data-mode="guided" aria-pressed="true">Guided</button>' +
    '<button type="button" data-mode="free" aria-pressed="false">Free</button></div></div>' +
    '<div class="ps-steps" aria-label="描写ステップ"></div>' +
    '<p class="ps-next" aria-live="polite"></p>' +
    '<div class="ps-hint hidden"><span class="ps-hint-en"></span><span class="ps-hint-ja"></span></div>' +
    '<div class="ps-checks" aria-live="polite"></div>' +
    '<div class="ps-coach-actions"><button type="button" data-action="hint">ヒントを見る</button>' +
    '<button type="button" data-action="snapshot">この英文を記録</button>' +
    '<button type="button" data-action="compare">前回と比較</button>' +
    '<button type="button" data-action="ai">AIで添削</button></div>' +
    '<p class="ps-local-note">下書きはこの端末内に自動保存されます。AI添削を選ぶまでは答案を送信しません。</p>' +
    '<div class="ps-compare hidden" aria-live="polite"></div>' +
    '<div class="ps-ai-feedback hidden" aria-live="polite"></div>';
  area.insertBefore(panel, area.firstChild);

  var steps = panel.querySelector('.ps-steps');
  var next = panel.querySelector('.ps-next');
  var checks = panel.querySelector('.ps-checks');
  var hint = panel.querySelector('.ps-hint');
  var hintEn = panel.querySelector('.ps-hint-en');
  var hintJa = panel.querySelector('.ps-hint-ja');
  var compare = panel.querySelector('.ps-compare');
  var aiBox = panel.querySelector('.ps-ai-feedback');
  var guided = true, revealed = false, sceneId = '', lastStage = -1;
  var SAVE_KEY = 'picscribe_writing_v1';

  function readSaved() {
    try { return JSON.parse(localStorage.getItem(SAVE_KEY) || '{}') || {}; }
    catch (_) { return {}; }
  }
  function writeSaved(value) {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(value)); return true; }
    catch (_) { return false; }
  }
  function data() { return window.currentSceneData || {}; }
  function sceneKey() { return String(data().id || data().image_id || ''); }
  function words(text) { return (text.trim().match(/[A-Za-z]+(?:['’][A-Za-z]+)?/g) || []); }
  function hasAny(text, values) {
    var padded = ' ' + text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim() + ' ';
    return (values || []).some(function (value) {
      var phrase = String(value).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
      return phrase.length > 1 && padded.indexOf(' ' + phrase + ' ') !== -1;
    });
  }
  function flags(text) {
    var targets = data().core_svo_targets || [];
    var base = [
      targets[0] && targets[0].targets || ['woman', 'man', 'girl', 'boy', 'people', 'child', 'student'],
      targets[1] && targets[1].targets || ['sitting', 'standing', 'walking', 'holding', 'reading', 'drinking'],
      targets[2] && targets[2].targets || ['table', 'window', 'room', 'outside', 'school', 'cafe']
    ];
    var mood = data().overall_mood || [];
    return [hasAny(text, base[0]), hasAny(text, base[1]), hasAny(text, base[2]), hasAny(text, mood)];
  }
  function stageOf(text) {
    var done = flags(text);
    for (var i = 0; i < done.length; i++) if (!done[i]) return i;
    return 4;
  }
  function guidance(stage) {
    var d = data(), targets = d.core_svo_targets || [], mission = d.mission_guides || {};
    var prompts = [
      targets[0] && targets[0].hint_msg || mission.gist || 'まず誰・何が写っているかを書きましょう。',
      targets[1] && targets[1].hint_msg || '次に、人物や物の動きを書き足しましょう。',
      targets[2] && targets[2].hint_msg || mission.setting || '場所・周囲の物を加えてみましょう。',
      mission.complete || '光や雰囲気を加えて、もっと豊かな描写にしましょう。',
      '4つの観点に触れました！ 語順・時制・スペルを見直しましょう。'
    ];
    return prompts[stage] || prompts[0];
  }
  function hintFor(stage) {
    var d = data(), focus = d.focus_hints || {};
    var group = stage <= 1 ? 'gist' : stage === 2 ? 'setting' : 'mood';
    var list = focus[group] || [];
    var index = stage === 1 ? 1 : 0;
    return list[index] || list[0] || null;
  }
  function quickChecks(text) {
    var list = [];
    if (text.trim() && !/^[A-Z]/.test(text.trim())) list.push('書き出しを大文字にする');
    if (text.trim() && !/[.!?]["'’]?\s*$/.test(text.trim())) list.push('文末の句読点を確認する');
    if (/\b(?:he|she|it)\s+(?:drink|eat|read|walk|run|play|hold|open|sit)\b/i.test(text))
      list.push('三人称単数・現在進行形の形を確認する');
    if (/\b(?:a|an|the)\s+(?:a|an|the)\b/i.test(text)) list.push('冠詞の重複を確認する');
    if (!list.length && words(text).length >= 3) list.push('基本的な形式チェックはOK。文法の正確さはAI添削で確認できます');
    if (!list.length) list.push('まず短い英文を書いてみましょう');
    return list;
  }
  function persistDraft() {
    if (!sceneId) return;
    var all = readSaved(), old = all[sceneId] || {};
    all[sceneId] = {
      draft: input.innerText.slice(0, 6000),
      revisions: old.revisions || [],
      updatedAt: new Date().toISOString()
    };
    var keys = Object.keys(all).sort(function(a, b) {
      return (all[b].updatedAt || '').localeCompare(all[a].updatedAt || '');
    });
    keys.slice(40).forEach(function(key) { delete all[key]; });
    writeSaved(all);
  }
  function render() {
    if (!sceneId) return;
    var text = input.innerText || '';
    var done = flags(text);
    var labels = ['主役', '動作', '背景', '雰囲気'];
    steps.replaceChildren();
    labels.forEach(function(label, i) {
      var el = document.createElement('span');
      el.className = 'ps-step' + (done[i] ? ' ps-step-done' : '');
      el.textContent = (done[i] ? '✓ ' : (i + 1) + '. ') + label;
      steps.appendChild(el);
    });
    var stage = stageOf(text);
    if (stage !== lastStage) { revealed = false; lastStage = stage; }
    next.textContent = guided ? guidance(stage) : '自由に写真を描写しましょう。必要ならGuidedに切り替えられます。';
    hint.classList.toggle('hidden', !guided || !revealed);
    var item = hintFor(stage);
    hintEn.textContent = item && item.en || 'A person is ...';
    hintJa.textContent = item && item.ja || '人の動作を英語で説明してみましょう。';
    checks.replaceChildren();
    quickChecks(text).forEach(function(message) {
      var el = document.createElement('span');
      el.className = 'ps-check';
      el.textContent = message;
      checks.appendChild(el);
    });
    panel.querySelector('[data-action="hint"]').disabled = !guided;
    panel.querySelector('[data-action="hint"]').textContent = revealed ? 'ヒントを隠す' : 'ヒントを見る';
  }
  function refreshScene() {
    sceneId = sceneKey();
    lastStage = -1; revealed = false;
    compare.classList.add('hidden');
    aiBox.classList.add('hidden');
    if (!sceneId) return;
    var saved = readSaved()[sceneId];
    input.innerText = saved && saved.draft || '';
    input.dispatchEvent(new Event('input', {bubbles: true}));
    render();
  }
  function snapshot() {
    if (!sceneId || !input.innerText.trim()) {
      next.textContent = 'まず英文を書いてから記録しましょう。';
      return;
    }
    var all = readSaved(), record = all[sceneId] || { revisions: [] };
    var revisions = record.revisions || [];
    var draft = input.innerText.slice(0, 6000);
    if (!revisions.length || revisions[revisions.length - 1].text !== draft)
      revisions.push({text: draft, at: new Date().toISOString()});
    record.revisions = revisions.slice(-5);
    record.draft = draft;
    record.updatedAt = new Date().toISOString();
    all[sceneId] = record;
    writeSaved(all);
    next.textContent = 'この英文を記録しました。書き足してから「前回と比較」を押しましょう。';
  }
  function compareDraft() {
    compare.replaceChildren();
    var saved = readSaved()[sceneId], versions = saved && saved.revisions || [];
    var heading = document.createElement('strong');
    heading.textContent = 'Before / After';
    compare.appendChild(heading);
    if (!versions.length) {
      var p = document.createElement('p');
      p.textContent = '先に「この英文を記録」を押してください。';
      compare.appendChild(p);
    } else {
      var old = document.createElement('p'), current = document.createElement('p');
      old.textContent = 'Before: ' + versions[versions.length - 1].text;
      current.textContent = 'Now: ' + input.innerText;
      compare.appendChild(old);
      compare.appendChild(current);
    }
    compare.classList.remove('hidden');
  }
  function showFeedback(result) {
    aiBox.replaceChildren();
    var title = document.createElement('strong');
    title.textContent = 'AI Writing Feedback（参考評価）';
    aiBox.appendChild(title);
    [
      ['総評', result.summary_ja],
      ['次の一歩', result.next_step_ja]
    ].forEach(function(pair) {
      var p = document.createElement('p');
      p.textContent = pair[0] + '：' + (pair[1] || '—');
      aiBox.appendChild(p);
    });
    aiBox.classList.remove('hidden');
    window.dispatchEvent(new CustomEvent('picscribe:ai-feedback',{detail:{
      mode:'picture',result:result,draft:input.innerText,sceneId:sceneId
    }}));
  }
  async function requestFeedback() {
    if (!input.innerText.trim()) { next.textContent = '英文を書いてから添削しましょう。'; return; }
    var button = panel.querySelector('[data-action="ai"]');
    button.disabled = true; button.textContent = '添削中…';
    aiBox.classList.remove('hidden');
    aiBox.textContent = '安全なサーバーを通じて添削を依頼しています…';
    try {
      if (!window.PicScribeAI) throw new Error('AI接続機能を読み込めませんでした。');
      var d = data(), requestedScene = sceneId, requestedText = input.innerText;
      var result = await window.PicScribeAI.submit({
        mode:'picture',draft:requestedText.slice(0,6000),
        context:{imageDescription:(d.overall_description_en||'').slice(0,1000)}
      });
      if (requestedScene === sceneId && requestedText === input.innerText) showFeedback(result);
    } catch (error) { aiBox.textContent = 'AI添削は現在利用できません: ' + error.message; }
    finally { button.disabled = false; button.textContent = 'AIで添削'; }
  }

  panel.addEventListener('click', function(e) {
    var modeBtn = e.target.closest('button[data-mode]');
    if (modeBtn) {
      guided = modeBtn.getAttribute('data-mode') === 'guided';
      panel.querySelectorAll('button[data-mode]').forEach(function(b) {
        b.setAttribute('aria-pressed', String((b.getAttribute('data-mode') === 'guided') === guided));
      });
      render(); return;
    }
    var btn = e.target.closest('button[data-action]');
    if (!btn) return;
    var action = btn.getAttribute('data-action');
    if (action === 'hint') { revealed = !revealed; render(); }
    if (action === 'snapshot') snapshot();
    if (action === 'compare') compareDraft();
    if (action === 'ai') requestFeedback();
  });
  input.addEventListener('input', function() { persistDraft(); render(); });
  var originalLaunch = window.launchGame;
  if (typeof originalLaunch === 'function') {
    window.launchGame = function(scene) { originalLaunch(scene); refreshScene(); };
  }
  if (sceneKey()) refreshScene();
})();
