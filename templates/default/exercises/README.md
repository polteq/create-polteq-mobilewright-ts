# Mobilewright course exercises

Hands-on material for the two-day Mobilewright course, organized by module number
from the course skeleton. Every folder that corresponds to a labelled
`Exercise:` in the skeleton has a `starter/` (TODOs for attendees) to work
from. This public scaffold doesn't ship any `solution/` answer keys
anywhere — check your work against the course material or ask your
trainer. Folders that correspond to trainer-demoed or fixture-evolution
content have no files here at all, that material is demoed live from the
course's own private repo. Module 9's Inspector exercise has a `starter/`
scaffold (`inspector-discovery.spec.ts`) and, like everything else here, no
answer key either way, deliberately — the correct locators depend on what
each attendee's own Inspector session finds, not a fixed answer.

Shared helpers live in `/support` at the repo root (currently
`account.ts`, used from Module 5 onward to register a fresh Toolshop account via
the API instead of the UI — it retries once on a network error or 5xx, since a
full room hitting one public demo API at once is a real risk during a live
session — and `navigation.ts`, the `openDrawer()` helper used everywhere a test
needs to reach Sign In or Register).

The root `mobilewright.config.ts` and `tests/example.spec.ts` are untouched —
they're Module 3/4's starting point and stay the live-demo working setup.
`playground/playground.apk` (Android) and `playground/playground.zip` (iOS
Simulator) at the repo root are a second app (the mobile-next playground app,
bundle id `com.mobilenext.playground` on both platforms) used by
Module 10's WebView and GPS location mocking addenda, since Toolshop has
neither a WebView nor any location-aware screens to test against.

| Day | Module | Folder | Kind |
|---|---|---|---|
| 1 | 03 — Setup | `day1/03-setup` | Walkthrough (no starter/solution split) |
| 1 | 04 — Anatomy of a test | `day1/04-anatomy-of-a-test` | Exercise |
| 1 | 05 — Fixtures & deep links | `day1/05-fixtures-and-deep-links` | Exercise |
| 1 | 06 — Locators, part 1 | `day1/06-locators-basics` | Exercise |
| 1 | 07 — Soft assertions | `day1/07-soft-assertions` | Exercise |
| 2 | 09 — Locators, part 2 (Inspector, refinement, scrolling & back button) | `day2/09-locators-refinement` | Exercise |
| 2 | 10 — Cross-platform config | `day2/10-cross-platform-config` | Reference only (config) + Exercise (`webview/` bridging + `location/` GPS mocking addenda) |
| 2 | 12 — Custom fixture | `day2/12-custom-fixture` | Exercise |
| 2 | 13 — Composed fixtures & options | `day2/13-composed-fixtures` | Reference only |
| 2 | 15 — Screen Object refactor | `day2/15-screen-object-refactor` | Exercise |
| 2 | 16 — Fixtures return Screen Objects | `day2/16-fixtures-return-screen-objects` | Exercise |

Modules 11 and 17 (a short TypeScript generics callout before custom fixtures,
and config/CI respectively) are slide-only in the skeleton — no code folder
here, since they don't correspond to a standalone exercise.
