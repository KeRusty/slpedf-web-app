import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBp0PqcBCYz_jYAQe4aog82wk-cmFFF3hg",
    authDomain: "slpedf-test.firebaseapp.com",
    databaseURL: "https://slpedf-test.firebaseio.com",
    projectId: "slpedf-test",
    storageBucket: "slpedf-test.appspot.com",
    messagingSenderId: "649651136134",
    appId: "1:649651136134:web:beba1fc1e61fda8f815307",
    measurementId: "G-HJDEXX8C4S"
};

const fire = firebase.initializeApp(config);
export default fire;
