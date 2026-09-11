# Module 7: Soft assertions

## Exercise

One file, two tests, both against the product catalog that's been on
screen since Module 4's very first test, so no new locators are needed:
just `getByText('Products')` and `getByTestId('product-title')`, both
already used since Module 4 and Module 6.

1. **`collects every soft failure instead of stopping at the first one`**:
   three checks with `expect.soft()` against the catalog: the "Products"
   heading is visible, at least one product title is visible, and one
   deliberately wrong check (there are zero products). A fourth, regular
   assertion follows the wrong one. Run it and read the report: the two
   locator-based checks each show up as their own step, the plain
   count() check doesn't get one, but the failure summary at the end
   lists all three, plus the regular assertion that follows them. The
   test still ran to the end.

2. **`a regular expect() stops the test at the first failure`**: the same
   deliberately wrong check, but with a regular `expect()` instead of
   `expect.soft()`, followed by one more assertion. Run it and notice the
   last assertion never executes: a regular `expect()` still throws and
   stops the test immediately, exactly like it always has.

The point of this exercise is the *behavior* difference between
`expect.soft()` and `expect()`, not a new locator skill.

`expect.soft()` is new in `@mobilewright/core` 0.0.58, it doesn't exist in
any version before that. It mirrors Playwright's own `expect.soft()`
directly: the same matchers as regular `expect()`, only a failure gets
recorded and the test keeps going instead of throwing right away.

This scaffold doesn't include a reference solution for this exercise. Run
`npm run day1:07:starter` once you've filled in the TODOs, and compare
both tests' reports side by side.
