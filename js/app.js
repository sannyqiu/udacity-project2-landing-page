/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 */

const sections = document.getElementsByTagName("section");
const nav = document.getElementsByClassName("navbar__menu")[0];

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

buildNav = () => {
  const navBarList = document.querySelector("ul");
  navBarList.id = "navbar__list";

  for (const section of sections) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#${section.id}" class="menu__link" data-id="${section.id}">${section.dataset.nav}</a>`;
    navBarList.appendChild(listItem);
  }
};

// Add class 'active' to section when near top of viewport

makeActive = () => {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    const id = document.querySelectorAll(`[data-id="${section.id}"]`)[0];
    if (box.top <= 300 && box.bottom >= 300) {
      section.classList.add("your-active-class");
      id.classList.add("active");
    } else {
      section.classList.remove("your-active-class");
      console.log(id);
      id.classList.remove("active");
    }
  }
};

// Hide nav bar when not scrolling
let timer = null;
hideNav = () => {
  if (timer !== null) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    nav.style.display = "none";
  }, 500);
};

// Build menu
buildNav();

// Set sections as active
document.addEventListener("scroll", function () {
  makeActive();
});

// Hide and show nav bar
document.addEventListener("scroll", hideNav);

document.addEventListener("scroll", function () {
  nav.style.display = "block";
});
