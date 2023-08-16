// In App.js in a new project

import * as React from 'react';
import { View, Text, Button,TextInput,StyleSheet,TouchableOpacity,Image, ImageBackground } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {useState} from 'react' ;
import { useEffect } from 'react';
import { auth } from '../firebase';
import firebase from '../firebase';

import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from 'firebase/auth'
import { useAuth } from '../Context/AuthContext';
const image = {uri: 'https://e1.pxfuel.com/desktop-wallpaper/711/10/desktop-wallpaper-the-iphone-x-xs-thread-border-light.jpg'};

const LogIn=({navigation})=> {
const {logIn}=useAuth();
const [email,setEmail]=useState('');
const [password,setPassword]=useState();
const handleLogIn=()=>{
  logIn(email,password)
  navigation.navigate('Home')


}

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'white' }}>

         <Image style={{height: 270,width: 200,marginBottom:'-12%' }} source={require('../assets/logobb.png')}/>
       <TextInput style={styles.input} value={email} placeholder="Enter your Email"  keyboardType="email-address" onChangeText={text=>{setEmail(text)}}/>
       <TextInput style={styles.input} value={password} placeholder="Enter your Password"  secureTextEntry={true} onChangeText={text=>{setPassword(text)}}/>
      
      {/* Log In Button */}

      <TouchableOpacity style={styles.LogInButton} onPress={handleLogIn}  >
      <Text style={styles.text} >Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.LogInButton} onPress={()=>{navigation.navigate('Register')}}  >
      <Text style={styles.text} >Sign up</Text>
      </TouchableOpacity>
       {/* Sign Up Button */}
       
      <View style={styles.row}>
        <Text >Don’t have an account? </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
          <Text style={styles.link}>Sign up</Text>
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
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    forgot: {
      fontSize: 13,
      
    },
    link: {
      fontWeight: 'bold',
      color:'#9BCDD2'
    },text:{
color:'white'
    }
    ,
   
        input: {
            width: "80%",
            borderWidth: 1,
            borderRadius: 10,
            padding: 15,
            marginBottom:'5%',
            borderColor:'#FF7F00'
           
        },LogInButton:{
       
           
           
            borderRadius: 5,
            paddingHorizontal:37,
            paddingVertical:12,
            backgroundColor:'#9BCDD2',
            marginBottom:5
        },
        image: {
    flex: 1,
    width:'100%',
    height:'100%',
    alignItems: 'center', justifyContent: 'center'
  }
  });

  
export default LogIn;

// export default class ProductList extends React.Component {
// constructor(props){
//   super(props);
//   this.state = {apiInfo: 'default'};
// }
//     componentDidMount() {
//       const that = this;
//       fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
//           .then(function(response) {
//               return response.json();
//           })
//           .then(function(jsonData) {
//               return JSON.stringify(jsonData);
//           })
//           .then(function(jsonStr) {
//               that.setState({ apiInfo: jsonStr });
//               console.log(jsonStr);
//           });
//   }
 
//     componentWillUnmount() {
//         // make fetch request
  
      
//     }
   
//     render() {
//       return (
//         <View>
//         <Button title='button' onClick={this.fetchUsers}/>
       
//             <Text>
//               {this.state.apiInfo}
//             </Text>
//             </View>
//       )

//   }
// }