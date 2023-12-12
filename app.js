const hamburger = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-container");
const crossIcon = document.querySelector(".cross-icon");
const products = document.querySelector(".products");
const more = document.querySelector(".more");
const itemsContainer = document.querySelector(".items-container");
const moreContainer = document.querySelector(".more-container");

const showHamburgerMenu = () => {
  hamburgerMenu.style.display = "block";
  crossIcon.style.display = "block";
};

const removeHamburgerMenu = () => {
  hamburgerMenu.style.display = "none";
  crossIcon.style.display = "none";
};

const showProduct = () => {
  itemsContainer.style.display = "flex";
};

const removeProducts = () => {
  itemsContainer.style.display = "none";
};

const showMoreItems = () => {
  moreContainer.style.display = "flex";
};

const removeItems = () => {
  moreContainer.style.display = "none";
};

hamburger.addEventListener("click", showHamburgerMenu);
crossIcon.addEventListener("click", removeHamburgerMenu);
products.addEventListener("mouseenter", showProduct);
products.addEventListener("mouseleave", removeProducts);
more.addEventListener("mouseenter", showMoreItems);
more.addEventListener("mouseleave", removeItems);
