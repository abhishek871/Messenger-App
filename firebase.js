import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBSwoBXBNvy-ljtvHsSwLLhSmdIXl87pZg",
    authDomain: "messenger-app-fb702.firebaseapp.com",
    projectId: "messenger-app-fb702",
    storageBucket: "messenger-app-fb702.appspot.com",
    messagingSenderId: "979671181214",
    appId: "1:979671181214:web:55dce2b83ee6ef2abcd88f",
    measurementId: "G-5FTN3R18FH"
});

const db = firebaseApp.firestore();
export default db;