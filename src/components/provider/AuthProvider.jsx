import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.comfig";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    // create user 
    const createUser = (email,password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    // user sing in 
    const singin = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // user log out
    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    // user ar name & photo use korar jonno using
    const updateUseProfile = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    // current user 
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth,user =>{
            setUser(user);
            setLoading(false);
            console.log('current user',user);
        })
        return () =>{
            return unsubcribe();
        }
    }, []);

    const authInfo ={
        user,
        loading,
        createUser,
        singin,
        logout,
        updateUseProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;