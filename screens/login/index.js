import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity} from "react-native";
import styles from "./styles";

import CustomBtn, { BtnWithIcon } from "../../components/buttons";

const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/login/loginbg.png")}
        style={styles.img}
      ></ImageBackground>

      <Text style={styles.welcomeText}>Welcome Back!</Text>

      <View style={styles.loginButtons}>


        <BtnWithIcon
          text={"Login with Google"}
          textIconStyle={styles.textLogo}
          imageSource={require("../../assets/login/googleicon.png")}
          iconStyle={styles.Logo}
          btnStyle={styles.googleLogin}
          textStyle={styles.googleText}
          onPress={() => {
            console.warn("Login with google");
          }}
        />

        <BtnWithIcon
          text={"Login with Facebook"}
          imageSource={require("../../assets/login/fbicon.png")}
          textIconStyle={styles.textLogo}
          iconStyle={styles.Logo}
          btnStyle={styles.facebookLogin}
          textStyle={styles.fbtwText}
          onPress={() => {
            console.warn("Login with Facebook");
          }}
        />

        <BtnWithIcon
          text={"Login with Twiter"}
          imageSource={require("../../assets/login/twittericon.png")}
          textIconStyle={styles.textLogo}
          iconStyle={styles.Logo}
          btnStyle={styles.twitterLogin}
          textStyle={styles.fbtwText}
          onPress={() => {
            console.warn("Login with Twitter");
          }}

        />

      </View>
    </View>
  );
};

export default Login;
