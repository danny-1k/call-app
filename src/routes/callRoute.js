import React,{useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CallHome from "../screens/callHome";
import JoinCall from "../screens/joincall";

// import Header from "../headers/authenticated";
import CustomBtn from '../components/buttons';
import { Button , StatusBar,StyleSheet} from 'react-native';



const Stack = createNativeStackNavigator();


const Home = ()=>{


    const options = {
        headerTitleStyle: {
            color:'#fff'
        },
        headerShadowVisible:false,
    }
    
    
    const callHomeOptions = {
    
        title: 'Calls',
    
    
        headerStyle: {
            backgroundColor:'#2541B2'
        },
    
        ...options,
    
    };



    const joinCallOptions = {

        title: 'Join a call',
    
        ...options,
    
        headerStyle: {
            backgroundColor:'#2541B2'
        },
    
        headerTitleStyle: {
            color:'#fff',
        },
    
        
        headerRight: ()=>(
            <CustomBtn 
                btnStyle={isValid?headerJoinBtnStyle.valid : headerJoinBtnStyle.invalid} 
                onPress={()=>console.warn('clicked')} 
                textStyle={isValid?headerJoinTextStyle.valid : headerJoinTextStyle.invalid}
                disabled={!isValid}
                text={"Join"}
            />
        ),
    
    };

    return (

        <>

            <StatusBar backgroundColor={'#2541B2'}/>

            <NavigationContainer>

                <Stack.Navigator initialRouteName="CallHome">
                    <Stack.Screen name="CallHome" options={callHomeOptions} component={CallHome}
                        />


                    <Stack.Screen name="JoinCall" options={joinCallOptions}>

                        {(props) => <JoinCall {...props} setIsValid={setIsValid} setJoinCode={setJoinCode}/> }

                    </Stack.Screen>


                </Stack.Navigator>
            </NavigationContainer>
        </>

    );
};





const CallRoute = ()=>{



    const [joinCode,setJoinCode] = useState(null);
    const [isValid,setIsValid] = useState(false);



    return (

        <Home/>
        
        
    );
};

// const styles = sty



export default CallRoute;
