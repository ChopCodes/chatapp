//Firebase : 
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAELMmLwgI09xirY9epPKbypgmnqJXdeFQ",
  authDomain: "kwitter-webapp-chating.firebaseapp.com",
  databaseURL: "https://kwitter-webapp-chating-default-rtdb.firebaseio.com",
  projectId: "kwitter-webapp-chating",
  storageBucket: "kwitter-webapp-chating.appspot.com",
  messagingSenderId: "1042114167711",
  appId: "1:1042114167711:web:25cfbaf4ffaf35cd3333aa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function login(){
    var username = document.getElementById("login").value;
    localStorage.setItem("username",username);
      
    window.location="dashboard/dashboard.html"
}
