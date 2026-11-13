# PicScribe Guided Writing + EIKEN Studio (development only)

Development branch: \`feature/picscribe-coach-eiken-20261113\`  
This branch intentionally does **not** update \`main\`, trigger a production deployment, or enable the AI endpoint.

## Added

- \`js/writing_coach.js\` and \`css/writing_coach.css\`: Guided/Free modes for the existing 35 picture-description scenes; four focus milestones (subject, action, setting, mood); context-sensitive hints from each scene's existing data; light, clearly labeled form checks; on-device autosave; save-and-compare revisions; optional on-demand AI feedback.
- \`js/eiken_practice.js\` and \`css/eiken_practice.css\`: EIKEN writing practice for 3, Pre-2, Pre-2 Plus, 2, Pre-1, 1; task-specific original sample prompts for opinion, email, and summary formats; word-count targets, scaffolding, on-device drafts and comparisons.
- \`api/writing-feedback.js\`: opt-in, server-side AI feedback with structured JSON output, bounded inputs, origin filtering, light in-instance throttling, and a disabled-by-default safety switch.
- \`js/main.js\`: fix a dictionary modal null-element error, avoid untrusted HTML in suggestions/explanation, and remove unsubstantiated corpus-frequency claims.
- \`index.html\`: load the new modules and styles.

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

\`\`\`text
PICSCRIBE_AI_ENABLED=true
OPENAI_API_KEY=<server-side secret>
PICSCRIBE_AI_MODEL=gpt-4.1-mini
\`\`\`

Do **not** place the secret in JavaScript, HTML, localStorage, or any Vercel public environment variable. These values were **not** set during this development pass. API calls fail closed (HTTP 503) when not configured.

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
10. Confirm \`main\` has not changed and production deployment is not triggered.

## Notes and limitations

- Existing coverage remains a *keyword coverage heuristic*, not a grammar score. The new coach adds scaffolded progress and simple form checks; complex correctness requires AI feedback.
- Local drafts are stored in the browser only, not centrally synchronized. Shared devices should use care. Do not enter real names or other identifying information into the writing box.
- The sample exam prompts are original practice tasks, not reproduced official exam papers.
- The AI endpoint has been syntax-checked and exercised with mocked responses. **Live provider calls and real browser/iPad end-to-end testing were not completed in this pass.**
