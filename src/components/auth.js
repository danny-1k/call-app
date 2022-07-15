import React, {createContext, useState} from "react";


export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const baseAuthData = {
        tokens: {},
        email : null,
        name : null,
        photo: null,
    };

    const [authData, setAuthData] = useState(baseAuthData);

    const signOut = ()=>{
        setAuthData(baseAuthData);
    };

    return (
        <AuthContext.Provider value = {{authData, signOut, setAuthData}}>
            {children}
        </AuthContext.Provider>
    );
};