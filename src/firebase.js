import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC9fR0xPBI7kMEXKWZS4DVShvFjOmmBZqE",
  authDomain: "linkedin-764e7.firebaseapp.com",
  projectId: "linkedin-764e7",
  storageBucket: "linkedin-764e7.appspot.com",
  messagingSenderId: "66723401769",
  appId: "1:66723401769:web:49f5b23deb3de389548c38"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};