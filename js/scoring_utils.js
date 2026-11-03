/* Shared, deterministic assessment helpers for browser and Node tests. */
(function (root) {
  'use strict';

  function normalizeWords(value) {
    return String(value == null ? '' : value)
      .normalize('NFKC')
      .toLowerCase()
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[^a-z0-9'\s]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function tokenize(value) {
    const normalized = normalizeWords(value);
    return normalized ? normalized.split(' ') : [];
  }

  function containsPhrase(normalizedInput, phrase) {
    const needle = normalizeWords(phrase);
    return Boolean(needle && (' ' + normalizedInput + ' ').includes(' ' + needle + ' '));
  }

  function isSentenceComplete(value) {
    const raw = String(value || '').trim();
    // A conservative structural check, NOT a grammar or meaning assessment.
    return tokenize(raw).length >= 5 &&
      /^[\s"'(]*[A-Z]/.test(raw) &&
      /[.!?]["')\s]*$/.test(raw);
  }

  function assessCoverage(targets, text) {
    const normalized = normalizeWords(text);
    const categories = { gist: 0, setting: 0, mood: 0 };
    const available = { gist: 0, setting: 0, mood: 0 };
    const matchedTargets = [];
    const matchedPhrases = [];

    (Array.isArray(targets) ? targets : []).forEach(function (target) {
      if (!Object.prototype.hasOwnProperty.call(categories, target.bucket)) return;
      available[target.bucket] += 1;
      const hit = (target.phrases || []).find(function (phrase) {
        return containsPhrase(normalized, phrase);
      });
      if (hit) {
        categories[target.bucket] += 1;
        matchedTargets.push(target);
        matchedPhrases.push(hit);
      }
    });

    const weights = { gist: 45, setting: 35, mood: 20 };
    const quotas = { gist: 2, setting: 2, mood: 1 };
    let earned = 0;
    let possible = 0;
    Object.keys(categories).forEach(function (bucket) {
      if (available[bucket] === 0) return;
      const required = Math.min(quotas[bucket], available[bucket]);
      possible += weights[bucket];
      earned += weights[bucket] * Math.min(1, categories[bucket] / required);
    });

    let coverage = possible ? Math.round((earned / possible) * 100) : 0;
    if (!isSentenceComplete(text)) coverage = Math.min(coverage, 50);
    coverage = Math.max(0, Math.min(100, coverage));
    return { coverage: coverage, categoryHits: categories,
      matchedTargets: matchedTargets, matchedPhrases: matchedPhrases };
  }

  // Word-level Levenshtein distance penalizes missing, extra and reordered words.
  function wordAccuracy(expected, spoken) {
    const a = tokenize(expected);
    const b = tokenize(spoken);
    if (!a.length || !b.length) return 0;
    let previous = Array.from({length: b.length + 1}, function (_, i) { return i; });
    for (let i = 1; i <= a.length; i++) {
      const current = [i];
      for (let j = 1; j <= b.length; j++) {
        const substitution = a[i - 1] === b[j - 1] ? 0 : 1;
        current[j] = Math.min(
          previous[j] + 1, current[j - 1] + 1,
          previous[j - 1] + substitution
        );
      }
      previous = current;
    }
    const denominator = Math.max(a.length, b.length);
    return Math.max(0, Math.min(100,
      Math.round((1 - previous[b.length] / denominator) * 1000) / 10));
  }

  const api = {normalizeWords: normalizeWords, tokenize: tokenize,
    containsPhrase: containsPhrase, assessCoverage: assessCoverage,
    wordAccuracy: wordAccuracy, isSentenceComplete: isSentenceComplete};
  root.PicScribeScoring = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window === 'undefined' ? globalThis : window);
