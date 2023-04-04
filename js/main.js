// Unhide all elements with .project class
function unhideAllProjects() {
    var allProjects = document.getElementsByClassName("project");
    for (let project of allProjects) {
        if (project.classList.contains("hidden")) {
            project.classList.remove("hidden");
        }
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
    unhideAllProjects();
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

    AOS.refresh();
}

// Unfilter projects display
function removeProjectFilters(buttonLabel) {
    unhideAllProjects();
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