import { test, expect } from './fixtures';
import { registerFreshAccount } from '../../../../support/account';

test('logs in through the LoginScreen object, no raw locators in the test', async ({ /* TODO: request your fixture here */ }) => {
  const { email, password } = await registerFreshAccount();

  // TODO: call .goto(), then .login(email, password), then assert
  // .productsHeading is visible — everything through the Screen Object, no
  // raw locators in this test.
});
