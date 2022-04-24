import React,{useEffect} from "react";
import { View, Text, ImageBackground} from "react-native";
import styles from "./styles";

import { GoogleBtn,TwitterBtn } from "../../components/authentication_btns";

import { signInWithGoogle } from "../../utils/auth";
import { GoogleSignin } from "react-native-google-signin";


const Login = ({setUser,setIsAuthenticated}) => {


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


        <GoogleBtn onPress={()=>{signInWithGoogle(setUser,setIsAuthenticated)}}/>
        <TwitterBtn onPress={()=>console.warn('Clicked on twitter btn')}/>

      </View>
    </View>
  );
};

export default Login;
