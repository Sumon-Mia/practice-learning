var mainNav = document.getElementById("main-nav");

var menuOpen = false;

function handleNav () {
    if(menuOpen === false ) {
        mainNav.style.right = "0%";
        menuOpen = true;
    }else if (menuOpen === true ) {
        mainNav.style.right = "-100%";
        menuOpen = false;
    }

}