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
    img.addEventListener("click", () => {
        // Create Overlay
        let overlay = document.createElement("div");
        overlay.className = "popup-overlay";
        document.body.appendChild(overlay);
        // Create The Popup
        let popupBox = document.createElement("div");
        popupBox.className = "popup-box";
        // if There's alt In Image
        if (img.alt !== null) {
            // Create Heading
            let imgHeading = document.createElement("h3");
            // Create Text For Heading
            let imgText = document.createTextNode(img.alt);
            // Append The Text To The Heading
            imgHeading.appendChild(imgText);
            // Append The Heading To The Popup Box
            popupBox.appendChild(imgHeading);
        };
        // Create The Image
        let popupImage = document.createElement("img");
        popupImage.src = img.src;
        popupBox.appendChild(popupImage);
        // Append The Popup Box To Body
        document.body.appendChild(popupBox);
        // Create Close Span
        let colseButton = document.createElement("span");
        colseButton.className = "close-button";
        let closeText = document.createTextNode("X");
        colseButton.appendChild(closeText);
        popupBox.appendChild(colseButton);
    });
});

// Close Popup In Image
document.addEventListener("click", (e) => {
    if (e.target.className === "close-button") {
        // Remove The Current Popup
        e.target.parentNode.remove();
        document.querySelector(".popup-overlay").remove();
    };
});