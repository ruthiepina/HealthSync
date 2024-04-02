// utils/authUtils.js

// Regular expression pattern for validating email addresses
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Function to validate an email address
export function validateEmail(email) {
  // Use the test method of the regular expression to check if the email matches the pattern
  return emailRegex.test(email);
}

// Function to validate a password
export function validatePassword(password) {
  // Check if the password meets certain criteria, e.g., length
  return password.length >= 8; // Example: Password must be at least 8 characters long
}
