import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAnPm4nHXXqpitq7BwORQpqZI2gZNlyxEc",
    authDomain: "backstop-india.firebaseapp.com",
    projectId: "backstop-india",
    storageBucket: "backstop-india.appspot.com",
    messagingSenderId: "1020606345854",
    appId: "1:1020606345854:web:4c37f9e5b204576f551e2f",
    measurementId: "G-NW0WLW0039"
};
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 
export {auth , provider, firebase};
 