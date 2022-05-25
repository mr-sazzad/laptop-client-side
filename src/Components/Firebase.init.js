// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMqurNCjx59QzUN-jnZ69wzkDxzU05cfA",
  authDomain: "laptop-24af0.firebaseapp.com",
  projectId: "laptop-24af0",
  storageBucket: "laptop-24af0.appspot.com",
  messagingSenderId: "330068439994",
  appId: "1:330068439994:web:fa8334b1e5b35a6bc0a383"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;