import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, SettingsScreen } from './screens';


const Drawer = createDrawerNavigator();

const CallHome = ({navigation})=>{
    return (

        <HomeScreen navigation={navigation}/>
    );
};

export default CallHome;