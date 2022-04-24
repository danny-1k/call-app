import React,{useState} from 'react';
import AuthRoute from './authRoute';
import CallRoute from './callRoute';

const RootNavigator = ()=>{

    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [user,setUser] = useState({});


    return (

        isAuthenticated?
        (
            <>
                <CallRoute/>
            </>
        ) : (
            <>
                <AuthRoute setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>

            </>

        )

    );
};

export default RootNavigator;