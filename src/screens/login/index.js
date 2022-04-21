import React,{useEffect,useState} from "react";
import { View, Text, ImageBackground} from "react-native";
import styles from "./styles";

import { GoogleBtn,TwitterBtn } from "../../components/authentication_btns";

import { GoogleSignin, statusCodes } from "react-native-google-signin";


import auth from '@react-native-firebase/auth';



const Login = () => {

  const [userInfo,setUserInfo] = useState([]);
  const [loggedIn,setLoggedIn] = useState(false);



  const _signin = async ()=>{
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      setLoggedIn(true);
      
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await auth().signInWithCredential();

    }catch(err){
      if (error.code === statusCodes.SIGN_IN_CANCELLED){
        //user cancelled login
        alert('Cancelled');

      }else if(error.code === statusCodes.IN_PROGRESS){
        alert('In progress');

      }else if(error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE){
        // do nothing 

      }else{
        // do nothing
      }
    };
  };

  const _signout = async()=>{
    try{
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setLoggedIn(false);
      setUserInfo([]);

    }catch(err){
      console.warn(err);
    };
  };


  useEffect(()=>{
    GoogleSignin.configure({
      webClientId:'1054103595413-27h7seq9t3td4fdofmjho3r9ph4h0rcj.apps.googleusercontent.com',
      scopes:['email','profile'],
      offlineAccess:true,
    })
  })



  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={require("../../assets/login/loginbg.png")}
          style={styles.img}>
        
        </ImageBackground>

        <Text style={styles.welcomeText}>Welcome Back!</Text>

      </View>


      <View style={styles.loginButtons}>


      <GoogleBtn onPress={_signin}/>
      <TwitterBtn/>

      </View>
    </View>
  );
};

export default Login;
