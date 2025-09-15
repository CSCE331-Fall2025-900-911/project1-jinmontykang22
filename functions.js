function toggleStyleSheet() {
    var element = document.getElementById("mainStyleSheet");

    var attr = element.getAttribute("href");
    if (attr == "styles.css") {
        var newAttr = "styles2.css";
    } else {
        var newAttr = "styles.css";
    }

    element.setAttribute("href", newAttr);

    localStorage.setItem("savedStyle", newAttr);
}

window.onload = function() {
    var savedAttr = localStorage.getItem("savedStyle");
    var elem2 = document.getElementById("mainStyleSheet");
    elem2.setAttribute("href", savedAttr);
}