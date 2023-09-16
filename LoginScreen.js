
import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('Register'); // Navigate to the Register screen
  };

  return (
    <View>
      {/* Your login form */}
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default LoginScreen;
