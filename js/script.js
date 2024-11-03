/**
 * @copyright codewithsadee 2023
 * @author Sadee <codewithsadee24@gmail.com>
 */

"use strict";

// light and dark mode

// Node Element
const $themeBtn = document.querySelector("[data-theme-btn]");
const $HTML = document.documentElement;

// Boolean | String

let isDark = window.matchMedia("(prefer-color-scheme:dark)").matches;

if(sessionStorage.getItem("theme")){
    $HTML.dataset.theme = sessionStorage.getItem("theme")
}
else{
    $HTML.dataset.theme=isDark ? "dark" : "light";
    sessionStorage.setItem("theme",$HTML.dataset.theme);
}

const changeTheme = () => {

    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" :"light";

    sessionStorage.setItem("theme",$HTML.dataset.theme);
}

$themeBtn.addEventListener("click",changeTheme);
