import firebase from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCRtt6OoVBlUGWL9cTerNBTxXoHuyCF6nI",
  authDomain: "authproject-c6181.firebaseapp.com",
  projectId: "authproject-c6181",
  storageBucket: "authproject-c6181.appspot.com",
  messagingSenderId: "662214772446",
  appId: "1:662214772446:web:25593c5c766ba5bd75644f",
  measurementId: "G-HV9WEJMPEX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;