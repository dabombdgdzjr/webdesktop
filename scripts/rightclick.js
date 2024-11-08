document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
    document.getElementById(
        "contextMenu").style.display = "none"
}

function rightClick(e) {
    e.preventDefault();

    if (document.getElementById(
        "contextMenu").style.display == "block")
        hideMenu();
    else {
        let menu = document
            .getElementById("contextMenu")

        menu.style.display = 'block';
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
    }
}
var checked = "medium";
var large = document.getElementById("large");
var medium = document.getElementById("medium");
var small = document.getElementById("small");
var icons = document.getElementsByClassName("iconClickable");
var iconsText = document.getElementsByClassName("iconText");
var check = function(name) {
    
    if (name == "small") {
        checked = "small";
        //small.setAttribute("checked");
        //large.removeAttribute("checked");
        //medium.removeAttribute("checked");
        for(var i = 0; i < icons.length; i++)
            {
                icons[i].style.width = "32px";
                icons[i].style.height = "32px";
                iconsText[i].style.fontsize = "7pt"
            }
    }
    if (name == "medium") {
        checked = "medium";
        //medium.setAttribute("checked");
        //large.removeAttribute("checked");
        //small.removeAttribute("checked");
        for(var i = 0; i < icons.length; i++)
            {
                icons[i].style.width = "48px";
                icons[i].style.height = "48px";
                iconsText[i].style.fontsize = "9pt"
            }
    }
    if (name == "large") {
        checked = "large";
        //large.setAttribute("checked");
        //small.removeAttribute("checked");
        //medium.removeAttribute("checked");
        for(var i = 0; i < icons.length; i++)
            {
                icons[i].style.width = "64px";
                icons[i].style.height = "64px";
                iconsText[i].style.fontsize = "11pt"
            }
    }
};