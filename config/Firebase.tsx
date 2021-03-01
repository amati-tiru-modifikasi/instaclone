import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  databaseURL: 'https://instaclone-atm.firebaseio.com',
  measurementId: 'G-measurement-id',
  apiKey: "AIzaSyCRKE7aMohitLl3oJr3P4W_leEzEKdxhY4",
  authDomain: "instaclone-atm.firebaseapp.com",
  projectId: "instaclone-atm",
  storageBucket: "instaclone-atm.appspot.com",
  messagingSenderId: "1013924472960",
  appId: "1:1013924472960:web:7dc36fb4bf794aa2799e65"
};

firebase.initializeApp(firebaseConfig);