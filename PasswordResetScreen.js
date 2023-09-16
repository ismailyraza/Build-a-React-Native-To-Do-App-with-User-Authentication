import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { auth } from '@react-native-firebase/auth';

const PasswordResetScreen = () => {
  const [email, setEmail] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleResetPassword = async () => {
    try {
      await auth().sendPasswordResetEmail(email);
      setResetSuccess(true);
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
      <Button title="Reset Password" onPress={handleResetPassword} />
      {resetSuccess && (
        <Text style={{ color: 'green' }}>
          Password reset instructions sent to your email.
        </Text>
      )}
      {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
    </View>
  );
};

export default PasswordResetScreen;
