
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from './AuthContext';

const ExampleScreen = () => {
  const { user, login, logout } = useAuth();

  return (
    <View>
      {user ? (
        <>
          <Text>Welcome, {user.email}!</Text>
          <Button title="Logout" onPress={logout} />
        </>
      ) : (
        <>
          <Text>You are not logged in.</Text>
          <Button title="Login" onPress={() => login('user@example.com', 'password')} />
        </>
      )}
    </View>
  );
};

export default ExampleScreen;
