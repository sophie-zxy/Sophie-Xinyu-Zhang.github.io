 import firebase from 'firebase'
 import firestre from 'firebase/firestore'

 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBlU9zg01mgLhAeOr7nO-FCpAPWiwbOS-U",
    authDomain: "udemy-ninja-chat-2051e.firebaseapp.com",
    databaseURL: "https://udemy-ninja-chat-2051e.firebaseio.com",
    projectId: "udemy-ninja-chat-2051e",
    storageBucket: "udemy-ninja-chat-2051e.appspot.com",
    messagingSenderId: "859602823684",
    appId: "1:859602823684:web:b56829537eaa11a0266351",
    measurementId: "G-NZ1B7T5VFC"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  export default firebaseApp.firestore()
  firebase.analytics();