# PicScribe Guided Writing + EIKEN Studio (development only)

Development branch: `feature/picscribe-coach-eiken-20261113`  
This branch intentionally does **not** update `main`, run any deployment action, or enable the AI endpoint.

## Added

- `js/writing_coach.js` and `css/writing_coach.css`: Guided/Free modes for the existing 35 picture-description scenes; four focus milestones (subject, action, setting, mood); context-sensitive hints from each scene's existing data; light, clearly labeled form checks; on-device autosave; save-and-compare revisions; optional on-demand AI feedback.
- `js/eiken_practice.js` and `css/eiken_practice.css`: EIKEN writing practice for 3, Pre-2, Pre-2 Plus, 2, Pre-1, 1; task-specific original sample prompts for opinion, email, and summary formats; word-count targets, scaffolding, on-device drafts and comparisons.
- `api/writing-feedback.js`: opt-in, server-side AI feedback with structured JSON output, bounded inputs, origin filtering, light in-instance throttling, and a disabled-by-default safety switch.
- `js/main.js`: fix a dictionary modal null-element error, avoid untrusted HTML in suggestions/explanation, and remove unsubstantiated corpus-frequency claims.
- `index.html`: load the new modules and styles.
- `js/game_core.js`: prevent HTML rewriting while typing, reduce repeated synonym scoring, and make Coverage Rate an explicitly non-grammar heuristic. Input HTML/caret safety improved.
- `js/writing_quests.js` and `css/writing_quests.css`: four mini challenges (present progressive, location, multiple sentences, connectors) with immediate feedback; marks only the observed pattern, never grammatical correctness.
- `js/eiken_exam_mode.js` and `css/eiken_exam_mode.css`: optional 10/15/20/30 minute practice timer and task-aware self-revision checklists; time expiry does not delete or lock work.
- `js/writing_portfolio.js` and `css/writing_portfolio.css`: on-device writing overview, resume cards, bounded JSON backup/restore and explicit clearing for shared iPads. No remote tracking.
- `css/learning_layout.css`: responsive iPad portrait/landscape layout, input focus, touch targets and reduced-motion support.
- `js/ui_focus.js`: escaped hint text, keyboard access to translation hints, and pointer-/Pencil-compatible resize controls.
- `js/ai_client.js`: explicit user confirmation prior to essay transmission; session-only teacher code, never store the code in localStorage.
- `tests/smoke.test.cjs`: no-dependency smoke test suite: run `node --test tests/smoke.test.cjs` after checking out the branch.


## Phase 3 — learning-loop upgrades

- `js/revision_workshop.js` and `css/revision_workshop.css`: a student-first correction activity. The student rewrites exact excerpts from their submission before revealing AI examples. A student's rewrite can replace the cited span only with explicit confirmation; the previous draft is saved first. Alternative valid wording is not automatically marked wrong.
- `js/teacher_calibration.js` and `css/teacher_calibration.css`: collapsed, local-only "Teacher Calibration Lab" in Academic & Exam. Teachers can enter their own 0–4 ratings for 内容・構成・語彙・文法, compare them with AI practice scores, inspect criterion-level absolute differences (including grade/task breakdowns), and export a comparison CSV **without the student's essay or name**. This is NOT teacher authentication, central records or proof of accuracy.
- `js/picture_gallery.js` and `css/picture_gallery.css`: text search across the 35 scenes, Japanese contextual descriptions, drafted/new filters, saved-draft badges and a missing-scene guard. The legacy café dataset uses the Writing Coach's new scene-specific hint fallback.
- `api/writing-feedback.js`: validates exactly four distinct rubric dimensions on EIKEN practice tasks (0–4 each); forbids exam points in photo mode; drops model-reported errors when the quoted original is absent from the student's essay; calculates word count and target-range status server-side; returns a clearly labeled non-official /16 practice total. **It still does not guarantee agreement with official EIKEN raters.**
- `tests/feedback_quality.test.cjs` and `tests/scene_integrity.test.cjs`: tests for grounded corrections/rubric guardrails and all 35 photo datasets/image files.
- `.github/workflows/picscribe-dev-check.yml`: development-branch-only Node.js test workflow. It runs tests, **not** deployment.

**Verified CI:** GitHub Actions run [43507501133](https://github.com/nakacy0919-Git/picscribe/actions/runs/43507501133) completed successfully (12 tests, 12 passed, 0 failed). It covered every scene's data/image/hints (with the documented café fallback), snippet safety, model-response validation and the earlier smoke checks. **No live model request, screenshot-based browser check or physical iPad test was performed.**

### Teacher calibration procedure

1. In a restricted development environment, enable the server-side model and class code, after applying an access policy and usage budget.
2. Open Academic & Exam; select the grade, writing format, and an original practice question.
3. Have the learner produce an answer without personal identifiers, then use AI添削 (with explicit consent).
4. Expand **Teacher Calibration Lab**, enter the teacher's **independent** four-dimensional ratings, and save one comparison.
5. For calibration, use diverse submissions across levels, task types, writing quality, and lengths. Export CSV to inspect grade/task bias and disagreements of two or more points.
6. Do not interpret aggregate agreement alone as proof of fair scoring; review essays where the model and teacher disagree. Do not automatically convert these local comparisons into exam pass/fail predictions.

## EIKEN word count reference (2026)

| Grade | Opinion essay | Email | Summary |
|---|---:|---:|---:|
| 3 | 25–35 | 15–25 | — |
| Pre-2 | 50–60 | 40–50 | — |
| Pre-2 Plus | 50–60 | — | 25–35 |
| 2 | 80–100 | — | 45–55 |
| Pre-1 | 120–150 | — | 60–70 |
| 1 | 200–240 | — | 90–110 |

Reference:
- https://www.eiken.or.jp/eiken/en/grades/grade_3/
- https://www.eiken.or.jp/eiken/en/grades/grade_p2/
- https://www.eiken.or.jp/eiken/en/grades/grade_p2plus/
- https://www.eiken.or.jp/eiken/en/grades/grade_2/
- https://www.eiken.or.jp/eiken/en/grades/grade_p1/
- https://www.eiken.or.jp/eiken/en/grades/grade_1/
- https://www.eiken.or.jp/eiken/info/2025/pdf/20250415_info_eiken.pdf

## Optional AI setup (do NOT enable publicly yet)

In an isolated development environment, configure server-side environment variables:

```text
PICSCRIBE_AI_ENABLED=true
OPENAI_API_KEY=<server-side secret>
PICSCRIBE_AI_MODEL=gpt-4.1-mini
PICSCRIBE_AI_CLASS_CODE=<minimum 12-character teacher-distributed secret>
```

Do **not** place the secret in JavaScript, HTML, localStorage, or any Vercel public environment variable. These values were **not** set during this development pass. AI POST requests fail closed (HTTP 503) when unconfigured, and require an exact teacher class code when enabled (otherwise HTTP 401). A GET request reports only whether AI is configured. Never publicly enable this endpoint without proper authentication, shared usage limits and teacher approval.

Before any public rollout: add user authentication or teacher invite limits, a persistent/shared rate limiter (current in-memory limiter does not work reliably across serverless instances), a spending cap/alerts, privacy notice for student essays, a deletion policy, and teacher-reviewed scoring calibration. The AI grades are estimates only and are **not** official EIKEN scores.

## Verify before deployment

1. Open Picture Description → any of the 35 images. Confirm the writing coach appears above the input, Guided and Free modes toggle, and the old Coverage Rate still functions.
2. Type a sentence with a capital letter, verb, detail, and punctuation. Verify focus chips and local checks update. Do not interpret focus chips as grammar correctness.
3. Save a version, edit the sentence, compare, navigate home, then reopen the same image. Confirm draft persists on the same device.
4. Open Academic & Exam. Switch through all six grades. Confirm only valid task types appear and word limits update.
5. In Pre-2 email, verify the reminder for two questions. In Pre-2 Plus summary, verify 25–35 words.
6. Write a response, save a version, edit it, compare, reload, and confirm draft persists.
7. With no AI env configuration, press AI Feedback: an understandable unavailable message should appear without exposing secrets or breaking the page.
8. In a locked-down development environment only, configure AI; test malformed requests, wrong grade/task combinations, incomplete model outputs, and teacher-graded sample essays.
9. Check iPad portrait/landscape, iPhone, desktop, on-screen keyboard, tap targets and screen readers.
10. Confirm `main` has not changed and production deployment is not triggered.

## Notes and limitations

- The revised coverage is still a *content-keyword and sentence-form heuristic*, **not** a grammar score. Multiple synonyms for one visual concept cannot alone inflate the coverage score. The new coach adds scaffolded progress and simple form checks; complex correctness requires AI feedback.
- Local drafts are stored in the browser only, not centrally synchronized. Shared devices should use care. Do not enter real names or other identifying information into the writing box.
- The sample exam prompts are original practice tasks, not reproduced official exam papers.
- The AI endpoint has been syntax-checked and exercised with mocked responses. **Live provider calls and real browser/iPad end-to-end testing were not completed in this pass.**

## November 14 follow-up QA (development branch only)

- JavaScript syntax checks passed for all changed and new modules.
- Mocked picture-engine checks: isolated keyword fragments were capped below 80%; longer supported descriptions progressed, and user-typed HTML was not assigned to `innerHTML`.
- Mocked AI endpoint checks: disabled response, missing/wrong class code, authorized response, and invalid task fields behaved as expected.
- Verified the new modules are included in the branch's `index.html`, in dependency order.
- Verified `main/index.html` still has none of the development modules.
- The CI smoke tests have now been **executed successfully** on GitHub Actions (12 passing, zero failing); browser/iPad end-to-end tests remain outstanding.
- No AI provider key was configured. No real model request, Vercel deployment, or live browser/iPad end-to-end test was performed.
- **Pre-production gates:** test on student iPads; verify original 35 scene data and photo alignment; run Node smoke suite; calibrate AI feedback with teacher scores; set up production-grade authentication, a persistent quota and a fixed spending ceiling; confirm teacher privacy/parental consent policy for minors.
