import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './AuthContext';
import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
