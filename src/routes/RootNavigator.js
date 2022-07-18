import React,{useContext, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoute from './authRoute';
import CallRoute from './callRoute';

import {AuthContext, AuthProvider} from '../contexts/auth';



const Navigator = ()=>{
    const {authData} = useContext(AuthContext);

    return (
    
        <NavigationContainer>
            {authData.email ? <CallRoute/> :<AuthRoute/> }
        </NavigationContainer>
    );

};

const RootNavigator = ()=>{


    return (


        <AuthProvider>
            <Navigator/>
        </AuthProvider>
            

       
    );
};

export default RootNavigator;