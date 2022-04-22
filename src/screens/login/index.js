import React,{useEffect,useState} from "react";
import { View, Text, ImageBackground} from "react-native";
import styles from "./styles";

import { GoogleBtn,TwitterBtn } from "../../components/authentication_btns";

import { GoogleSignin, statusCodes } from "react-native-google-signin";


import auth from '@react-native-firebase/auth';



const Login = () => {

  const [user,setUser] = useState({});
  const [loggedIn,setLoggedIn] = useState(false);




  const _signinWithGoogle = ()=>{
    GoogleSignin.hasPlayServices().then(hasPlayServices=>{

      if(hasPlayServices){
        

        GoogleSignin.signIn().then(userinfo=>{

          const idToken = userinfo.idToken;

          GoogleSignin.getTokens()
          .then(res=>{

            const accessToken = res.accessToken;

            const credential = auth.GoogleAuthProvider.credential(
              idToken,
              accessToken,
            );

            auth().signInWithCredential(credential).then(()=>{

              setUser({
                email:userinfo.user.email,
                fullName:userinfo.user.name,
                photo:userinfo.user.photo,
                firstName:userinfo.user.givenName,
              });
  
              setLoggedIn(true);

            });

          });


        }).catch(error=>{
          console.log(error);

        })
      };
    }).catch(error=>{
      console.log(error);
    });
    
  };

  const _signoutGoogle = ()=>{
    GoogleSignin.revokeAccess().then(()=>{
      GoogleSignin.signOut().then(()=>{
        setLoggedIn(false);
        setUser({});
      }).catch((err)=>{
        console.warn(err);
      })
    }).catch((err)=>{
      console.warn(err);
    })
  };


  useEffect(()=>{
    GoogleSignin.configure({
      webClientId:'1054103595413-27h7seq9t3td4fdofmjho3r9ph4h0rcj.apps.googleusercontent.com',
      scopes:['email','profile'],
      offlineAccess:true,
    })
  })



  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={require("../../assets/login/loginbg.png")}
          style={styles.img}>
        
        </ImageBackground>

        <Text style={styles.welcomeText}>Welcome Back!</Text>

      </View>


      <View style={styles.loginButtons}>


      <GoogleBtn onPress={_signinWithGoogle}/>
      <TwitterBtn />

      </View>
    </View>
  );
};

export default Login;
