// menu--->
let subMenu = document.querySelector(".banner .nav .sub-menu");
let bar = document.querySelector(".banner .nav .menu .bar");
let popupMenu = document.querySelector(".popup-menu");
let overlay = document.querySelector(".over");

subMenu.addEventListener("click", function () {
    bar.classList.add("active");
    overlay.classList.add("active");
    popupMenu.classList.add("active");
});
overlay.addEventListener("click", function (e) {
    if (e.target == e.currentTarget) {
        bar.classList.remove("active");
        popupMenu.classList.remove("active");
        overlay.classList.remove("active");
    }
});

// menu--->

// port--->
let changeContent = document.querySelectorAll(".port .thumb-port");

changeContent.forEach((port) => {
    port.addEventListener("click", () => {
        showPort();
        document.querySelector(".popup-port iframe").setAttribute("src", port.getAttribute("data-link"));
    });
});

// port--->

// contact--->

// contact--->

//Port__popup--->

let overlayPort = document.querySelector(".port .popup-port");
let popup = document.querySelector(".port .popup-port");
let xMark = document.querySelector(".port .popup-port .fa-circle-xmark");

function showPort() {
    popup.classList.add("active");
    //xu ly render data popup theo dung id
}
xMark.addEventListener("click", function () {
    popup.classList.remove("active");
});
overlayPort.addEventListener("click", function (element) {
    if (element.target == element.currentTarget) {
        popup.classList.remove("active");
    }
});

// db--->

let design = document.querySelector(".port .design");

function renderPort() {
    arrayPort.forEach((element, index) => {
        design.innerHTML += `<div class="thumb-port active" data-tab="${element.tab}" onclick="showPort(${index})">
        <div class="thumb"><img src="img/Dreamscape.jpeg" alt="" /></div>
        <div class="content">
            <p>Hinterland - Real Estate Site Redesign</p>
        </div>
        <div class="funtion">
            <p>Figma</p>
            <p>JavaScript</p>
        </div>
    </div>`;
    });
}
// renderPort();

//About__Age--->

let age = document.querySelector(".about .content .age");
let current = new Date();
age.innerHTML = current.getFullYear() - 2003;

// Multiple Typing Text --->
// const text = document.querySelector(".banner .introduce .fullname .second");

// const textLoad = () => {
//     setTimeout(() => {
//         text.textContent = "CHINH";
//     }, 0);
//     setTimeout(() => {
//         text.textContent = "okooooo";
//     }, 4000);
// };
// textLoad();
// setInterval(textLoad, 12000);

//foot__Year--->

let year = document.querySelector(".foot span");
let now = new Date();
year.innerHTML = now.getFullYear();

// navigation--->

let button = document.querySelectorAll(".popup-menu ul li");
button.forEach((element) => {
    element.addEventListener("click", function () {
        bar.classList.remove("active");
        popupMenu.classList.remove("active");
        overlay.classList.remove("active");
    });
});

// back to top--->

// Get the button:
let mybutton = document.querySelector(".menu .back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = "1";
    } else {
        mybutton.style.opacity = "0";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
mybutton.addEventListener("click", topFunction);
