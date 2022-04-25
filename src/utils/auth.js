import { GoogleSignin, statusCodes } from "react-native-google-signin";
import auth from '@react-native-firebase/auth';
import {storeObject} from './storeAuth';

const signInWithGoogle = (setUser,setIsAuthenticated, setAlertIsVisible,setAlertMessage)=>{

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
                                email:userInfo.user.email,
                                fullName:userInfo.user.name,
                                photo:userInfo.user.photo,
                                firstName:userInfo.user.givenName,
                            };

                            setUser(user);

                            storeObject('user',user);
                            storeObject('googleTokens',{idToken,accessToken});


                            setIsAuthenticated(true);




                        });

                });
            });
        }else{
            setAlertIsVisible(true);
            setAlertMessage('Play Services Not Available.');
        };
    }).catch((err)=>{
        if (err.code === statusCodes.SIGN_IN_CANCELLED){
            // alert('Sign-in Cancelled');
        }else if( err.code === 7){
            //Network error
            setAlertIsVisible(true);
            setAlertMessage('No Internet connection :(');
        }else{
            // Unknown Error
            setAlertIsVisible(true);
            setAlertMessage('An Unknown Error Occured.');
        }

    });

};

const signOutWithGoogle = (setUser,setIsAuthenticated)=>{

    GoogleSignin.revokeAccess().then(()=>{
        GoogleSignin.signOut().then(()=>{

            setIsAuthenticated(false);
            setUser({});

            storeObject('user',null);
            storeObject('googleTokens',null);

        });
    });

};


export {signInWithGoogle,signOutWithGoogle};