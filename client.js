//DOM elements for primary nav toggle
const menuIcon = document.querySelector("#menu-icon-container");
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

//Render a card gallery

//Make objects for card gallery
const bunkaKnife  = 
{
 name: "Bunka", 
 description: "Like a Santoku knife, but a little longer",
 price: "$100",
 getImage() {
  return `<img src="assets/images/bunka-knife.png" alt="${this.name} knife" />`;
  }
};

const gyutoKnife = 
{name: "Gyuto",
description: "Main chef's kitchen knife", price: "$100",
getImage() {
  return `<img src="assets/images/gyuto-knife.png" alt="${this.name} knife" />`;
  }
};

const santokuKnife = 
{name: "Santoku",
description: "Knife for vegetables, meats, & fish", 
price: "$100",
getImage() {
  return `<img src="assets/images/santoku-knife.png" alt="${this.name} knife" />`;
  }
};

//Add functions
function putUpImage(infoText, altText) {
  return `<img src="${infoText}" alt="${altText}"`;
} 
function learnMore(details = "learn more") {
  return details
}

const knives = [bunkaKnife, gyutoKnife, santokuKnife]

//Make the loop
for (knife of knives) {
  if (knife.name === "Bunka") {
    knife.details = details("learn more");
  } else if (knife.name === "Gyuto") {
      knife.details = details("learn more");
  } else if (knife.name === "Santoku") {
    knife.details === details("learn more");
  }
};

const knifeCards = knives.map((knife)) => {
  return `<article>
  <h2>${knife.name}: ${knife.details}</h2>
  ${knife.putUpImage ? knife.putUpImage(): "No Image"}
  <h3>${knife.description}</h3>
  <p>${knife.price}</p>
  </article>`
};

//render the knives
document.querySelector("#knife-list").innerHTML = knifeCards.map((knife) => knife).join("");


// ["Bunka", "Gyuto", "Santoku", "Petty", "Usaba", "Nakiri", "Deba", "Yanagiba", "Garasuki", "Sujihiki", "Kiritsuke", "Burja"] 

// const knifeDescriptionArray = ["Like a Santoku knife, but a little longer", "Main chef's kitchen knife", "Knife for vegetables, meats, & fish", "Paring knife", "Like a nakiri knife, but smaller", "Thin rectangular vegetable knife", "Heavy knife for bigger tasks", "Cuts thin slices of fish & large cuts of meat", "Designed to slice boneless meat", "Designed to slice fish, vegetables, & fruit", "Prosciutto knife"]

//Make function & querySelectors
// let cards = document.querySelector('.card-container');
 
// for (let i = 0; i < knifeTitleArray.length; i++) {
    
//   let fetch = fetch(document.querySelector('.card-container').innerHTML);
//     cards.innerHTML = `<div class="cards">
//     <div class="card-content">
//       <h2>${knifeTitleArray[i]}</h2>
//       <p>${knifeDescriptionArray[i]}</p>
//       <a class="cta" href="#"><u>Check out brands & prices</u></a>
//     </div>
//   </div>` + fetch; 
// }
