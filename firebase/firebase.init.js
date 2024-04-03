// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuR_R2gjoVQI5QPijaPTeednCMiZXiovI",
  authDomain: "authentication-all-in-one.firebaseapp.com",
  projectId: "authentication-all-in-one",
  storageBucket: "authentication-all-in-one.appspot.com",
  messagingSenderId: "352851297305",
  appId: "1:352851297305:web:67bdfde4e0880c92da9688"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;