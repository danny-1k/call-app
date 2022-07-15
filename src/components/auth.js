import React, {createContext, useState} from "react";


export const AuthContext = createContext();

export const AuthProvider = (props)=>{

    const baseAuthData = {
        tokens: {},
        email : null,
        name : null,
    };

    const [authData, setAuthData] = useState(baseAuthData);

    const signOut = ()=>{
        setAuthData(baseAuthData);
    };

    return (
        <AuthContext.Provider value = {{authData, signOut}}>
            {props}
        </AuthContext.Provider>
    );
};