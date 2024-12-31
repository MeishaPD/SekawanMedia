// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported as isAnalyticsSupported } from "firebase/analytics";

import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_K0t2ZD5xfGGaPbEt1PX5svD3fhJQ2-4",
    authDomain: "sekawan-media-project.firebaseapp.com",
    databaseURL: "https://sekawan-media-project-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sekawan-media-project",
    storageBucket: "sekawan-media-project.firebasestorage.app",
    messagingSenderId: "1066960795545",
    appId: "1:1066960795545:web:cbaf9fd2494f6c10028508",
    measurementId: "G-XNQGGEZEZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

let analytics;
isAnalyticsSupported().then((supported) => {
    if (supported) {
        analytics = getAnalytics(app);
    } else {
        console.warn("Firebase Analytics is not supported in this environment.");
    }
}).catch((error) => {
    console.error("Error getting supported environments: ", error);
})

export { database };