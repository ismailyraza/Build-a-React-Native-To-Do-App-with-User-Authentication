

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { AuthProvider } from './AuthContext'; // Your authentication context
import LoginScreen from './LoginScreen';

// Mock your authentication context (use jest.mock if needed)
jest.mock('./AuthContext', () => ({
  useAuth: () => ({
    login: jest.fn(),
  }),
}));

describe('LoginScreen', () => {
  it('should call login function when the login button is pressed', () => {
    const { getByTestId } = render(
      <AuthProvider>
        <LoginScreen />
      </AuthProvider>
    );

    const loginButton = getByTestId('login-button');

    fireEvent.press(loginButton);

    // You can add assertions here to check if the login function was called correctly.
  });

  // Add more test cases for your login screen as needed
});
