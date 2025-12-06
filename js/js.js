function menuToggle() {
  // Target the nav element
  let = menuDisplay = document.querySelector(".hero-section_main-nav");
  // Target the ion-icon element
  let = humburgerIcon = document.querySelector(".hero-section_humburger-icon");

  // Change humburger icon
  if (humburgerIcon.name === "menu") {
    humburgerIcon.name = "close";
  } else {
    humburgerIcon.name = "menu";
  }

  // Change the nav display
  menuDisplay.classList.toggle("u-mobile-flex");
}

// Dark mode function
let darkModeFn = () => {
  // Target the ion-icon element
  let darkModeIcon = document.querySelector(".dark-mode_icon");
  // Target the html element
  let html = document.querySelector("html");
  // Target the body element
  let body = document.querySelector("body");
  // Target all elements with class bg-white
  let bgWhite = document.querySelectorAll(".bg-white");

  // Change dark mode icon
  if (darkModeIcon.name == "moon") {
    darkModeIcon.name = "sunny";
  } else {
    darkModeIcon.name = "moon";
  }

  // Change dark mode background color
  html.classList.toggle("bg-black");
  body.classList.toggle("bg-black");
  bgWhite.forEach((bgWhiteClass) => {
    bgWhiteClass.classList.toggle("bg-black");
  });
};
