// tests/utils/authUtils.test.js
import { validateEmail, validatePassword } from '../src/utils/authUtils';

test('validateEmail returns true for valid email', () => {
  const validEmail = 'test@example.com';
  expect(validateEmail(validEmail)).toBe(true);
});

test('validateEmail returns false for invalid email', () => {
  const invalidEmail = 'invalidemail';
  expect(validateEmail(invalidEmail)).toBe(false);
});

test('validatePassword returns true for valid password', () => {
  const validPassword = 'password123';
  expect(validatePassword(validPassword)).toBe(true);
});

test('validatePassword returns false for invalid password', () => {
  const invalidPassword = 'password';
  expect(validatePassword(invalidPassword)).toBe(false);
});
