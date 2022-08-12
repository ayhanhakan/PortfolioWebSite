$(document).ready(function() {

    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function() {

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }

    });

    // smooth scrolling 

    $('a[href*="#"]').on('click', function(e) {

        e.preventDefault();

        $('html, body').animate({

                scrollTop: $($(this).attr('href')).offset().top,

            },
            500,
            'linear'
        );

    });

});

const cursor = document.querySelector(".cursor");
let btn = document.querySelector("a")

window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
    cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
    // console.log(e)
});
window.addEventListener("scroll", () => {
    const fromTop = cursor.getAttribute("data-fromTop");
    cursor.style.top = scrollY + parseInt(fromTop) + "px";
    console.log(scrollY);
});
window.addEventListener("click", () => {
    if (cursor.classList.contains("click")) {
        cursor.classList.remove("click");
        void cursor.offsetWidth; // trigger a DOM reflow
        cursor.classList.add("click");
    } else {
        cursor.classList.add("click");
    }
});



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDErNLrluroh-hUyw0FAYeW-g0gzRlou-g",
    authDomain: "ayhanhakantekir-29407.firebaseapp.com",
    projectId: "ayhanhakantekir-29407",
    storageBucket: "ayhanhakantekir-29407.appspot.com",
    messagingSenderId: "974969829257",
    appId: "1:974969829257:web:fde2d7154ca6ae5d91d358",
    measurementId: "G-ST1DQ8WDD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);