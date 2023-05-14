// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpS2hdlDAT4UsL2-LqTnL0ca_vRZxjm-U",
  authDomain: "guitar-star-spa.firebaseapp.com",
  projectId: "guitar-star-spa",
  storageBucket: "guitar-star-spa.appspot.com",
  messagingSenderId: "3692113282",
  appId: "1:3692113282:web:513ec4490151e59cdaf39b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = ()=> app