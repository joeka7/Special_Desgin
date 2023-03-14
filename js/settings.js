// Handle Active State
function handleActive(ev) {
    // Remove Class Active From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });
    // Add Class Active When He Target
    ev.target.classList.add("active");
};

// Click On Setting Icon
document.querySelector(".toggle-settings i").onclick = function() {
    // Toggle Class Fa-spin For Rotation On self
    this.classList.toggle("fa-spin");
    // Toggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Color
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach(li => {
    li.addEventListener("click", function(e) {
        // Set Color On Root
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        // Set Color In Local Storage
        localStorage.setItem("color-option", e.target.dataset.color);
        handleActive(e);
    });
});

// Check If There's Color in Local Storage
let mainColors = localStorage.getItem("color-option");
if (mainColors !== null) {
    document.documentElement.style.setProperty("--main-color", mainColors);
    // Remove Class Active From All Colors List
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
        // Add Class Active On Element With Data-color === Local Storage Item
        if (element.dataset.color === mainColors) {
            element.classList.add("active");
        };
    });
};

// Random Background Option
let backgroundOption = true;
// Variable To Control The Background Interval
let backgroundInterval;
// Check If There's Local Storage Random Background Item
let backgroundLocStorage = localStorage.getItem("background-option");

// Switch Random Background
const randomBackgrEl = document.querySelectorAll(".random-background span");
// Loop On All Spans
randomBackgrEl.forEach(span => {
    span.addEventListener("click", function(e) {
        handleActive(e);
        // Stop Random Imgs Or Continue
        if (e.target.dataset.background === "yes") {
            backgroundOption = true;
            randomizeImgs();
            localStorage.setItem("background-option", true);
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background-option", false);
        };
    });
});

// Check If Random Background Local Storage Is Not Empty
if (backgroundLocStorage !== null) {
    // Remove Active Class From All Spans
    document.querySelectorAll(".random-background span").forEach(element => {
        element.classList.remove("active");
    });
    if (backgroundLocStorage === "true") {
        backgroundOption = true;
        document.querySelector(".random-background .yes").classList.add("active");
    } else {
        backgroundOption = false;
        document.querySelector(".random-background .no").classList.add("active");
    };
};

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");
// Get Array Of Images
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
// Function To Randomize Imgs
function randomizeImgs() {
    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {
            // Get Random Number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            // Change Background Image Url
            landingPage.style.backgroundImage = 'url("imgs/'+ imgsArray[randomNumber] +'")';
        }, 10000);
    }
};
randomizeImgs();

// Select If User Want The Bullets Or Not
const showBullets = document.querySelectorAll(".option-box .show-bullets span");
let bulletsContainer = document.querySelector(".nav-bullets");
showBullets.forEach(span => {
    span.addEventListener("click", (e) => {
        if (span.dataset.bullets === "yes") {
            bulletsContainer.style.display = "block";
            localStorage.setItem("bullets-option", "block");
        } else {
            bulletsContainer.style.display = "none";
            localStorage.setItem("bullets-option", "none");
        };
        handleActive(e);
    });
});

// Bullets Option In Local Storage
let bulletsLocalStorage = localStorage.getItem("bullets-option");
if (bulletsLocalStorage !== null) {
    showBullets.forEach(span => {
        span.classList.remove("active");
    });
    if (bulletsLocalStorage === "block") {
        bulletsContainer.style.display = "block";
        document.querySelector(".show-bullets .yes").classList.add("active");
    } else {
        bulletsContainer.style.display = "none";
        document.querySelector(".show-bullets .no").classList.add("active");
    };
};

// Reset Button
document.querySelector(".reset-option").onclick = function() {
    localStorage.removeItem("color-option");
    localStorage.removeItem("background-option");
    localStorage.removeItem("bullets-option");
    window.location.reload();
};