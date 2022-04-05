import React from "react";
import { Stylesheet } from "react-native";

const styles = Stylesheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  loginButtons: {
    marginBottom: 104,
    marginLeft: 67.5,
    marginRight: 67.5,
    width: 240,
    marginTop: "auto",
  },

  img: {
    width: "100%",
    height: 231,
    marginTop: 90,
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
    backgroundColor: "#0148A4",
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
    color: "#000",
    fontSize: 15,
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "700",
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
    // justifyContent:'center',
    // flexWrap:'wrap',
  },

  Logo: {
    width: 30,
    height: 30,
    // position:'absolute',
    // translateX:100,
  },
});

export default styles;
