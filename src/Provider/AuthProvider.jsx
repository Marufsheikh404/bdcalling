import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    // SignUP
    const signUp =(email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // SignIn
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // LogOut
    const LogOut = () => {
        return signOut(auth);
    }
    // updateProfile
    const updateP =(name)=>{
        return updateProfile(auth.currentUser,{
            displayName:name
        });
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("currentUser", currentUser)
            setUser(currentUser);
            setLoading(false)
        });
        return unSubscribe;
    }, [])


    const Info = {
        user,
        signUp,
        loading,
        setLoading,
        login,
        LogOut,
        updateP
    }
    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;