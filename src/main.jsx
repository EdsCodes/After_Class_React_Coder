import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy-zQV_HbFJbsMduwvihmosIk2223EmLE",
  authDomain: "coderhouse-54115.firebaseapp.com",
  projectId: "coderhouse-54115",
  storageBucket: "coderhouse-54115.appspot.com",
  messagingSenderId: "1019918519964",
  appId: "1:1019918519964:web:623e56c912e425d3052759"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
