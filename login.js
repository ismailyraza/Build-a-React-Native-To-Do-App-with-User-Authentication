// Auth/Login.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import authService from '../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    authService.login(email, password);
    // Handle authentication logic here
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
