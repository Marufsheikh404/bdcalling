import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import AxiosPublic from "../hook/AxiosPublic";


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
    const LogOut = async () => {
        try{
            await signOut(auth)
             localStorage.removeItem("access-token")
        } catch(error){
            console.log(error)
        }
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

            // token access kora
            if(currentUser){
                const userInfo ={
                    email:currentUser.email
                };
                AxiosPublic.post('/jwt', userInfo)
                .then(res=>{
                    localStorage.setItem("access-token", res.data.accessToken)
                });
            }
            else{
                localStorage.removeItem("access-token")
            }
            setLoading(false)
        });
        return unSubscribe;
    }, [AxiosPublic])


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