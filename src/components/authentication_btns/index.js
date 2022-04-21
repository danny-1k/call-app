import React from 'react';
import { BtnWithIcon } from "../buttons";
import colors from "../../theme";
import styles from "./styles";

const GoogleBtn = (props)=>{
    return (

        <BtnWithIcon 
          btnStyle={styles.btn}
          textIconStyle={styles.innerBtnContainer}
          imageSource={require("../../assets/login/googleicon.png")}
          iconStyle={styles.Logo}
          onPress={props.onPress}
          text={props.type==="signup"?"Sign up with Google":"Login with Google"}
          textStyle={{...styles.btnText,...{color:colors.black,}}}
        />


    );
};


const TwitterBtn = (props)=>{
    return (
        <BtnWithIcon 
          btnStyle={{...styles.btn,...{backgroundColor:colors.twitterBlue}}}
          textIconStyle={styles.innerBtnContainer}
          imageSource={require("../../assets/login/twittericon.png")}
          iconStyle={styles.Logo}
          onPress={props.onPress}
          text={props.type==="signup"?"Sign up with Twitter":"Login with Twitter"}
          textStyle={{...styles.btnText,...{color:colors.white,}}}
        />
    );
};


export {GoogleBtn,TwitterBtn};