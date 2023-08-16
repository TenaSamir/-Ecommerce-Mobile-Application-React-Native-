import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import {getAuth} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCKkuyaeOO48wTvgkZJr0EIF1Jh7kJ3M-0",
    authDomain: "fir-auth-51916.firebaseapp.com",
    projectId: "fir-auth-51916",
    storageBucket: "fir-auth-51916.appspot.com",
    messagingSenderId: "625847773442",
    appId: "1:625847773442:web:a3f3937656a727d4d4fa1b"
  };
   

const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
