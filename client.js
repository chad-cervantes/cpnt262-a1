//MENU HAMBURGER TOGGLE
//DOM elements for primary nav toggle
// const menuIcon = document.querySelector("#menu-icon-container");
// const gridContainer = document.querySelector("#grid-container");
// const siteHeader = document.querySelector("#site-header");
// const mobileMediaQuery = window.watchMedia("(max-width:550)");

//Functions

// function applyToggleTransition(inputQuery) {
//   if (inputQuery.matches) {
//     gridContainer.classList.remove("menu-row");
//   }
// }

//Event Listener
// menuIcon.addEventListener("click", () => {
//   gridContainer.classList.toggle("menu-row");
// });

//First toggle transition check
// applyToggleTransition(mobileMediaQuery);

//click of #header to close
// document.addEventListener("click", (e) => {
//   if (!(e.target === siteHeader || siteHeader.contains(e.target))) {
//     document.querySelector("grid-container").classList.remove("menu-row");
//   }
// });

//RENDER A CARD GALLERY

const testKnife = {
  name: "sharp knife"
}

//Make objects for card gallery
const bunkaKnife  = 
{
 name: "Bunka", 
 description: "Like a Santoku knife, but a little longer",
 price: "$100",
 img: {src:"assets/images/bunka-knife.png", alt:`${this.name} knife`},
 details: "learn more",
};

const gyutoKnife = 
{name: "Gyuto",
description: "Main chef's kitchen knife", 
price: "$100",
img: {src:"assets/images/gyuto-knife.png", alt:`${this.name} knife`},
details: "learn more",
};

const santokuKnife = 
{name: "Santoku",
description: "Knife for vegetables, meats, & fish", 
price: "$100",
img: {src:"assets/images/santoku-knife.png", alt:`${this.name} knife`},
details: "learn more",
};

// function abc(knife) {
//   let a = document.getElementById("knife-list");
//   a.innerHTML = knife.details
// }

// abc(bunkaKnife);

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
  console.log(knife);

  return `<article>
  <img src="${knife.img.src}"/>
  <h2>${knife.name}: ${knife.details}</h2>
  ${knife.putUpImage ? knife.putUpImage(): "No Image"}
  <h3>${knife.description}</h3>
  <p>${knife.price}</p>
  </article>`
});


//render the knives
document.querySelector("#knife-list").innerHTML = knifeCards;

//IMAGE GALLERY 


// const knifeImages = [
//   {
//   bunka: "assets/images/bunka-knife.png",

//   src: "assets/images/burja-knife.PNG",

//   src: "assets/images/deba-knife.png",

//   src: "assets/images/garasuki-knife.png",

//   src: "assets/images/gyuto-knife.png",

//   src: "assets/images/kiritsuke-knife.png",

//   src: "assets/images/nakiri-knife.png",

//   src: "assets/images/petty-knife.png",

//   src: "assets/images/santoku-knife.png",

//   src: "assets/images/sujihiki-knife.PNG",

//   src: "assets/images/usaba-knife.png",

//   src: "assets/images/yanagiba-knife.png",
// }
// ]



//NIGHT TOGGLE
// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// const currentTheme = localStorage.getItem('theme');

//if-statement(s)

// if(currentTheme) {
//   document.documentElement.setAttribute('data-theme', currentTheme);

//   if(currentTheme === 'dark') {
//     toggleSwitch.checked = true;
//   }
// }

//function(s)
// function switchTheme(e) {
//   if(e.target.checked) {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     localStorage.setItem('theme', 'dark');
//   }
//   else {
//     document.documentElement.setAttribute('data-theme', 'light');
//     localStorage.setItem('theme', 'light');
//   }
// }

// toggleSwitch.addEventListener('change', switchTheme, false);


