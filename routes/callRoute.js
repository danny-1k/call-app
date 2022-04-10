import React,{useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CallHome from "../screens/callHome";
import JoinCall from "../screens/joincall";

// import Header from "../headers/authenticated";
import CustomBtn from '../components/buttons';
import { Button } from 'react-native';



const Stack = createNativeStackNavigator();



const CallRoute = ()=>{



    const [joinCode,setJoinCode] = useState(null);
    const [isValid,setIsValid] = useState(false);


    const headerJoinBtnStyle = {

        valid:{
            backgroundColor:'#03256C',
            width:75,
            height:45,
            borderRadius:5,
            alignItems:'center',
            justifyContent:'center',



        },

        invalid: {
            backgroundColor:'#ddd',
            borderColor:'rgba(0,0,0,.4)',
            width:75,
            height:45,
            borderRadius:5,
            alignItems:'center',
            justifyContent:'center',
            

        },
        
    
    };
    
    
    const headerJoinTextStyle = {
        valid: {
            fontSize:20,
            color:'#fff',


        },
        invalid: {
            fontSize:20,
            color:'rgba(0,0,0,.4)',

        }
    
    
    };



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
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CallHome">
                <Stack.Screen name="CallHome" options={callHomeOptions} component={CallHome}
                    />


                <Stack.Screen name="JoinCall" options={joinCallOptions}>

                    {(props) => <JoinCall {...props} setIsValid={setIsValid} setJoinCode={setJoinCode}/> }

                </Stack.Screen>


            </Stack.Navigator>
        </NavigationContainer>
    );
};



export default CallRoute;
