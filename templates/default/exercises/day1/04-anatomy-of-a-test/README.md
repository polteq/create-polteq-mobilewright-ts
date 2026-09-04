# Module 4 — Anatomy of a test

## Exercise

Write the smallest possible test that proves the run/report loop works:
confirm the app is up (the `screen`/`device` fixtures already have Toolshop
launched and foregrounded by the time your test body runs), then close it
with the `device` fixture. No assertions beyond that one visibility check —
this is about the *shape* of a test (`test('name', async ({ fixtures }) =>
{...})`), not about testing anything meaningful yet.

Run it with `npx mobilewright test exercises/day1/04-anatomy-of-a-test/solution`
(or point at `starter/` once you've filled in the TODOs) and check the report.
