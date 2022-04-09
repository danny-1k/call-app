// import { createNativeStackNavigator } from "@react-navigation/stack";
// import {createAppContainer} from "react-navigation";


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginSignup from "../screens/loginsignup";
import Login from "../screens/login";


const screens = {
    LoginSignup: {
        screen: LoginSignup,

    },

    Login: {
        screen: Login,

    },

};

const AuthStack = createNativeStackNavigator(screens);

export default NavigationContainer(AuthStack);
