import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCKkuyaeOO48wTvgkZJr0EIF1Jh7kJ3M-0",
  authDomain: "fir-auth-51916.firebaseapp.com",
  projectId: "fir-auth-51916",
  storageBucket: "fir-auth-51916.appspot.com",
  messagingSenderId: "625847773442",
  appId: "1:625847773442:web:a3f3937656a727d4d4fa1b"
};
 let app;
 app = firebase.initializeApp(firebaseConfig)
 const auth=firebase.auth()
 export {auth}
  // initialize firebase
