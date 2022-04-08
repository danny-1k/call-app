import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity} from "react-native";
import styles from "./styles";

import { BtnWithIcon } from "../../components/buttons";

import colors from '../../theme';


const Login = () => {
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
          onPress={()=>{console.warn('Clicked on signin with google btn')}}
          text={"Log in with Google"}
          textStyle={{...styles.btnText,...{color:colors.black,}}}
        />

        <BtnWithIcon 
          btnStyle={{...styles.btn,...{backgroundColor:'#1DA1F2',}}}
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
