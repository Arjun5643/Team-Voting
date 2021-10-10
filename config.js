import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAdJ2x1ainIbih35saDKbz2KhoKe8xl364",
    authDomain: "team-voting-c2e8e.firebaseapp.com",
    databaseURL: "https://team-voting-c2e8e-default-rtdb.firebaseio.com",
    projectId: "team-voting-c2e8e",
    storageBucket: "team-voting-c2e8e.appspot.com",
    messagingSenderId: "1066498803538",
    appId: "1:1066498803538:web:13acb89611deeb0c415c8b"
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();