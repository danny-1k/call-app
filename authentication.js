import * as Google from 'expo-auth-session/providers/google';

import {getAuth, GoogleAuthProvider, signInWithCredential, signUpWithCredential} from "firebase/compat/auth";



// import firebase from './firebase';


export const [request,response,promptAsync] = Google.useIdTokenAuthRequest(
    {
        androidClientId:'944920655043-bo94t5pg4ac60gokajc55vnjstam61pn.apps.googleusercontent.com',
        clientId:'944920655043-6kjc8lrdkdto4k3rsor9sbod75099d6i.apps.googleusercontent.com',
    }
);


export const signin = ()=>{
    if(response?.type === 'success'){
        const {id_token} = response.params;
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const credential = provider.credential(id_token);
        signInWithCredential(auth, credential);
    }else{
        console.log(response.message)
    }
};


export const signup = ()=>{
    if(response?.type === 'success'){
        const {id_token} = response.params;
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const credential = provider.credential(id_token);
        signUpWithCredential(auth, credential);
    }else{
        console.log(response.message)
    }
};



