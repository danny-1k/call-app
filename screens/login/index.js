import React,{useEffect} from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity} from "react-native";
import styles from "./styles";

import { BtnWithIcon } from "../../components/buttons";

import colors from '../../theme';

import firebase,{ auth } from "../../firebase";

import * as WebBrowser from 'expo-web-browser';
import {request,response,promptAsync,signin} from '../../authentication';

WebBrowser.maybeCompleteAuthSession();

const Login = () => {


  useEffect(signin,[response]);



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
          onPress={promptAsync}
          text={"Log in with Google"}
          textStyle={{...styles.btnText,...{color:colors.black,}}}
        />

      </View>
    </View>
  );
};

export default Login;
