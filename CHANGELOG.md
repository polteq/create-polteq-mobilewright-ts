# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2026-09-04

### Fixed

- Added a `.gitkeep` placeholder to the empty `exercises/day2/10-cross-platform-config/webview/` directory. npm's tarball packing silently drops directories with zero files, so this directory was missing from scaffolds generated via the published package (it only worked when running the CLI directly against the template source).

## [1.0.0] - 2026-09-04

### Added

- Initial release of the Polteq Mobilewright (mobile end-to-end) TypeScript scaffold CLI.

[1.0.1]: https://github.com/polteq/create-polteq-mobilewright-ts/releases/tag/v1.0.1
[1.0.0]: https://github.com/polteq/create-polteq-mobilewright-ts/releases/tag/v1.0.0
