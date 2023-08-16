// In App.js in a new project

import * as React from 'react';
import { View, Text, Image,TextInput,StyleSheet,TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { auth } from '../firebase';
import { useState,useRef } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useAuth } from '../Context/AuthContext';
import { Button, Card } from 'react-native-paper';
import * as imagePicker from'expo-image-picker'
import { useEffect } from 'react';
import { IconButton } from 'react-native-paper';
import {ref,getBytes,getDownloadURL, uploadBytes} from 'firebase/storage';
import {storage} from'../firebase'
import {db} from '../firebase'
import { getDatabase, ref2, set } from "firebase/database";

const Register=({navigation})=>{ 
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [passwordConfirmation,setPasswordConfirmation]=useState('');
const [profilePic,setProfilePic]=useState('https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg');
const [hasGallaryPermission,setGallaryPermision]=useState(null);
const currentUser=useAuth();
useEffect(()=>{
  (async()=>{
    const gallaryStatu=await imagePicker.requestMediaLibraryPermissionsAsync();
    setGallaryPermision(gallaryStatu.status==='granted')
  })();
},[currentUser]);
const pickProfile=async()=>{
  let result=await imagePicker.launchImageLibraryAsync({
    mediaTypes:imagePicker.MediaTypeOptions.Images,
    allowsEditing:true,
    aspect:[4,3],
    quality:1
  })
  console.log(result)
  if(!result.canceled)
  setProfilePic(result.uri)
 

}
if(hasGallaryPermission===false)
return( alert('no premission access'))
const handleSignUp = () => {
  navigation.navigate('Home')
    auth.createUserWithEmailAndPassword(email, password).then(userCredentials=>{
      const user = userCredentials.user;
     
     alert('Nice to meet you Dong Kim ^^')
     const imageRef=ref(storage,"image")
     uploadBytes(imageRef,profilePic).then((url)=>{
       getDownloadURL(imageRef).then( set(ref2(db, 'users/' + userId), {
    userName:user.email,
        profile_picture : url
      }))
     })
     
    })
    

 }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'white' }}>
             <Card style={{height:500,width:300,backgroundColor:'#FFFFFF',shadowColor:'#070073'}}>
   
       <Image style={{ height: 100,width: 100,borderRadius:120,borderColor:'#C4C4AB',borderWidth:2,marginTop:'15%',alignSelf:'center',marginBottom:'-20%'}} source={{uri:profilePic}}/>

       <IconButton icon="camera"color={Colors.red500}style={{marginLeft:'30%',marginTop:'10%',marginBottom:'12%'}} size={20}onPress={() => pickProfile()}/>
       <Text style={{color:'gray',fontSize:14,marginLeft:'12%'}}>Email:</Text>

       <TextInput style={styles.firstInput}  TextColor="gray" value={email}  onChangeText={text=>setEmail(text)}/>
       
       <Text style={{color:'gray',fontSize:14,marginLeft:'12%'}}>Password:</Text>

       <TextInput style={styles.input}   value={password} secureTextEntry={true}TextColor="gray" onChangeText={text=>setPassword(text)} />
       <Text style={{color:'gray',fontSize:14,marginLeft:'12%'}}>Confirm Password:</Text>

       <TextInput style={styles.input} value={passwordConfirmation}  secureTextEntry={true}TextColor="gray" onChangeText={text=>setPasswordConfirmation(text)} />
      {/* Log In Button */}
      <TouchableOpacity style={styles.rigesterButton} onPress={handleSignUp} >
      <Text style={{color:'white',alignSelf:'center',fontSize:24}}>Register</Text>
      </TouchableOpacity>
       {/* Sign Up Button */}
       </Card>

      <View style={styles.row}>
        <Text>Have account already ? </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('LogIn')}}>
          <Text style={styles.link}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 
const styles = StyleSheet.create({
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 24,
    },
    firstInput:{
      borderWidth: 2,
height:'10%',
      marginLeft:'10%',
      borderColor: '#AAC8A7',
      width: "80%",
      borderRadius: 10,
      padding: 15,
      marginBottom:'5%',
      opacity:0.6
    },
    row: {
      marginBottom:'10%',
      marginTop:'15%',
      display: 'flex',
      justifyContent:'center',
      flexDirection: 'row',
      marginLeft:'4%'
    },
    forgot: {
      fontSize: 13,
      
    },
    link: {
      fontWeight: 'bold',
      color:'#AAC8A7'
      
    },
    
   
        input: {
          height:'10%',
            borderColor: '#AAC8A7',
            width: "80%",
            borderWidth: 2,
            borderRadius: 10,
            padding: 15,
            marginBottom:'5%',
            opacity:0.6,      marginLeft:'10%',


          },
        inputName:{
         
          borderColor: '#AAC8A7',
            width: "38%",
            borderWidth: 1,
            borderRadius: 10,
            padding: 12,
            marginRight:'5%',
            marginBottom:'5%',
            opacity:0.6
            
        },
        rigesterButton:{
            marginBottom:8,
            marginTop:'7%',
            borderRadius: 5,
            paddingHorizontal:37,
            paddingVertical:12,
            backgroundColor:'#AAC8A7',color:'white'

        },
  });

  
  export default Register;
