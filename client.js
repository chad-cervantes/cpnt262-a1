//MENU HAMBURGER TOGGLE
//DOM elements for primary nav toggle
const menuIcon = document.querySelector("#menu-icon-container");
const gridContainer = document.querySelector("#grid-container");
const siteHeader = document.querySelector("#site-header");

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


//click of #header to close
document.addEventListener("click", (e) => {
  if (!(e.target === siteHeader || siteHeader.contains(e.target))) {
    document.querySelector("grid-container").classList.remove("menu-row");
  }
});

//RENDER A CARD GALLERY

//Make objects for card gallery
const bunkaKnife  = 
{
 name: "Bunka", 
 description: "Like a Santoku knife, but a little longer",
 price: "$100",
 img: {src:"assets/images/bunka-knife.png", alt:`${this.name} knife`},
 details: "learn more"
};

const gyutoKnife = 
{name: "Gyuto",
description: "Main chef's kitchen knife", 
price: "$100",
img: {src:"assets/images/gyuto-knife.png", alt:`${this.name} knife`},
details: "learn more"
};

const santokuKnife = 
{name: "Santoku",
description: "Knife for vegetables, meats, & fish", 
price: "$100",
img: {src:"assets/images/santoku-knife.png", alt:`${this.name} knife`},
details: "learn more"
};


//Add functions
function putUpImage(infoText, altText) {
  return `<img src="${infoText}" alt="${altText}"`;
} 
function learnMore(details) {
  return details
}

const knives = [bunkaKnife, gyutoKnife, santokuKnife]


//Make the loop
// for (knife of knives) {
//   if (knife.name === "Bunka") {
//     knife.details = details("learn more");
//   } else if (knife.name === "Gyuto") {
//       knife.details = details("learn more");
//   } else if (knife.name === "Santoku") {
//     knife.details === details("learn more");
//   }
// };

const knifeCards = knives.map((knife) => {
  
  return `<article>
  <img src="${knife.img.src}"/>
  <h2>${knife.name}</h2>
  <h3>${knife.description}</h3>
  <p>${knife.price}</p>
  <p>${knife.details}</p>
  </article>`
});


//render the knives
document.querySelector("#knife-list").innerHTML = knifeCards.join(' ');

//IMAGE GALLERY 

//Make object array for image gallery
const knifeImages = [
  {src: "assets/images/bunka-knife.png", alt: "Bunka knife"},
  {src: "assets/images/burja-knife.PNG", alt: "Burja knife"},
  {src: "assets/images/deba-knife.png", alt: "Deba knife"},
  {src: "assets/images/garasuki-knife.png", alt: "Garasuki knife"},
  {src: "assets/images/gyuto-knife.png", alt: "Gyuto knife"},
  {src: "assets/images/kiritsuke-knife.png", alt: "Kritsuke knife"},
  {src: "assets/images/nakiri-knife.png", alt: "Nakiri knife"},
  {src: "assets/images/petty-knife.png", alt: "Petty knife"},
  {src: "assets/images/santoku-knife.png", alt: "Santoku knife"},
  {src: "assets/images/sujihiki-knife.PNG", alt: "Sujihiki knife"},
  {src: "assets/images/usuba-knife.png", alt: "Usaba knife"},
  {src: "assets/images/yanagiba-knife..png",alt: "Yanagiba knife"},
];

//Put original object array of images using map method
const japaneseKnives = knifeImages.map((image) => {
  return `<img src="${image.src}" alt="${image.alt}">`;
});

const updatedJapaneseKnives = knifeImages.map((image) => {
  return `<img src="${image.src}" alt="${image.alt}">`;
});

//console log of images
console.log(updatedJapaneseKnives);

//render to html
document.querySelector("#knife-image").innerHTML = updatedJapaneseKnives.join(' ');

// DAY/NIGHT TOGGLE
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

const currentTheme = localStorage.getItem('theme');

//if-statement(s)

if(currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if(currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

//function(s)
function switchTheme(e) {
  if(e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);


