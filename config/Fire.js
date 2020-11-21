import * as firebase from 'firebase';

//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBOduUHvhoEQlpIH07T-o52COkg52IJVtc",
    authDomain: "multilangchat-cef5d.firebaseapp.com",
    databaseURL: "https://multilangchat-cef5d.firebaseio.com",
    projectId: "multilangchat-cef5d",
    storageBucket: "multilangchat-cef5d.appspot.com",
    messagingSenderId: "744154451748",
    appId: "1:744154451748:web:bcb6b8b3048740115eadb1",
    measurementId: "G-4HWSW2TK79"
  };

let Fire = firebase.initializeApp(firebaseConfig);
export default Fire;