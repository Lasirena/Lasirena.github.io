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
}