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

//RENDER A 3-CARD GALLERY

//step 1: Make objects for card gallery
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

//Make new consts for step 2
const knives = [bunkaKnife]
const knives1 = [gyutoKnife]
const knives2 = [santokuKnife]


//Step 2: map the knife object arrays
//Bunka knife object
const knifeCards = knives.map((knife) => {

  return `<article>
  <img src="${knife.img.src}"/>
  <h2>${knife.name}</h2>
  <h3>${knife.description}</h3>
  <p>${knife.price}</p>
  <p>${knife.details}</p>
  </article>`
});

//Gyuto knife object
const knifeCards1 = knives1.map((knife) => {
  
  
  return `<article>
  <img src="${knife.img.src}"/>
  <h2>${knife.name}</h2>
  <h3>${knife.description}</h3>
  <p>${knife.price}</p>
  <p>${knife.details}</p>
  </article>`
});

//Santoku knife object
const knifeCards2 = knives2.map((knife) => {
  
  return `<article>
  <img src="${knife.img.src}"/>
  <h2>${knife.name}</h2>
  <h3>${knife.description}</h3>
  <p>${knife.price}</p>
  <p>${knife.details}</p>
  </article>`
});


//Step 3: render the knives
//Bunka knife object
document.querySelector("#knife-list").innerHTML = knifeCards.join(' ');
//Gyuto knife object
document.querySelector("#knife-list1").innerHTML = knifeCards1.join(' ');
//Santoku knife object
document.querySelector("#knife-list2").innerHTML = knifeCards2.join(' ');

//IMAGE GALLERY 

//Step 1: Make object array for image gallery
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

//Step 2: Put original object array of images using map method
const japaneseKnives = knifeImages.map((image) => {
  return `<img src="${image.src}" alt="${image.alt}">`;
});

const updatedJapaneseKnives = knifeImages.map((image) => {
  return `<img src="${image.src}" alt="${image.alt}">`;
});

//console log of images
console.log(updatedJapaneseKnives);

//Step 3: render to html
document.querySelector("#knife-image").innerHTML = updatedJapaneseKnives.join(' ');


// DAY/NIGHT TOGGLE

//Step 1: Make consts for the toggle and the page itself
const toggle = document.getElementById("checkbox");
const page = document.getElementsByTagName("body")[0];

//Step 2: Make EventListener for toggle
toggle.addEventListener("click", function() {
  //for the page to turn dark
  page.classList.toggle("dark-theme");
  //save this info into local storage using setItem
localStorage.setItem("checkBoxSlide", checkbox.checked);
});

//Step 3: Retrieve info from setItem by using getItem 
const checkBoxTransition = localStorage.getItem("checkBoxSlide");
  //if-else statement
  if (checkBoxTransition === "true") {
    checkbox.checked === true;
    page.classList.add("dark-theme");
  } else {
    checkbox.checked = false;
    page.classList.remove("dark-theme");
  }

