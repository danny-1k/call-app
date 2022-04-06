import React from "react";
import {View, Text, Image,ImageBackground,TouchableOpacity} from "react-native";
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

            <Image
                source={require("../../assets/login/googleicon.png")}
                style={styles.Logo}
              ></Image>

          </View>
        </View>

        <View style={styles.facebookLogin}>
          <View style={styles.textLogo}>
            <Text style={styles.fbtwText}>Login with Facebook</Text>


            <Image
                source={require("../../assets/login/fbicon.png")}
                style={styles.Logo}
              ></Image>


          </View>
        </View>

        <View style={styles.twitterLogin}>
          <View style={styles.textLogo}>
            <Text style={styles.fbtwText}>Login with Twitter</Text>
            <Image
                source={require("../../assets/login/twittericon.png")}
                style={styles.Logo}
              ></Image>
          </View>
        </View>


      </View>
    </View>
  );
};


export default Login;