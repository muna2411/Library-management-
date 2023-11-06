// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZZwmyWsD-qaPg0KjXd86QRwuICS-xze0",
  authDomain: "assignment11-65825.firebaseapp.com",
  projectId: "assignment11-65825",
  storageBucket: "assignment11-65825.appspot.com",
  messagingSenderId: "480366542983",
  appId: "1:480366542983:web:cad5e8ccf5489ac9d4b822"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;