# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[1.0.1]: https://github.com/polteq/create-polteq-mobilewright-ts/releases/tag/v1.0.1
[1.0.0]: https://github.com/polteq/create-polteq-mobilewright-ts/releases/tag/v1.0.0
