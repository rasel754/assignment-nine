import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useState } from "react";


export const AuthContext =createContext(null);

 const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createRegister =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email , password) => {
        return signInWithEmailAndPassword(auth,email, password)
    }
    

    const authInfo={
        user,
        createRegister,
        signIn,

    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;