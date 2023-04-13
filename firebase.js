import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"


const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "facebook-clone-pj.firebaseapp.com",
    projectId: "facebook-clone-pj",
    storageBucket: "facebook-clone-pj.appspot.com",
    messagingSenderId: "901214680617",
    appId: "1:901214680617:web:78a3d350766b68fc634e38"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// gets reference to firebase database to allow for image uploads
const storage = getStorage(app);


 
export {db, app, storage}