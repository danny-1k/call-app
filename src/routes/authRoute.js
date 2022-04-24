import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginSignup from "../screens/loginsignup";
import Login from "../screens/login";
import Signup from "../screens/signup";
import CallHome from "../screens/callHome";

import { StatusBar} from 'react-native';



const Stack = createNativeStackNavigator();

const AuthRoute = ({setIsAuthenticated,setUser})=>{


    return (
        <>

            <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}/>

            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">

                    <Stack.Screen name="Home" options={{headerShown:false}} >
                        {(props) => <LoginSignup {...props}/>}
                    </Stack.Screen>

                    <Stack.Screen name="Login">
                        {(props) => <Login  setIsAuthenticated={setIsAuthenticated} setUser={setUser} {...props}/>}
                    </Stack.Screen>
                    


                </Stack.Navigator>
            </NavigationContainer>
        
        </>
        
    );
};

export default AuthRoute;
