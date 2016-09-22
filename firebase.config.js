const firebase = require('firebase');

// Initialize Firebase
var config = {
   apiKey: "AIzaSyC-dwMZFVAm9KrrlHKk7jaU4JmFbQFSVJM",
   authDomain: "lazr-1da5a.firebaseapp.com",
   databaseURL: "https://lazr-1da5a.firebaseio.com",
   storageBucket: "lazr-1da5a.appspot.com",
   messagingSenderId: "337753493085"
 };
 firebase.initializeApp(config);

 module.exports = firebase;
