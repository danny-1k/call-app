import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity} from "react-native";
import styles from "./styles";

import { BtnWithIcon } from "../../components/buttons";

import colors from '../../theme';


import * as WebBrowser from 'expo-web-browser';
import {request,response,promptAsync,signup} from '../../authentication';


WebBrowser.maybeCompleteAuthSession();



const Signup = () => {
  

  useEffect(signup,[response]);


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


        <BtnWithIcon 
          btnStyle={styles.btn}
          textIconStyle={styles.innerBtnContainer}
          imageSource={require("../../assets/login/googleicon.png")}
          iconStyle={styles.Logo}
          onPress={promptAsync}
          text={"Sign up with Google"}
          textStyle={{...styles.btnText,...{color:colors.black,}}}
        />


      </View>
    </View>
  );
};

export default Signup;
