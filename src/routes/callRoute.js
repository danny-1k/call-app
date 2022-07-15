import React,{useState, useContext} from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CallHome from "../screens/callHome";
import JoinCall from "../screens/joincall";

import CustomBtn from '../components/buttons';
import { StatusBar, Image} from 'react-native';
import {AuthContext} from '../components/auth';


const Stack = createNativeStackNavigator();


const Home = ({isValid, setIsValid, setJoinCode})=>{


    const ProfilePic = ()=>{

        const {authData} = useContext(AuthContext);
        console.log(authData.photo)

        return (
            <Image source={{uri:authData.photo}} style={{width:40,height:40,borderRadius:50}}/>
        );



    };



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

        headerRight: ()=>(    
            <ProfilePic/>
        ),
    
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

                    <Stack.Navigator initialRouteName="CallHome">
                        <Stack.Screen
                            name="CallHome"
                            options={callHomeOptions}
                            component={CallHome}
                        />


                        <Stack.Screen name="JoinCall" options={joinCallOptions}>

                            {(props) => <JoinCall {...props} setIsValid={setIsValid} setJoinCode={setJoinCode}/> }

                        </Stack.Screen>


                    </Stack.Navigator>

                
                </>

    );
};





const CallRoute = ()=>{



    const [joinCode,setJoinCode] = useState(null);
    const [isValid,setIsValid] = useState(false);



    return (

        <Home isValid={isValid} setIsValid={setIsValid} setJoinCode={setJoinCode}/>
        
        
    );
};


export default CallRoute;
