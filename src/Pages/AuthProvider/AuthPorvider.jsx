import React, { Children, createContext, useEffect,useState} from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../_config';


export const AuthContext = createContext()
const auth = getAuth(app)
const AuthPorvider = ({children}) => {
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

    const LogOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentuser) => {
            setLoading(false);
            setUser(currentuser);
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
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPorvider;