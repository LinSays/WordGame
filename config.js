import Firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBPs7VSHwKzTvlagerw9wsg_KsRuhuatB0",
    authDomain: "test-6a0d9.firebaseapp.com",
    databaseURL: "https://test-6a0d9-default-rtdb.firebaseio.com",
    projectId: "test-6a0d9",
    storageBucket: "test-6a0d9.appspot.com",
    messagingSenderId: "673938079164",
    appId: "1:673938079164:web:c6026d57556158cee5bfb9",
    measurementId: "G-SBEPMSCS3V"
  };

  const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();