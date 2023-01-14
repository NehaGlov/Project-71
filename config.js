import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyCO7MJQx-scSTIWfw-_4ytXOi7kkwgZGvQ",
  authDomain: "e-ride-d55fa.firebaseapp.com",
  projectId: "e-ride-d55fa",
  storageBucket: "e-ride-d55fa.appspot.com",
  messagingSenderId: "356238246022",
  appId: "1:356238246022:web:e2cc52b1a84faa3a259107"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
