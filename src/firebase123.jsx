import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Firebase configuration from Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyBytcSzr8i0PLMQWgdbZEPkXb-scDOWu_s",
    authDomain: "whatsapp-clone-8c1af.firebaseapp.com",
    projectId: "whatsapp-clone-8c1af",
    storageBucket: "whatsapp-clone-8c1af.firebasestorage.app",
    messagingSenderId: "656173970914",
    appId: "1:656173970914:web:7cd9d7ac2afc2bba7375bb",
    measurementId: "G-VMHY9KJLTH"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
