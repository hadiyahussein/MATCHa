// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAt-pk7Yk9FmvVdHkJ7r4u7HAX90LhZ0eU",
    authDomain: "matcha-722b7.firebaseapp.com",
    projectId: "matcha-722b7",
    storageBucket: "matcha-722b7.appspot.com",
    messagingSenderId: "192509142503",
    appId: "1:192509142503:web:278ab0ce5616e31afbc942"
};

// Initialize Firebase
const firebaseInfo = initializeApp(firebaseConfig);
export default firebaseInfo;
