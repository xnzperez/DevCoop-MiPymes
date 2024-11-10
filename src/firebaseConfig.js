// Importa las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Configuración de Firebase para tu aplicación
const firebaseConfig = {
    apiKey: "AIzaSyC6uTEVhyyR8cMl6B-IO1cr3NIdFmhATHw",
    authDomain: "devcoop-ecommerce-7108d.firebaseapp.com",
    projectId: "devcoop-ecommerce-7108d",
    storageBucket: "devcoop-ecommerce-7108d.appspot.com",
    messagingSenderId: "951968852475",
    appId: "1:951968852475:web:64eedb1053db302ca3c35e",
    measurementId: "G-6VCNV5NCV3"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Configura los proveedores de autenticación
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
