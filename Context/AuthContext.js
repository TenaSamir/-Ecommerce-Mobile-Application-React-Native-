import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword ,onAuthStateChanged,signOut,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext=createContext();
const AuthProvider=({children})=>{
   
    const signUp=(email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)
    };
    const logIn=(email,password)=>{
      return  signInWithEmailAndPassword(auth,email,password)
    }
   const logOut=()=>{
    alert("Bye Bye   "+currentUser.email)
    return signOut(auth);
    
   }
    useEffect(()=>{
      const unSubscribe=  onAuthStateChanged(auth,(user)=>{
        setCurrentUser(user)
        setLoading(false)
    })
        return()=>{
            unSubscribe();
        }
           
        
    },[])
return <AuthContext.Provider value={{signUp,logOut,logIn}}>
    {children}
</AuthContext.Provider>
}
export default AuthProvider
export const useAuth=()=>{
return useContext(AuthContext)
}