import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginSignup from "../screens/loginsignup";
import Login from "../screens/login";


const Stack = createNativeStackNavigator();

const AuthRoute = ()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={LoginSignup}/>
                <Stack.Screen name="Login" component={Login}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AuthRoute;
