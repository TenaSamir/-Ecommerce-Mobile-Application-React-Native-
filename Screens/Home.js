import React from 'react'
import { TouchableHighlight, View,TouchableOpacity,ScrollView,TouchableHighlightBase ,StyleSheet,Text,Image, FlatList, SafeAreaView} from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarouselData from './CarouselData'; 
import LogIn from './LogInScreen';
import CarouselCard from './CarusleCard';
import { Button } from 'react-native-paper';
import ImageSlider from './ImageSlider';
import Women from './WomenScreen';
import { useAuth } from '../Context/AuthContext';

const Home = ({navigation}) => {
  const { currentUser, logOut } = useAuth();

  
  handleLogOut=()=>{
logOut();
navigation.navigate('LogIn')
 }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'light yellow '}}>
      <ScrollView>
        <ImageSlider />
        <Text style={{ alignSelf: 'center', justifyContent: 'center',
    color: "#222",
    fontSize: 28,
   
    paddingTop: 20}}>New Arrivals</Text>
       <CarouselCard/>
      
       <Text>Email: {currentUser && currentUser.email}</Text>

<TouchableOpacity onPress={()=>{navigation.navigate('OPenPdf')}}><Text>Home</Text></TouchableOpacity>
<TouchableOpacity onPress={handleLogOut}><Text>Log Out</Text></TouchableOpacity>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
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
          marginBottom:'5%'
         
      },LogInButton:{
     
         
         
          borderRadius: 5,
          paddingHorizontal:37,
          paddingVertical:12,
          backgroundColor:'#FAF0E4',
          marginBottom:5
      },
});
export default Home