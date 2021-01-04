import firebase from "firebase";
const firebaseApp =firebase.initializeApp({
        apiKey: "AIzaSyDX3T3-rxHNu-bBPFf-1njPvIDxdqkH3FU",
        authDomain: "messenger-clone-1e102.firebaseapp.com",
        projectId: "messenger-clone-1e102",
        storageBucket: "messenger-clone-1e102.appspot.com",
        messagingSenderId: "113882726088",
        appId: "1:113882726088:web:66e56ba9f0550256152ffd",
        measurementId: "G-RBQ18DVDVM"

});

const db = firebaseApp.firestore();
export default db ;