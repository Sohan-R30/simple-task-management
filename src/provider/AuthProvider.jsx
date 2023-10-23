import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import app from "../utils/firebase/firebase.config";




export const AUTHCONTEXT = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);



  const createUser = (email, password) => {
    setUserLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) => {
    setUserLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleSignIn = () => {
    setUserLoading(false);
    return signInWithPopup(auth, googleProvider);
  }

  const signOutUser = () => {
    setUserLoading(false);
    return signOut(auth);
  }

  const updateUserProfile = name => {
    setUserLoading(false);
    return updateProfile(auth.currentUser, {
        displayName: name,
    });
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
    })

    return () => unsubscribe();

  }, [])
  const authInfo = {
    user,
    userLoading,
    createUser,
    signInUser,
    googleSignIn,
    signOutUser,
    updateUserProfile
  }
  return (<AUTHCONTEXT.Provider value={authInfo}>
    {children}
  </AUTHCONTEXT.Provider>);
};

export default AuthProvider;
