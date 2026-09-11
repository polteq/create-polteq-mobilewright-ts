# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- Exercise READMEs used "confirmed against a live device" / "confirmed live" / "confirmed via adb logcat" phrasing throughout, describing how a fact was checked rather than the fact itself. These READMEs ship straight into every scaffolded project, so that framing has no use for attendees. Reworded to state the same facts plainly.

## [1.0.5] - 2026-09-10

### Fixed

- Module 6's README (`exercises/day1/06-locators-basics/README.md`) named the login button's exact testID in prose, spoiling the "find it yourself with `mobilewright inspect`" exercise that now sits right before it. Describes the gotcha (non-obvious naming) without giving away the string.

- Several exercise READMEs carried commentary about how the material itself was built or revised ("this round", "originally X swapped for Y", "the original target", "new exercise") instead of facts attendees or the trainer need. Also updated Module 9's opening framing to match Module 6 now teaching `mobilewright inspect` before its own exercise.

- The top-level README's "Scripts in the generated project" table listed only five of the seven scripts actually in `package.json.template`, missing `day2:10:webview:starter` and `day2:12:starter`.

## [1.0.4] - 2026-09-10

### Fixed

- The Module 5 starter test (`exercises/day1/05-fixtures-and-deep-links/starter/fixtures-and-deep-link.spec.ts`) told attendees to "fill in email + password and tap the login button" without naming the locators, and Module 6 (locators) and Module 9 (`mobilewright inspect`) both come later in the course, so there was no way to find them yet. The TODO now names `email-input`, `password-input`, and `login-button` directly.

## [1.0.3] - 2026-09-10

### Added

- The WebView bridging addendum in Module 10 (`exercises/day2/10-cross-platform-config/webview/`) is now a real attendee exercise instead of trainer-only reference material. Added `webview/starter/webview-login.spec.ts` (TODO-driven, mirrors the existing `webview/solution/`) and a `day2:10:webview:starter` script in the scaffolded `package.json`.

### Fixed

- `exercises/day2/12-custom-fixture` already shipped a `starter/` folder, but the scaffolded `package.json` had no matching `day2:12:starter` script. Added it.

## [1.0.2] - 2026-09-10

### Fixed

- The CLI's own "Next steps" output printed `npm test` as the final command, but the scaffolded `package.json` has no `test` script, so that command failed. It now prints `npx mobilewright test tests/example.spec.ts`, the actual smoke test path documented in the README and in `exercises/day1/03-setup/README.md`.

## [1.0.1] - 2026-09-04

### Fixed

- Added a `.gitkeep` placeholder to the empty `exercises/day2/10-cross-platform-config/webview/` directory. npm's tarball packing silently drops directories with zero files, so this directory was missing from scaffolds generated via the published package (it only worked when running the CLI directly against the template source).

## [1.0.0] - 2026-09-04

### Added

- Initial release of the Polteq Mobilewright (mobile end-to-end) TypeScript scaffold CLI.

[1.0.5]: https://github.com/polteq/create-polteq-mobilewright-ts/releases/tag/v1.0.5
[1.0.4]: https://github.com/polteq/create-polteq-mobilewright-ts/releases/tag/v1.0.4
[1.0.3]: https://github.com/polteq/create-polteq-mobilewright-ts/releases/tag/v1.0.3
[1.0.2]: https://github.com/polteq/create-polteq-mobilewright-ts/releases/tag/v1.0.2
[1.0.1]: https://github.com/polteq/create-polteq-mobilewright-ts/releases/tag/v1.0.1
[1.0.0]: https://github.com/polteq/create-polteq-mobilewright-ts/releases/tag/v1.0.0
