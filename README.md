# create-polteq-mobilewright-ts

Scaffolds the Polteq Mobilewright TypeScript training course: two days of hands-on exercises for writing mobile end-to-end tests with [Mobilewright](https://mobilewright.dev/docs/) (Playwright-like API) against the Polteq Gadget Shop app. The app itself is not included: attendees download it into `gadgetshop/` (see `gadgetshop/README.md` in the generated project).

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
curl -L -o gadgetshop/gadgetshop.apk https://gadget-shop.polteq-testing.com/downloads/polteq-gadget-shop.apk
npx mobilecli apps install gadgetshop/gadgetshop.apk
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

The full two-day Polteq Mobilewright training course: starter files for every exercise and the shared helpers. Reference solutions and the Gadget Shop app are not included. `package.json` pins `mobilewright` and `@mobilewright/test` to the release the course was built against, so `npm install` gives every attendee the same version:

```
my-project/
├── .gitignore
├── LICENSE
├── README.md                 # course README: prerequisites, setup, repository layout
├── mobilewright.config.ts    # platform, testDir, bundleId, reporter
├── exercises/                # day1/ and day2/ course modules — see exercises/README.md for the index
├── support/
│   ├── account.ts            # registers a fresh Gadget Shop account via the shop's mobile API
│   └── navigation.ts         # openAccountAsGuest, keyboard, iOS dialog, back and WebView helpers
├── tests/
│   └── example.spec.ts       # Module 3/4's starting smoke test — left as-is throughout the course
├── gadgetshop/
│   └── README.md             # where the downloaded Gadget Shop app goes, and how to install it
├── mobilewright-training-setup-guide.docx
├── package.json
└── tsconfig.json
```

## Scripts in the generated project

| Script | Description |
|---|---|
| `npm run inspect` | Open the Mobilewright inspector against a running device |
| `npm run day1:04:starter` | Run an exercise module's starter test directly |
| `npm run day1:05:starter`, `day1:06:starter`, `day1:07:starter`, `day2:09:starter`, `day2:10:webview:starter`, `day2:12:starter`, `day2:15:starter`, `day2:16:starter` | Same, for the other modules with starter scripts |

Any spec, including ones without an `npm run` script, can be run directly with `npx mobilewright test <path> [--grep starter|solution]`.

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
