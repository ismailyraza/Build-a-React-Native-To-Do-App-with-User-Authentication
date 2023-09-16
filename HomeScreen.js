
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const goToDetails = () => {
    navigation.navigate('Details'); // Navigate to the "Details" screen
  };

  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Go to Details" onPress={goToDetails} />
    </View>
  );
};

export default HomeScreen;
