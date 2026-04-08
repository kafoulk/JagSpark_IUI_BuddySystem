// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgsYtLr2LUwmDqVQyaKeDjNmOkxrSBO_g",
  authDomain: "jagspark-app.firebaseapp.com",
  projectId: "jagspark-app",
  storageBucket: "jagspark-app.firebasestorage.app",
  messagingSenderId: "347385840267",
  appId: "1:347385840267:web:909c57ad54dbe55c5c0a8e",
  measurementId: "G-CJNJYFPJYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);