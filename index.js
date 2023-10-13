import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "bncc-final-project.firebaseapp.com",
    projectId: "bncc-final-project",
    storageBucket: "bncc-final-project.appspot.com",
    messagingSenderId: "956930442347",
    appId: "1:956930442347:web:5c27863e2bd21b22b2dd2e",
    measurementId: "G-8002ZWCSBH"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const app = initializeApp(firebaseConfig);

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
            },
            phonum: {
                required: true,
                maxlength: 14,
                pattern: "^[0][8][0-9]*$",
            },
            list: {
                required: true,
            }
        }
    })

    $("#regform").submit((e)=> {
        var valid = $("#regform").valid();
        if(valid){
            e.preventDefault();
            var inputmail = $("#inputmail").val();
            var inputnama = $("#inputname").val();
            var inputnum = $("#inputphonum").val();
            var events = $("#dropdown").find(':selected').text();
            
            (db.collection("peserta").add({
                Nama: inputmail,
                Email: inputnama,
                Telp: inputnum,
                event: events,
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                alert("Registration Success");
                $("#inputmail").val('');
                $("#inputname").val('');
                $("#inputphonum").val('');
                $("#dropdown").prop('selectedIndex',0);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            }));
        }
        else{
            e.preventDefault();
            alert("Please fill every box correctly!");
        }
    });

    function pos() {
        return Math.floor(($(window).width()/100)+($(window).scrollTop()/10));
    }
    function opac() {
        return (2+($(window).scrollTop()/125)*-1);
    }
    function scl() {
        return (1+$(window).scrollTop()/500)
    }
    
    $(window).scroll(()=>{
        if($(window).scrollTop()){//scroll ke bawah
            $("nav").removeClass("bg-transparent");
            $("nav").addClass("bg-light", 400);
            $(".navbar-toggler-icon").removeClass("whiteicon");
            $(".nav-link").addClass("text-black");
            $(".nav-link").removeClass("text-white");

            $(".judul").css("letter-spacing", pos());
            $(".judul").css("opacity", opac());
            $(".judul2").css("opacity", opac());
            $(".carousel-caption").css({scale:scl()});
        }
        else{//sampai di atas lagi
            $("nav").addClass("bg-transparent", 200);
            $("nav").removeClass("bg-light");
            $(".navbar-toggler-icon").addClass("whiteicon");
            $(".nav-link").addClass("text-white");
            $(".nav-link").removeClass("text-black");
        }
    })
});

