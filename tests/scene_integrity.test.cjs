/**
 * Data integrity tests for all picture scenes.
 * Run in an isolated checkout: node --test tests/scene_integrity.test.cjs
 */
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const ROOT=path.resolve(__dirname,'..');
const sceneFiles=[
  ['cafe','data/data_picture.js','cafeData'],
  ['library_boy','data/library_boy_data.js','libraryBoyData'],
  ...Array.from({length:33},(_,i)=>{
    const n=String(i+3).padStart(3,'0');
    return ['scene_'+n,'data/'+n+'_data.js','scene'+n+'Data'];
  })
];
test('all 35 picture scenes have data, images and descriptions',()=>{
  const ids=new Set();
  const html=fs.readFileSync(path.join(ROOT,'index.html'),'utf8');
  for(const [id,filename,variable] of sceneFiles){
    assert.ok(fs.existsSync(path.join(ROOT,filename)),filename);
    const source=fs.readFileSync(path.join(ROOT,filename),'utf8');
    const data=vm.runInNewContext(source+'\n'+variable,{}, {timeout:1500});
    assert.ok(data && typeof data==='object',id+' scene object');
    assert.ok(typeof data.image_id==='string',id+' image_id');
    assert.ok(fs.existsSync(path.join(ROOT,'images',data.image_id)),id+' missing image '+data.image_id);
    assert.ok(typeof data.overall_description_en==='string'&&data.overall_description_en.length>20,
      id+' missing English description');
    assert.ok(typeof data.overall_description_ja==='string'&&data.overall_description_ja.length>10,
      id+' missing Japanese description');
    assert.ok(!ids.has(id),id+' duplicate id');ids.add(id);
    assert.ok(html.includes("launchGame('"+id+"')"),id+' missing home-card link');
    // The legacy café file predates focus_hints; its coach fallback is tested separately.
    if(id!=='cafe'){
      for(const focus of ['gist','setting','mood']){
        const hints=data.focus_hints && data.focus_hints[focus];
        assert.ok(Array.isArray(hints)&&hints.length,id+' missing '+focus+' hints');
      }
    }
  }
  assert.equal(ids.size,35);
});
test('descriptive focal regions have structurally valid bounding boxes when supplied',()=>{
  for(const [id,filename,variable] of sceneFiles){
    const source=fs.readFileSync(path.join(ROOT,filename),'utf8');
    const data=vm.runInNewContext(source+'\n'+variable,{}, {timeout:1500});
    if(!Array.isArray(data.elements))continue;
    for(const element of data.elements) {
      if(!element.bounding_box_conceptual)continue;
      const b=element.bounding_box_conceptual;
      assert.equal(b.length,4,id+' bounding box length');
      assert.ok(b.every(v=>typeof v==='number'&&Number.isFinite(v)),id+' nonnumeric bounding box');
    }
  }
});
