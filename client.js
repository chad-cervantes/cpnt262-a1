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

//Event Listener
menuIcon.addEventListener("click", () => {
  gridContainer.classList.toggle("menu-row");
});

//First toggle transition check
applyToggleTransition(mobileMediaQuery);

//click of #header to close
document.addEventListener("click", (e) => {
  if (!(e.target === siteHeader || siteHeader.contains(e.target))) {
    document.querySelector("grid-container").classList.remove("menu-row");
  }
});
