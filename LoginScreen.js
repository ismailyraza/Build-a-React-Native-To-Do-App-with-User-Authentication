import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { auth } from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      // User login successful, you can navigate to the next screen.
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
    </View>
  );
};

export default LoginScreen;
