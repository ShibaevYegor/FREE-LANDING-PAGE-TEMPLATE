let one = document.querySelector(".linkedin")
let two = document.querySelector(".instagram")
let three = document.querySelector(".behance")
let four = document.querySelector(".dribble")

let linkedin = document.querySelector(".in")
let instagram = document.querySelector(".insta")
let behance = document.querySelector(".be")
let dribble = document.querySelector(".ball")

function transformOne() {
    linkedin.classList.toggle("action")
}

function transformTwo() {
    instagram.classList.toggle("action")
}

function transformThree() {
    behance.classList.toggle("action")
}

function transformFour() {
    dribble.classList.toggle("action")
}





let five = document.querySelector(".under__img-photoshop")
let six = document.querySelector(".under__img-illustrator")
let seven = document.querySelector(".under__img-after")
let eight = document.querySelector(".under__img-figma")

let ps = document.querySelector(".ps")
let ai = document.querySelector(".ai")
let ae = document.querySelector(".ae")
let fagma = document.querySelector(".figma__img")

function transformFive() {
    ps.classList.toggle("action")
}

function transformSix() {
    ai.classList.toggle("action")
}

function transformSeven() {
    ae.classList.toggle("action")
}

function transformEight() {
    fagma.classList.toggle("action")
}

















// By @AbubakerSaeed96 (Twitter)
// ===================

// Inspiration:
// Oleg Frolov's dribbble shot: https://dribbble.com/shots/5331825-Loading-XXI

// I thought making this would be easy ...but boy 😩

// Thank You For Viewing!
// Say 👋🏻 or hire me 👉🏻 abubaker.saeed.1996@gmail.com
// ================================================================

// Helper(s)
// =========
let $ = (e) => document.querySelector(e);

// Dots
// ====
let dots = $(".dots");

// Function
// ========
function animate(element, className) {
    element.classList.add(className);
    setTimeout(() => {
        element.classList.remove(className);
        setTimeout(() => {
            animate(element, className);
        }, 500);
    }, 2500);
}

// Execution
// =========
animate(dots, "dots--animate");

// Professional Abubaker ;P
// =====================
const twitter = $(".abs-twitter");
window.addEventListener(
    "mousemove",
    () => twitter.classList.add("abs-twitter--show"), { once: true }
);






let bb = document.querySelector(".bb")
window.addEventListener("DOMContentLoaded", function(e) {
    setTimeout(() => {
        bb.classList.add("ss")
        setTimeout(() => {
            bb.style.display = "none"
        }, 500)
    }, 5000)
})