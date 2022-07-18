import React, {createContext, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {getObject, getData} from '../utils/local_storage';


export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const baseAuthData = {
        tokens: {},
        email : null,
        name : null,
        photo: null,
    };

    const [authData, setAuthData] = useState(baseAuthData);

    const loadSerializedData = async ()=>{

        getData('@AuthData').then(serializedAuthData=>{
            // check if it exists

            if (serializedAuthData){
                setAuthData(JSON.parse(serializedAuthData)); // update authData

            };
        });

        
    };

    useEffect(()=>{
        // every time app is opened
        
        loadSerializedData();

    }, []);

    const signOut = ()=>{
        setAuthData(baseAuthData);
    };


    return (
        <AuthContext.Provider value = {{authData, signOut, setAuthData}}>
            {children}
        </AuthContext.Provider>
    );
};