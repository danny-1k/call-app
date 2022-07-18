import { GoogleSignin, statusCodes } from "react-native-google-signin";
import auth from '@react-native-firebase/auth';
import {storeObject, getObject} from '../utils/local_storage';


const signInWithGoogle = (setAuthData, setAlertIsVisible,setAlertMessage)=>{

    GoogleSignin.hasPlayServices().then(hasPlayServices=>{
        if(hasPlayServices){
            GoogleSignin.signIn().then(userInfo=>{
                const idToken = userInfo.idToken;
                GoogleSignin.getTokens().then(res=>{

                        const accessToken = res.accessToken;

                        const credential = auth.GoogleAuthProvider.credential(
                            idToken,
                            accessToken,
                        );

                        auth().signInWithCredential(credential).then(()=>{

                            const user = {
                                tokens: {'credential':credential},
                                email : userInfo.user.email,
                                name : userInfo.user.name,
                                photo: userInfo.user.photo,
                            };
                            
                            setAuthData(user);

                            // save authdata to local storage
                            storeObject('@AuthData', user);

                        });

                });
            }).catch(err=>{
                console.log(err.code)
                if(err.code == 7){
                    //Network error
                    console.log('no internet :(')
                    setAlertIsVisible(true);
                    setAlertMessage('No Internet connection :(');

                };
            });
        }else{
            setAlertIsVisible(true);
            setAlertMessage('Play Services Not Available.');
        };
    }).catch((err)=>{
        if (err.code === statusCodes.SIGN_IN_CANCELLED){
            // alert('Sign-in Cancelled');
        }else{
            // Unknown Error
            setAlertIsVisible(true);
            setAlertMessage('An Unknown Error Occured.');
        }

    });

};

const signOutWithGoogle = (setUser)=>{

    GoogleSignin.revokeAccess().then(()=>{
        GoogleSignin.signOut().then(()=>{

            setIsAuthenticated(false);
            setUser({});

        });
    });

};


export {signInWithGoogle,signOutWithGoogle};