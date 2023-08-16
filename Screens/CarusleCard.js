import React from 'react'
import { TouchableHighlight, View,TouchableOpacity,Pressable,ToggleButton ,StyleSheet,Text} from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarouselData from './CarouselData'; 
import LogIn from './LogInScreen';

const CarouselCard = ({navigation}) => {
  const isCarousel = React.useRef(null)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
         
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={CarouselData}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
       
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
   
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    
  },
  link: {
    fontWeight: 'bold',
    
  },
  
 
      input: {
          borderColor: "gray",
          width: "80%",
          borderWidth: 1,
          borderRadius: 10,
          padding: 15,
         
      },LogInButton:{
     
         
         
          borderRadius: 5,
          paddingHorizontal:37,
          paddingVertical:12,
          backgroundColor:'#99ccff',
          marginBottom:5
      },
});
export default CarouselCard