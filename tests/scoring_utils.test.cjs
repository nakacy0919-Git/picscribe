const test = require('node:test');
const assert = require('node:assert/strict');
const s = require('../js/scoring_utils.js');

test('normalization handles punctuation and repeated spaces', () => {
  assert.equal(s.normalizeWords("  A girl's  BOOK!  "), "a girl's book");
  assert.equal(s.containsPhrase('the girl opens the window', 'opens the'), true);
  assert.equal(s.containsPhrase('the girl opens the window', 'window opens'), false);
});

test('one concept cannot be counted multiple times for synonyms or repetitions', () => {
  const targets = [
    {id:'g',bucket:'gist',phrases:['girl','young woman','girl']},
    {id:'s',bucket:'setting',phrases:['window']},
    {id:'m',bucket:'mood',phrases:['bright']}
  ];
  const a = s.assessCoverage(targets, 'Girl girl girl girl girl.');
  assert.equal(a.matchedTargets.length, 1);
  assert.equal(a.categoryHits.gist, 1);
  assert.ok(a.coverage < 100);
});

test('complete description can achieve 100 coverage, incomplete phrase cannot', () => {
  const targets = [
    {id:'g1',bucket:'gist',phrases:['girl']},
    {id:'g2',bucket:'gist',phrases:['opening']},
    {id:'s1',bucket:'setting',phrases:['curtains']},
    {id:'s2',bucket:'setting',phrases:['window']},
    {id:'m1',bucket:'mood',phrases:['bright']}
  ];
  assert.equal(s.assessCoverage(targets,
      'A girl is opening the curtains near a bright window.').coverage, 100);
  assert.ok(s.assessCoverage(targets,
      'girl opening curtains window bright').coverage <= 50);
});

test('reading accuracy penalizes omissions, wrong order, and repetition', () => {
  assert.equal(s.wordAccuracy('The boy reads a book.', 'The boy reads a book.'), 100);
  assert.ok(s.wordAccuracy('The boy reads a book.', 'book reads boy the a') < 100);
  assert.ok(s.wordAccuracy('the boy reads a book', 'the boy reads a book book book') < 100);
  assert.ok(s.wordAccuracy('the boy reads a book', 'the boy reads a') < 100);
  assert.equal(s.wordAccuracy('the boy reads a book', ''), 0);
  assert.ok(s.wordAccuracy('hello', 'hello hello hello') <= 100);
});
