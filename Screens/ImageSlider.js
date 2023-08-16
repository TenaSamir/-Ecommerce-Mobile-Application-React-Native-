import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from "react-native";
import Slideshow from "react-native-image-slider-show";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const dataSource = [
  {
   
    url:
      "https://cdn.shopify.com/s/files/1/0506/5736/2089/files/MAY-14-ML-HB2-EN---001.jpg?v=1685542145"
  },
  {
   
    url:
    srcset="https://cdn.shopify.com/s/files/1/0506/5736/2089/files/UND-699-HB2-EN---002.jpg?v=1684848086"
  },
  {
  
    
    url:
      "https://cdn.shopify.com/s/files/1/0506/5736/2089/files/SS-HB2-EN-02---001.jpg?v=1686571968"
  }
];

const ImageSlider = ({navigation}) => {
  const [position, setPosition] = useState(0)

  useEffect(()=>{
    const toggle = setInterval(() => {
      setPosition(position === dataSource.length - 1 ? 0 : position + 1);
    }, 3000);

    return () => clearInterval(toggle);
  })
  
  return (
    <View style={styles.Image}>
      <Slideshow position={position} dataSource={dataSource} />
    </View>
  );
};

const styles = StyleSheet.create({
  Image:{
    marginTop:'1%'
  }
});

export default ImageSlider;

