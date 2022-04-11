import React,{useEffect} from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity} from "react-native";
import styles from "./styles";

import { BtnWithIcon } from "../../components/buttons";

import colors from '../../theme';

import firebase,{ auth } from "../../firebase";

import * as Google from 'expo-auth-session/providers/google';


const Login = () => {

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:'944920655043-molf225ngchkh33p4hkh6rst94nqmu35.apps.googleusercontent.com',
    webClientId: '944920655043-molf225ngchkh33p4hkh6rst94nqmu35.apps.googleusercontent.com',
  });

  useEffect(()=>{
    if(response?.type === 'success'){
      const {authentication} = response;
    }

    }
    ,[response])

  

  const handleLoginWithTwitter = () => {

  };



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


        <BtnWithIcon 
          btnStyle={styles.btn}
          textIconStyle={styles.innerBtnContainer}
          imageSource={require("../../assets/login/googleicon.png")}
          iconStyle={styles.Logo}
          disabled={!request}
          onPress={()=>promptAsync()}
          text={"Log in with Google"}
          textStyle={{...styles.btnText,...{color:colors.black,}}}
        />

        <BtnWithIcon 
          btnStyle={{...styles.btn,...{backgroundColor:colors.twitterBlue,}}}
          textIconStyle={styles.innerBtnContainer}
          imageSource={require("../../assets/login/twittericon.png")}
          iconStyle={styles.Logo}
          onPress={()=>{console.warn('Clicked on signin with twitter btn')}}
          text={"Log in with Twitter"}
          textStyle={{...styles.btnText,...{color:colors.white,}}}
        />

      </View>
    </View>
  );
};

export default Login;
