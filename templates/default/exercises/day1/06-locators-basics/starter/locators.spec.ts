import { test, expect } from '@mobilewright/test';

test.describe('locators: getByTestId vs getByRole/getByText', () => {
  test('the login button can be found by testId', async ({ screen }) => {
    // TODO: open the drawer (openDrawer(screen) from
    // ../../../../support/navigation — handles an already-logged-in drawer)
    // and tap through to Sign In (getByTestId('nav-sign-in'))

    // TODO: find the login button by testId
  });

  test('the login button can also be found by role', async ({ screen }) => {
    // TODO: navigate to Sign In again

    // TODO: find the same button with getByRole('button', { name: ... })
  });

  test('the Sign In screen title can be found by testId', async ({ screen }) => {
    // TODO: navigate to Sign In again

    // TODO: find the screen title by testId
  });

  test('the Sign In screen title can also be found by text', async ({ screen }) => {
    // TODO: navigate to Sign In again

    // TODO: find the same title with getByText
  });
});
