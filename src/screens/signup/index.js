import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity} from "react-native";
import styles from "./styles";

import { GoogleBtn,TwitterBtn } from "../../components/authentication_btns";



const Signup = () => {
  
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={require("../../assets/signup/join.png")}
          style={styles.img}>
        
        </ImageBackground>

        <Text style={styles.welcomeText}>Join us</Text>

      </View>


      <View style={styles.loginButtons}>


      <GoogleBtn type="signup"/>
      <TwitterBtn type="signup"/>


      </View>
    </View>
  );
};

export default Signup;
