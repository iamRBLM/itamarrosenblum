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

// Encapsulation: Dark mode function
(function () {
  // Access the localstorage key
  let darkmode = localStorage.getItem("darkmode");
  // Target the button
  const darkModeBtn = document.getElementById("dark-mode-btn");
  // Target the ion-icon element
  let darkModeIcon = document.querySelector(".dark-mode_icon");
  // Target the html element
  let html = document.querySelector("html");
  // Target all elements with class bg-white
  let bgWhite = document.querySelectorAll(".bg-white");

  // Arrow function: enable dark mode
  const enableDarkmode = () => {
    // Update the localstorage value
    localStorage.setItem("darkmode", "active");
    // Change icon
    darkModeIcon.name = "sunny";
    // Change dark mode background color
    html.classList.add("bg-black");
    document.body.classList.add("bg-black");
    bgWhite.forEach((bgWhiteClass) => {
      bgWhiteClass.classList.add("bg-black");
    });
  };

  // Arrow function: disable dark mode
  const disableDarkMode = () => {
    // Update the localstorage value
    localStorage.setItem("darkmode", null);
    // Change icon
    darkModeIcon.name = "moon";
    // Change dark mode background color
    html.classList.remove("bg-black");
    document.body.classList.remove("bg-black");
    bgWhite.forEach((bgWhiteClass) => {
      bgWhiteClass.classList.remove("bg-black");
    });
  };

  // when page loads
  if (darkmode === "active") enableDarkmode();

  // Event lisitner: when button is clicked event lisitener
  darkModeBtn.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkmode() : disableDarkMode();
  });
})();
