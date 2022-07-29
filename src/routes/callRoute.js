import React,{useState, useContext} from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CallHome from "../screens/callHome";
import JoinCall from "../screens/joincall";
import NewCall from "../screens/newCall";
import Call from "../screens/call";

import CustomBtn from '../components/buttons';
import { StatusBar, Image} from 'react-native';
import {AuthContext} from '../contexts/auth';


const Stack = createNativeStackNavigator();


const Home = ({isValid, setIsValid, setJoinCode, joinCode})=>{


    const ProfilePic = ()=>{

        const {authData} = useContext(AuthContext);

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



    const joinCallOptions = ({navigation}) => ({

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
                onPress={()=>navigation.navigate('Call',)} 
                textStyle={isValid?headerJoinTextStyle.valid : headerJoinTextStyle.invalid}
                disabled={!isValid}
                text={"Join"}
            />
        ),

    });


    const callOptions = {
        ...options,
    };

    const newCallOptions = {
        title: 'Create a new call',
    
        ...options,
    
        headerStyle: {
            backgroundColor:'#2541B2'
        },
    
        headerTitleStyle: {
            color:'#fff',
        },

        
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


                        <Stack.Screen name="NewCall" options={newCallOptions}>

                            {(props) => <NewCall {...props} joinCode={joinCode} setJoinCode={setJoinCode}/>}

                        </Stack.Screen>


                        <Stack.Screen name="Call" options={callOptions}>
                            {(props) => <Call {...props} joinCode={joinCode}/>}
                        </Stack.Screen>


                        


                    </Stack.Navigator>

                
                </>

    );
};





const CallRoute = ()=>{



    const [joinCode,setJoinCode] = useState(null);
    const [isValid,setIsValid] = useState(false);



    return (

        <Home isValid={isValid} setIsValid={setIsValid} setJoinCode={setJoinCode} joinCode={joinCode}/>
        
        
    );
};


export default CallRoute;
