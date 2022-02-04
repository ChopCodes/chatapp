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

function addRoom(){
    var RoomName = document.getElementById("room_name").value;
    firebase.database().ref("/").child(RoomName).update({purpose:"addingroomname"});
    localStorage.setItem("RoomName",RoomName);

    console.log("Test ADDROOM Passed from Local Storage");
     console.log("Test ADDROOM Passed/Failed Notification sent to FirebaseDatabase Google");
};


function getData() { 
  firebase.database().ref("/").on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
    { childKey = childSnapshot.key; roomnames = childKey;
    var x = "<div><h3>"+roomnames+"</h3></div><hr>"
    document.getElementById("output").innerHTML+=x;
    });});}

getData()