

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from './AuthContext';

const ProfileScreen = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    // Optionally, you can navigate the user to the login screen or perform any other actions after logout.
  };

  return (
    <View>
      <Text>Welcome, {user ? user.email : 'Guest'}!</Text>
      {user && <Button title="Logout" onPress={handleLogout} />}
    </View>
  );
};

export default ProfileScreen;
