import * as React from 'react';
import { View, Text, Button,TextInput,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Women=({navigation})=> {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'#9C46A9'}}>
      <Text>Hello it's Women</Text>

    </View>
  );
}
export default Women