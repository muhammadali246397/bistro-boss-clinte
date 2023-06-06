import React, { Children, createContext, useEffect,useState} from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../_config';
import axios from 'axios';


export const AuthContext = createContext()
const auth = getAuth(app)
const AuthPorvider = ({children}) => {
    const googleprovider = new GoogleAuthProvider();
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);

    const handleSignUp = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const handleSignIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const socialLogin = () => {
        setLoading(true);
        return signInWithPopup(auth,googleprovider)
    }

    const updateuser = (name,photo) => {
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const LogOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentuser) => {
            setLoading(false);
            setUser(currentuser);
            const token = localStorage.getItem('access-token')

            if(currentuser){
                axios.post('http://localhost:4000/jwt',{email:currentuser.email},{
                    headers:{
                        authorized:`bayrer ${token}`
                    }
                })
                .then(data => {
                    console.log(data.data.token)
                    localStorage.setItem('access-token',data.data.token)
                })
            }else{
                localStorage.removeItem('access-token')
            }




        });
        return () => {
            return unsubscribe();
        }
    },[])





    const info = {
        user,
        loading,
        handleSignUp,
        handleSignIn,
        LogOut,
        updateuser,
        socialLogin
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPorvider;