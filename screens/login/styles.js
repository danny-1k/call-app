import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  btn: {
    height: 60,
    width: "100%",
    marginTop: 30,
    borderRadius: 5,
    borderColor: "#655F5F",
    backgroundColor:'white',
    justifyContent:'center',

    // box shadow for both android & ios
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5

  },
  btnText: {
    fontSize: 15,
    marginLeft:15,
    color: "#000",
    marginTop:5,

  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    display:'flex',

  },

  loginButtons: {
    marginBottom: 'auto',
    alignSelf:'center',
    width: 240,
    marginTop: "auto",
    justifyContent:'center',
  },

  img: {
    width: "100%",
    height: 231,
    marginTop: 90,
    resizeMode:'contain',
  },

  welcomeText: {
    fontSize: 30,
    marginTop: 9,
    fontFamily: "Roboto",
    marginLeft: 30,
  },


  innerBtnContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection:'row',
  },

  Logo: {
    width: 30,
    height: 30,
    marginRight:15,

  },
});

export default styles;
