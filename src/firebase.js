import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBeoENyaxx76wXAVwCO1664QKyVrw4aBtw",
    authDomain: "whatup-ad202.firebaseapp.com",
    projectId: "whatup-ad202",
    storageBucket: "whatup-ad202.appspot.com",
    messagingSenderId: "155435810907",
    appId: "1:155435810907:web:cd007a51f488e0019f7f7e",
    measurementId: "G-DWBW7ZW61G"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
 
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.
  GoogleAuthProvider();
  export {auth,provider}
  export default db;