import React,{useState} from 'react';
import AuthRoute from '../routes/authRoute';
import CallRoute from './routes/callRoute';

const RootNavigator = ()=>{

    const [isAuthenticated,setIsAuthenticated] = useState(false);

    return (

        isAuthenticated? <CallRoute/> : <AuthRoute/>


    );
};

export default RootNavigator;