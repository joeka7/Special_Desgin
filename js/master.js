// Select Skills Selector
let ourSkills = document.querySelector(".skills");
window.onscroll = function() {
    // Skills Offset Top
    let skillsOfSetTop = ourSkills.offsetTop;
    // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;
    // Window Height
    let windowHeight = this.innerHeight;
    // Windwo ScrollTop
    let windowScrollTop = this.pageYOffset;
    if (windowScrollTop > (skillsOfSetTop + skillsOuterHeight - windowHeight)) {
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    };
};

// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach(img => {
    img.addEventListener("click", (e) => {
        // Create Overlay Element
        let overlay = document.createElement("div");
        // Add Class To Overlay
        overlay.className = "popup-overlay";
        // Apend Overlay To The Body
        document.body.appendChild(overlay);
        // Create The Popup
        let popupBox = document.createElement("div");
        // Add Class to The Popup Box
        popupBox.className = "popup-box";
        // Create The Image
        let popupImage = document.createElement("img");
        // Set Image Source
        popupImage.src = img.src;
        // Add Image To Popup Box
        popupBox.appendChild(popupImage);
        // Append The Popup Box To Body
        document.body.appendChild(popupBox);
    });
});