// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import * as a from "firebase/compat/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1Vri9gn8tfcCKnmUJhAJof4pmBpuYARs",
  authDomain: "call-app--signin.firebaseapp.com",
  projectId: "call-app--signin",
  storageBucket: "call-app--signin.appspot.com",
  messagingSenderId: "944920655043",
  appId: "1:944920655043:web:adafd93a74a2c83eb45e76",
  measurementId: "G-8867FY3HZR"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
            ?(firebase.apps.length === 0)
            :firebase.app();


export default firebase;


export const auth = firebase.auth();

// const analytics = a.getAnalytics(app);
