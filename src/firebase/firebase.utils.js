import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAq9miqsFak5tN0YweR_z8a3HzTRXj_dkI",
    authDomain: "crown-db-11ca6.firebaseapp.com",
    projectId: "crown-db-11ca6",
    storageBucket: "crown-db-11ca6.appspot.com",
    messagingSenderId: "838315848391",
    appId: "1:838315848391:web:c6abbeda5907f71d4604e2",
    measurementId: "G-GR49FHH96H"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });

  export const SignInWithGoogle = () => auth.signInWithPopup(provider); 

  export default firebase;