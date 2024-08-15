import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.comfig";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const axiosPublic = useAxiosPublic();

  const provider = new GoogleAuthProvider();

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // user sing in
  const singin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user log out
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // user ar name & photo use korar jonno using
  const updateUseProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const googlelogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // current user
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      // jwt
      if (user) {
        // get token and store client
        const usersInfo = {
          email: user.email,
        };
        axiosPublic.post("/jwt", usersInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            // console.log(res.data.token);
          }
          setLoading(false);

        });
      } else {
        //
        localStorage.removeItem("access-token");
        setLoading(false);

      }
      console.log("current user", user);
    });
    return () => {
      return unsubcribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    singin,
    logout,
    updateUseProfile,
    googlelogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
