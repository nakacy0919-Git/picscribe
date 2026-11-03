# PicScribe performance revision (development branch only)

## Overview
- Removed 35 eager `data/*.js` script tags from `index.html`.
- `launchGame(sceneId)` loads a known scene on demand, caches successful script-load promises, and offers loading, cancel, and retry states.
- All 35 image cards use native lazy loading and descriptive labels; scene selection is searchable without first loading scene data.
- Dictionary search no longer imports the ~49 MB `data/jmdict_light.json` file into the serverless request handler.

## Dictionary index
- `npm run build`: reads the original dictionary **at build time** and writes `api/_dictionary/*.json` shards and a `manifest.json`.
- The API reads only the shard corresponding to the query's initial character and caches up to six shards in each warm process.
- English tokens within multiword glosses are indexed; Japanese headword prefixes are indexed.
- **Behavioral change:** this index supports **prefix matching**, not the previous arbitrary substring matching. Example: `coffee` can match `a cup of coffee`; `pple` does not match `apple`. The UI now states that searches begin at the start of a word.
- English/number queries need at least two characters to avoid expensive single-character searches.
- The original dictionary file remains in the repo as the build input, and is no longer read by the API at runtime.
- After running `npm run build`, inspect `api/_dictionary/manifest.json` and the command output for the **actual** source bytes, index bytes, entry count and shard count.
- Generated shard files are intentionally ignored by Git. The Vercel build command and function `includeFiles` setting in `vercel.json` are required for production packaging.

## Validation
- `npm test` exercises scoring, dictionary generation/API using a small fixture, scene script cache, retry logic and catalog links.
- Basic JavaScript syntax and mocked dictionary/scene workflows were checked during development.
- Not yet run against the entire real dictionary or an actual Vercel build.
- Browser device checks still needed: Chrome desktop, iPad Safari portrait/landscape, iPhone Safari, network failure, and keyboard-only navigation.
- No Vercel deployment, preview or production, is authorized in this revision.

## Before approving release
1. Execute `npm run build` with the real 49 MB dictionary and review `manifest.json` size and query latency.
2. Execute `npm test`, including the new dictionary and scene tests.
3. Check the 35 scene datasets after lazy loading, including hints, highlighting, Finish, and speech review.
4. Verify the output and inclusion of generated shards in a *local* Vercel build without publishing.
5. Confirm production release approval separately. Do not merge to `main` or deploy based on this document alone.
