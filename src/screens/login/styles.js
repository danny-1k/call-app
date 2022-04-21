import React from "react";
import { StyleSheet } from "react-native";
import colors from '../../theme';


const styles = StyleSheet.create({

  

  container: {
    flex: 1,
    backgroundColor: colors.white,
    display:'flex',

  },

  loginButtons: {
    alignSelf:'center',
    width: 240,
    justifyContent:'center',
    flex:1,
  },

  img: {
    width: "100%",
    height: 230,
    marginTop: 50,
    resizeMode:'contain',
  },

  welcomeText: {
    fontSize: 30,
    marginTop: 10,
    fontFamily: "Roboto",
    marginLeft: 30,
    color:colors.black,
  },
});

export default styles;
