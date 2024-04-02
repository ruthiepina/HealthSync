// Import necessary testing utilities
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

// Test case to ensure that the login form renders correctly
test('renders login form', () => {
  // Render the LoginForm component
  const { getByPlaceholderText, getByText } = render(<LoginForm />);
  
  // Find form elements by their placeholder text or content
  const emailInput = getByPlaceholderText('Email');
  const passwordInput = getByPlaceholderText('Password');
  const loginButton = getByText('Login');

  // Assert that form elements are present in the rendered component
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});

// Test case to simulate submitting the login form with valid credentials
test('submits form with valid credentials', () => {
  // Mock login function
  const mockLogin = jest.fn();

  // Render the LoginForm component with mockLogin function passed as a prop
  const { getByPlaceholderText, getByText } = render(<LoginForm onSubmit={mockLogin} />);
  
  // Find form elements by their placeholder text or content
  const emailInput = getByPlaceholderText('Email');
  const passwordInput = getByPlaceholderText('Password');
  const loginButton = getByText('Login');

  // Simulate user input by changing input values
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  // Simulate form submission by clicking the login button
  fireEvent.click(loginButton);

  // Assert that mockLogin function was called with the correct credentials
  expect(mockLogin).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123',
  });
});
