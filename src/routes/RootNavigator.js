import React,{useState} from 'react';
import AuthRoute from './authRoute';
import CallRoute from './callRoute';

const RootNavigator = ()=>{

    const [isAuthenticated,setIsAuthenticated] = useState(false);

    return (

        isAuthenticated? <CallRoute/> : <AuthRoute/>


    );
};

export default RootNavigator;