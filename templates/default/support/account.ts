// account.ts
export async function registerFreshAccount() {
  const stamp = Date.now();
  const email = `attendee.${stamp}@example.com`;
  const password = 'Training123';
  const body = JSON.stringify({
    first_name: 'Mobilewright',
    last_name: 'Attendee',
    email,
    password,
    address: '1 Test Street',
    city: 'Amersfoort',
    country: 'Netherlands',
    dob: '1990-01-01',
  });

  // A full classroom hitting this one public demo API at once is a real
  // flakiness risk that has nothing to do with an attendee's own test code,
  // so a transient network error or 5xx gets one retry after a short delay
  // before this actually fails the test.
  for (let attempt = 1; attempt <= 2; attempt++) {
    let res: Response;
    try {
      res = await fetch('https://api-v4.practicesoftwaretesting.com/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      });
    } catch (err) {
      if (attempt === 2) throw err;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      continue;
    }

    if (res.ok) {
      return { email, password };
    }

    if (res.status < 500) {
      throw new Error(`Registration failed: ${res.status} ${await res.text()}`);
    }

    if (attempt === 2) {
      throw new Error(`Registration failed: ${res.status} ${await res.text()}`);
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  throw new Error('Registration failed after retry');
}
