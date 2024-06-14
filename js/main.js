// document.addEventListener("DOMContentLoaded", function() {
//     const toggleNavButton = document.getElementById("toggleNav");
//     const nav = document.querySelector("nav");

//     toggleNavButton.addEventListener("click", function() {
//         nav.classList.toggle("visible");
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    var toggleNavButton = document.getElementById("toggleNav");
    var navMenu = document.querySelector("header nav");

    toggleNavButton.addEventListener("click", function() {
        navMenu.classList.toggle("visible");
    });
});