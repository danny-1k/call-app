import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CallHome from "../screens/callHome";
import JoinCall from "../screens/joincall";


const Stack = createNativeStackNavigator();

const CallRoute = ()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CallHome">
                <Stack.Screen name="CallHome" component={CallHome}/>
                <Stack.Screen name="JoinCall" component={JoinCall}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default CallRoute;
