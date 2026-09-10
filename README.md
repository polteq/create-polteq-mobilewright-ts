# create-polteq-mobilewright-ts

Scaffolds the Polteq Mobilewright TypeScript training course: two days of hands-on exercises for writing mobile end-to-end tests with [Mobilewright](https://mobilewright.dev/docs/) (Playwright-like API) against the [Practice Software Testing](https://practicesoftwaretesting.com) demo app.

## Installation

No install step is needed — `npm init` fetches and runs the latest published version ([`create-polteq-mobilewright-ts`](https://www.npmjs.com/package/create-polteq-mobilewright-ts)) on demand:

```bash
npm init polteq-mobilewright-ts@latest my-project
```

If you'd rather install the CLI explicitly first, `npx` works the same way:

```bash
npx create-polteq-mobilewright-ts@latest my-project
```

## Usage

```bash
npm init polteq-mobilewright-ts@latest my-project
cd my-project
npm install
npx mobilewright doctor
npx mobilewright test tests/example.spec.ts
```

Or scaffold into the current directory:

```bash
mkdir my-project && cd my-project
npm init polteq-mobilewright-ts@latest .
```

The target directory must be empty (or not yet exist). You'll be prompted for a project name, used as the `name` field in the generated `package.json`.

`npx mobilewright doctor` checks that your Android SDK / emulator (or device) setup is ready before running tests.

## What gets created

The full two-day Polteq Mobilewright training course — exercises, shared helpers, and the WebView playground addendum — exactly as it exists in the source training repo, minus the `mobilewright` packages themselves (attendees add those during Module 3):

```
my-project/
├── .gitignore
├── LICENSE
├── README.md                 # course README: prerequisites, setup, repository layout
├── mobilewright.config.ts    # platform, testDir, bundleId, reporter
├── exercises/                # day1/ and day2/ course modules — see exercises/README.md for the index
├── support/
│   ├── account.ts            # registers a fresh demo account via the practicesoftwaretesting.com API
│   └── navigation.ts         # openDrawer helper, tolerant of a session left over from a prior test
├── tests/
│   └── example.spec.ts       # Module 3/4's starting smoke test — left as-is throughout the course
├── playground/
│   ├── playground.apk        # WebView-only app used by Module 10's WebView addendum (Android)
│   └── playground.zip        # same, iOS Simulator build
├── mobilewright-training-setup-guide.docx
├── package.json
└── tsconfig.json
```

## Scripts in the generated project

| Script | Description |
|---|---|
| `npm run inspect` | Open the Mobilewright inspector against a running device |
| `npm run day1:04:starter` | Run an exercise module's starter test directly |
| `npm run day1:05:starter`, `day1:06:starter`, `day2:09:starter`, `day2:10:webview:starter`, `day2:12:starter`, `day2:15:starter` | Same, for the other modules with starter scripts |

`mobilewright` and `@mobilewright/test` are deliberately **not** included as dependencies — attendees add them in Module 3 of the course. Any spec, including ones without an `npm run` script, can be run directly with `npx mobilewright test <path> [--grep starter|solution]`.

## Writing tests

Follow the course: work through `exercises/` day by day (see `exercises/README.md` for the index), using `support/account.ts` and `support/navigation.ts` as the shared helpers referenced throughout.

## Releasing

Add an entry to `CHANGELOG.md` for the new version, then:

```bash
npm version patch   # or minor/major — commits, tags, and pushes (via postversion)
```

Pushing the tag triggers [`.github/workflows/publish.yml`](.github/workflows/publish.yml), which publishes to npm and creates the matching GitHub release (using the `CHANGELOG.md` section for that version as the release notes). Publishing uses npm's [Trusted Publisher](https://docs.npmjs.com/trusted-publishers) (OIDC) — no npm token/secret needed. On [the package's npmjs.com settings](https://www.npmjs.com/package/create-polteq-mobilewright-ts/access), add a Trusted Publisher pointing at this GitHub repo and the `publish.yml` workflow file.

Template files live in `templates/default/`. Two files get special handling at scaffold time:

- `_gitignore` → renamed to `.gitignore` (npm strips real `.gitignore` files from published tarballs)
- `package.json.template` → renamed to `package.json`, with `__PROJECT_NAME__` replaced by the prompted project name
