import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
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
    // forgot password
    const sendPassResetEmailFunc = (email) => {
   
    return sendPasswordResetEmail(auth, email);
  };
    // log out 
    const signoutUserFunc = () => {
   
    return signOut(auth);
  };
    
    const authInfo={
    user,
    setUser,
    creatUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    signInWithEmailAndPasswordFunc,
    googleSignInFunc,
    sendPassResetEmailFunc,
    signoutUserFunc
    }
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      console.log(currUser);
      setUser(currUser);
      ;
    });

    return () => {
      unsubscribe();
    };
  }, []);
    
    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;
