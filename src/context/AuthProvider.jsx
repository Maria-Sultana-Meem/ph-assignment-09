import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
const googleProvider = new GoogleAuthProvider()

    //  create email passwrod sign up
    const creatUserWithEmailAndPasswordFunc=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
     const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    })
  };
//   email password sign in
   const signInWithEmailAndPasswordFunc = (email, password) => {
   
    return signInWithEmailAndPassword(auth, email, password);
  };
    // google sign in 

    const googleSignInFunc =()=>{
    return signInWithPopup(auth,googleProvider)

    }
    
    
    const authInfo={
    user,
    setUser,
    creatUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    signInWithEmailAndPasswordFunc,
    googleSignInFunc
    }
    
    
    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;
