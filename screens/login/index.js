import React from "react";
import {View, Text, ImageBackground} from "react-native";
import styles from "./styles";

const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/login/loginbg.png")}
        style={styles.img}
      ></ImageBackground>

      <Text style={styles.welcomeText}>Welcome Back!</Text>

      <View style={styles.loginButtons}>
        <View style={styles.googleLogin}>
          <View style={styles.textLogo}>
            <Text style={styles.googleText}>Login with Google</Text>

            <View>
              <ImageBackground
                source={require("../../assets/login/googleicon.png")}
                style={styles.Logo}
              ></ImageBackground>
            </View>
          </View>
        </View>

        <View style={styles.facebookLogin}>
          <View style={styles.textLogo}>
            <Text style={styles.fbtwText}>Login with Facebook</Text>
            <View style={styles.Logo}></View>
          </View>
        </View>

        <View style={styles.twitterLogin}>
          <View style={styles.textLogo}>
            <Text style={styles.fbtwText}>Login with Twitter</Text>
            <View style={styles.Logo}></View>
          </View>
        </View>
      </View>
    </View>
  );
};


export default Login;