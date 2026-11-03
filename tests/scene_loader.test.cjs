const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');

function makeNode() {
  const classes = new Set(['hidden']);
  return {
    textContent:'', value:'', className:'', hidden:false,
    children:[], style:{},
    classList:{
      contains:k=>classes.has(k),
      add:k=>classes.add(k),
      remove:k=>classes.delete(k),
      toggle(k,forced) {
        if (forced === true) classes.add(k);
        else if (forced === false) classes.delete(k);
        else if (classes.has(k)) classes.delete(k);
        else classes.add(k);
      }
    },
    addEventListener(){},
    appendChild(item){this.children.push(item);},
    replaceChildren(){this.children=[];},
    remove(){this.removed=true;},
    contains(){return false;}
  };
}

function makeHarness() {
  const nodes = new Map(), loaded = [], started = [];
  const get = id => {
    if (!nodes.has(id)) nodes.set(id,makeNode());
    return nodes.get(id);
  };
  const document = {
    getElementById:get,
    querySelectorAll:()=>[],
    createElement:()=>makeNode(),
    createTextNode:text=>({textContent:text}),
    addEventListener(){},
    body:{appendChild(script){loaded.push(script);}}
  };
  const script=fs.readFileSync(path.join(__dirname,'../js/main.js'),'utf8');
  const ctx=vm.createContext({
    document, console, setTimeout:()=>0, clearTimeout:()=>{},
    initGame:id=>{started.push(id);return true;},
    fetch:async()=>{throw Error('Not called in this test');}
  });
  vm.runInContext(script,ctx,{filename:'js/main.js'});
  const run=source=>vm.runInContext(source,ctx);
  return {get,loaded,started,run};
}

test('scene is loaded on demand and cached for next visit',async()=>{
  const h=makeHarness();
  assert.equal(h.loaded.length,0);
  let first=h.run("launchGame('scene_003')");
  assert.equal(h.loaded.length,1);
  assert.equal(h.loaded[0].src,'data/003_data.js');
  h.loaded[0].onload();
  await first;
  assert.deepEqual(h.started,['scene_003']);
  assert.equal(h.get('game-container').classList.contains('hidden'),false);
  h.run('showSelectionScreen()');
  await h.run("launchGame('scene_003')");
  assert.equal(h.loaded.length,1);
  assert.deepEqual(h.started,['scene_003','scene_003']);
});

test('failed scene shows an error and can be retried',async()=>{
  const h=makeHarness();
  const first=h.run("launchGame('scene_004')");
  assert.equal(h.loaded.length,1);
  h.loaded[0].onerror();
  await first;
  assert.equal(h.get('scene-load-error').classList.contains('hidden'),false);
  const retry=h.run("launchGame('scene_004')");
  assert.equal(h.loaded.length,2);
  h.loaded[1].onload();
  await retry;
  assert.equal(h.get('scene-load-error').classList.contains('hidden'),true);
});

test('scene IDs cannot inject arbitrary paths',()=>{
  const h=makeHarness();
  assert.equal(h.run("getSceneFile('../api/search.js')"),null);
  assert.equal(h.run("getSceneFile('scene_036')"),null);
  assert.equal(h.run("getSceneFile('cafe')"),'data/data_picture.js');
});
