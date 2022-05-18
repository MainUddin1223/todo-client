// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBITBCFn2R7vOZ4JbClEh-OiR-F_x4PLj4",
    authDomain: "to-do-app-67563.firebaseapp.com",
    projectId: "to-do-app-67563",
    storageBucket: "to-do-app-67563.appspot.com",
    messagingSenderId: "497009784007",
    appId: "1:497009784007:web:fa044ed080e51227ce7ae2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth
