import auth from "@/firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";



import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createUser = ( email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
          

            if(currentUser){
                setUser(currentUser)
                console.log(currentUser);
                setLoading(false)
            }
        })


        return ()=>{
          unsubscribe()
        }
    }, [])

    const upadateUserProfile = (name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const authInfo = {
        createUser,
        user,
        loading,
        upadateUserProfile,
        signInUser,
        googleSignIn,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;