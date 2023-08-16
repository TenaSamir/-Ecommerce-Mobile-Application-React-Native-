import React from 'react';
import Navigation from '../AwesomeProject/Components/Navigation';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'react-native-gesture-handler';
import Constants from 'expo-constants';
console.log(Constants.systemFonts);

const App=()=> {
    return (
      <Navigation/>
      );
  }
export default App;