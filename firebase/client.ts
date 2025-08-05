import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCTIQt4_A7RAqGIWIMs4EvprC09NLc0od0",
    authDomain: "ai-interviewpf.firebaseapp.com",
    projectId: "ai-interviewpf",
    storageBucket: "ai-interviewpf.appspot.com",
    messagingSenderId: "959884022883",
    appId: "1:959884022883:web:c1306b7a0e429a8d035456",
    measurementId: "G-RN98S1M5K7"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);