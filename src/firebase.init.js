// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebas/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSQCjBoV7gTmL7dhmn5ATEXrezW8lcFTc",
    authDomain: "genius-car-services-61b1e.firebaseapp.com",
    projectId: "genius-car-services-61b1e",
    storageBucket: "genius-car-services-61b1e.appspot.com",
    messagingSenderId: "354059478924",
    appId: "1:354059478924:web:6fa61a596c92f6ed6a18a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;