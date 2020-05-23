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
 *
 */

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
// buildNav = () => {
//   const navItemArray = ["Section 1", "Section 2", "Section 3", "Section 4"];

//   const navList = document.querySelector("ul");
//   // navList.className = "navbar__menu";
//   for (const navItem of navItemArray) {
//     const listItem = document.createElement("li");
//     listItem.className = "navbar__menu";
//     listItem.innerHTML = `<a href="#" class="menu__link">${navItem}</a>`;
//     navList.appendChild(listItem);
//   }
// };

// buildNav();

buildNav = () => {
  const navBarList = document.querySelector("ul");
  navBarList.id = "navbar__list";
  // const sections = document.querySelectorAll("section");
  const sections = document.getElementsByTagName("section");

  for (const section of sections) {
    const listItem = document.createElement("li");
    // listItem.className = "navbar__menu";
    listItem.innerHTML = `<a href="#${section.id}" class="menu__link" data-id="${section.id}">${section.dataset.nav}</a>`;
    navBarList.appendChild(listItem);
    // console.log(listItem);
  }
};

buildNav();

// Add class 'active' to section when near top of viewport

makeActive = () => {
  const sections = document.querySelectorAll("section");
  // console.log(sections);
  // const sections = document.getElementsByTagName("section");

  for (const section of sections) {
    const box = section.getBoundingClientRect();
    const id = document.querySelectorAll(`[data-id="${section.id}"]`)[0];
    // You can play with the values in the "if" condition to further make it more accurate.
    if (box.top <= 300 && box.bottom >= 300) {
      section.classList.add("your-active-class");

      console.log(id);
      id.classList.add("active");
      // const id = section.getAttribute("id");
      // document.querySelector(`.${idd}`).classList.add("active");

      // Apply active state on the current section and the corresponding Nav link.
    } else {
      section.classList.remove("your-active-class");
      console.log(id);
      id.classList.remove("active");
      // const id = document.querySelectorAll(
      //   `[data-id="${section.dataset.nav}"]`
      // );
      // document.getElementById(`${id}`).classList.remove("active");
      // Remove active state from other section and corresponding Nav link.
    }
    // console.log(section);
  }
};

document.addEventListener("scroll", function () {
  makeActive();
});

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
