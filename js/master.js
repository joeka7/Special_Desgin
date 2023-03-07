// Click On Setting Icon
document.querySelector(".toggle-settings i").onclick = function() {
    // Toggle Class Fa-spin For Rotation On self
    this.classList.toggle("fa-spin");
    // Toggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");
}

// Switch Color
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach(li => {
    li.addEventListener("click", function(e) {
        // Set Color On Root
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
    });
});

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");
// Get Array Of Images
let imgsArray = ["landing_01.jpg", "landing_02.jpg", "landing_03.jpg", "landing_04.jpg", "landing_05.jpg"];
// Get Random Number
setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    // Change Background Image Url
    landingPage.style.backgroundImage = 'url("imgs/'+ imgsArray[randomNumber] +'")';
}, 9000);