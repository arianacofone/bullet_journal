const firebase = require('firebase');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD_pdHrBQcx_vw6MljVsbKI_-7SbHjDvv4",
  authDomain: "sync-12ff7.firebaseapp.com",
  databaseURL: "https://sync-12ff7.firebaseio.com",
  storageBucket: "sync-12ff7.appspot.com",
  messagingSenderId: "744609215344"
};
firebase.initializeApp(config);

 module.exports = firebase;
