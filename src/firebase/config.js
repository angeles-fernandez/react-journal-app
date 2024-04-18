// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpAC1FpexfcLnDD09zJtnWBAkNgIVfpFU",
    authDomain: "react-cursos-33d2b.firebaseapp.com",
    projectId: "react-cursos-33d2b",
    storageBucket: "react-cursos-33d2b.appspot.com",
    messagingSenderId: "163649921592",
    appId: "1:163649921592:web:89115d13ea81d5db8ffccd"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);