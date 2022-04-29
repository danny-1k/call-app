import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, SettingsScreen } from './screens';


const Drawer = createDrawerNavigator();

const CallHome = ({navigation})=>{
    return (

        <NavigationContainer>

            <Drawer.Navigator initialRouteName='Home'>

                <Drawer.Screen name='Home' component={HomeScreen}/>
                <Drawer.Screen name='Settings' component={SettingsScreen}/>


            </Drawer.Navigator>

        </NavigationContainer>

    );
};

export default CallHome;