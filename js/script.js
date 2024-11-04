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


// Tab Functinality

// Select all tab buttons and all tab content sections
const tabButtons = document.querySelectorAll("[data-tab-btn]");
const tabContents = document.querySelectorAll("[data-tab-content]");

// Set up event listeners for each tab button
tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove "active" class from all buttons and content sections
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));

        // Add "active" class to the clicked button
        button.classList.add("active");

        // Show the corresponding tab content
        const targetContent = document.querySelector(`[data-tab-content="${button.dataset.tabBtn}"]`);
        targetContent.classList.add("active");
    });
});
