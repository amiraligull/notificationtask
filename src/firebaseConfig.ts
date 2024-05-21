// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZBqzYDnP0WR3l1pDz97MQP3D9Fr-uzvY",
    authDomain: "pushnotification-64611.firebaseapp.com",
    projectId: "pushnotification-64611",
    storageBucket: "pushnotification-64611.appspot.com",
    messagingSenderId: "538328828475",
    appId: "1:538328828475:web:ba89c6b0d431a6bc46ea1e",
    measurementId: "G-QHYEQP3E1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
