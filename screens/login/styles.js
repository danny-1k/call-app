import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  loginButtons: {
    marginBottom: 104,
    alignSelf:'center',
    width: 240,
    marginTop: "auto",
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
  googleLogin: {
    height: 60,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#655F5F",
    borderWidth: 1,
  },
  facebookLogin: {
    height: 60,
    width: "100%",
    backgroundColor: "#395796",
    marginTop: 30,
    borderRadius: 5,
    borderColor: "#655F5F",
  },
  twitterLogin: {
    height: 60,
    width: "100%",
    backgroundColor: "#1DA1F2",
    marginTop: 30,
    borderRadius: 5,
    borderColor: "#655F5F",
  },

  googleText: {
    color: "#333",
    fontSize: 15,
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 20,
  },

  fbtwText: {
    color: "#fff",
    fontSize: 15,
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 20,
  },

  textLogo: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    flexDirection:'row',
  },

  Logo: {
    width: 30,
    height: 30,
    marginRight:16,
    alignSelf:'center',
  },
});

export default styles;
