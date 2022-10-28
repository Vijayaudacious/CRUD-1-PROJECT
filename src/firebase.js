import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyCFjGPiuuSednR80trHhJaysptoYIKVuUs",
    authDomain: "react-student-79820.firebaseapp.com",
    projectId: "react-student-79820",
    storageBucket: "react-student-79820.appspot.com",
    messagingSenderId: "694269528470",
    appId: "1:694269528470:web:cfdef4bc7121950ea3f5b7"
  };

  const firebaseDB = firebase.initializeApp(firebaseConfig)

  export default firebaseDB.database().ref();