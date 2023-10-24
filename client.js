//DOM elements for primary nav toggle
const menuIcon = document.querySelector("menu-icon");
const gridContainer = document.querySelector("#grid-container");
const siteHeader = document.querySelector("#site-header");
const mobileMediaQuery = window.watchMedia("(max-width:550)");

//Functions

function applyToggleTransition(inputQuery) {
  if (inputQuery.matches) {
    gridContainer.classList.remove("menu-row");
  }
}
