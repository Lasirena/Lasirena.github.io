const projectLabelArt = "project-label-art";
const imageOverlay = document.getElementById("artboard-image-overlay");

// Show all elements with .project class
function showAllProjects() {
    var allProjects = document.getElementsByClassName("project");
    for (let project of allProjects) {
        if (project.classList.contains("hidden")) {
            project.classList.remove("hidden");
        }
    }

    var allMinorProjects = document.getElementsByClassName("minor-project-card");
    for (let project of allMinorProjects) {
        if (project.classList.contains("hidden")) {
            project.classList.remove("hidden");
        }
    }
}

// Show Artboard section
function showArtboard() {
    var board = document.getElementById("artboard");
    if (board.classList.contains("hidden")) {
        board.classList.remove("hidden");
    }
}

// Hide Artboard section
function hideArtboard() {
    var board = document.getElementById("artboard");
    if (!board.classList.contains("hidden")) {
        board.classList.add("hidden");
    }
}

// Remove active marker from all filter buttons
function deactivateFilterButtons() {
    var allFilterButtons = document.getElementsByClassName("projects-filter");
    for (let button of allFilterButtons) {
        if (button.classList.contains("projects-filter-active")) {
            button.classList.remove("projects-filter-active");
        }
    }
}

// Filter projects display to only one selected category
function filterProjects(filterCategoryLabel, filterButtonId) {
    showAllProjects();
    showArtboard();
    deactivateFilterButtons();

    // Activate the corresponding button
    var buttonElement = document.getElementById(filterButtonId);
    if (!buttonElement.classList.contains("projects-filter-active")) {
        buttonElement.classList.add("projects-filter-active");
    }

    // Hide irrelevant projects
    var allProjects = document.getElementsByClassName("project");
    for (let project of allProjects) {
        if (!project.classList.contains(filterCategoryLabel)) {
            project.classList.add("hidden");
        }
    }

    var allMinorProjects = document.getElementsByClassName("minor-project-card");
    for (let project of allMinorProjects) {
        if (!project.classList.contains(filterCategoryLabel)) {
            project.classList.add("hidden");
        }
    }

    // Check if Artboard has to be excluded
    if (filterCategoryLabel != projectLabelArt) {
        hideArtboard();
    }

    AOS.refresh();
}

// Unfilter projects display
function removeProjectFilters(buttonLabel) {
    showAllProjects();
    showArtboard();
    deactivateFilterButtons();

    // Mark the unfilter button as active
    var button = document.getElementById(buttonLabel);
    button.classList.add("projects-filter-active");

    AOS.refresh();
}

// Show/Hide extra project details
function toggleContentVisibility(elementId, buttonId) {
    var element = document.getElementById(elementId);
    var button = document.getElementById(buttonId);
    if (element.className === "hidden") {
        element.className = "";
        button.innerText = "Hide Details";
    } else {
        element.className = "hidden";
        button.innerText = "Show Details";
    }

    AOS.refresh();
}

function closeImageOverlay() {
    var overlay = document.getElementById("artboard-image-overlay");
    overlay.style.display = "none";
}

function expandArt(type, element) {
    var overlay = document.getElementById("artboard-image-overlay");
    var imageSlot = document.getElementById("img-slot");
    var videoSlot = document.getElementById("video-slot");
    var titleSlot = document.getElementById("title-slot");
    var descriptionSlot1 = document.getElementById("description-slot-1");
    var descriptionSlot2 = document.getElementById("description-slot-2");
    var descriptionSlot3 = document.getElementById("description-slot-3");

    overlay.style.display = "block";

    if (type === "video") {
        imageSlot.style.display = "none";
        videoSlot.style.display = "block";
        videoSlot.src = element.src;
    } else if (type === "img") {
        imageSlot.style.display = "block";
        videoSlot.style.display = "none";
        imageSlot.src = element.src;
    }

    titleSlot.innerHTML = element.dataset.title;
    descriptionSlot1.innerHTML = element.dataset.description1;

    if (element.dataset.description2 != undefined) {
        descriptionSlot2.innerHTML = element.dataset.description2;
    } else {
        descriptionSlot2.innerHTML = "";
    }

    if (element.dataset.description3 != undefined) {
        descriptionSlot3.innerHTML = element.dataset.description3;
    } else {
        descriptionSlot3.innerHTML = "";
    }
}