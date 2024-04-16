import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

import { createContext, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext =createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createRegister =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo={
        user,
        createRegister,

    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;