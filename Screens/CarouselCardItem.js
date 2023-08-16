import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width +90
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.4)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
    
      <Image 
        source={{ uri: item.imgUrl }}z
        style={styles.image}
      />
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#9AC5F4',
    borderRadius: 8,
    width: ITEM_WIDTH,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
    
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem