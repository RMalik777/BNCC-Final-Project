// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDGfMDUsWO3JFV9cGu0mfXC0W0YIeoMczw",
    authDomain: "bncc-final-project.firebaseapp.com",
    projectId: "bncc-final-project",
    storageBucket: "bncc-final-project.appspot.com",
    messagingSenderId: "956930442347",
    appId: "1:956930442347:web:5c27863e2bd21b22b2dd2e",
    measurementId: "G-8002ZWCSBH"
};
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const db = firebase.firestore();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

$(document).ready(function () {
    $("#regform").validate({
        rules: {
            mail: {
                required: true,
                email: true,
            },
            names: {
                required: true,
                minlength: 3,
                // lettersonly: true,
            },
            phonum: {
                required: true,
                maxlength: 14,
                pattern: "^[0][8][0-9]*$",
            },
            list: {
                required: true,
                selectName: {min:1},
            }
            
        }
    })

    $("#submitbtn").click((e)=> {
        // e.preventDefault();
        var inputmail = $("#inputmail").val();
        var inputnama = $("#inputname").val();
        var inputnum = $("#inputphonum").val();
        var event = $("#dropdown").find(':selected').text();
        
        db.collection("peserta").add({
            Nama: inputmail,
            Email: inputnama,
            Telp: inputnum,
            event: event,
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            $("#inputmail").val('');
            $("#inputname").val('');
            $("#inputphonum").val('');
            $("#dropdown").prop('selectedIndex',0);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    });


    $(window).scroll(()=>{
        if($(window).scrollTop()){
            $("nav").removeClass("bg-transparent");
            $("nav").addClass("bg-light", 500);
            $(".nav-link").addClass("text-black");
            $(".nav-link").removeClass("text-white");
        }
        else{
            $("nav").addClass("bg-transparent", 500);
            $("nav").removeClass("bg-light");
            $(".nav-link").addClass("text-white");
            $(".nav-link").removeClass("text-black");
        }
    })


});

