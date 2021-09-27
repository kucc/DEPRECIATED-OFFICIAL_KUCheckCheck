import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDkWZ7pDdNMKZqtOFIYgVBz6rhGM2Aw_-A",
  authDomain: "kucheckcheck-9f084.firebaseapp.com",
  projectId: "kucheckcheck-9f084",
  storageBucket: "kucheckcheck-9f084.appspot.com",
  messagingSenderId: "781497328972",
  appId: "1:781497328972:web:a292c93ca7243cf68a1be9",
  databaseURL:
    "https://kucheckcheck-9f084-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
export const storageService = firebase.storage();
export const databaseService = firebase.database();
