import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { initializeApp } from '@react-native-firebase/app';
import App from './App';


import firebaseConfig from './firebaseConfig';


initializeApp(firebaseConfig);


AppRegistry.registerComponent(appName, () => App);
