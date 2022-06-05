// links in menu
const menuLinks = document.querySelectorAll(".menu_link");

// for each link in menu selection color is hsl(250,69%,59%)
// menuLinks.forEach((link) => {
// link.addEventListener("click", (e) => {
// e.preventDefault();
// menuLinks.forEach((link) => {
// link.classList.remove("menu_link_color");
// });

// link.classList.add("menu_link_color");
// });
// });

// click on app to get all the options
document.querySelector(".app").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".menu_links").classList.add("display_apps");
});

// close the options
document.querySelector(".cancel").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".menu_links").classList.remove("display_apps");
});

// stcky navigation
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const toHome = document.querySelector(".to-home");

const headerObserver = new IntersectionObserver(
  (enteries) => {
    const [entry] = enteries;
    // console.log(entry.isIntersecting)

    if (!entry.isIntersecting) {
      nav.classList.add("sticky_nav");
      toHome.classList.add("to-home-display");
    } else {
      nav.classList.remove("sticky_nav");
      toHome.classList.remove("to-home-display");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

headerObserver.observe(header);

const sectionIntersecting = (targetToObserve, activeLink, view) => {
  const targetObserver = new IntersectionObserver(
    (enteries) => {
      const [entry] = enteries;
      menuLinks.forEach((link) => {
        link.classList.remove("menu_link_color");
      });
      if (entry.isIntersecting) {
        activeLink.classList.add("menu_link_color");
      }
    },
    {
      root: null,
      threshold: view,
    }
  );

  targetObserver.observe(targetToObserve);
};

const homeSection = document.querySelector(".home");
const homeLink = document.querySelector(".home-link");
sectionIntersecting(homeSection, homeLink, 0.15);

const aboutSection = document.querySelector(".about");
const aboutLink = document.querySelector(".about-link");
sectionIntersecting(aboutSection, aboutLink, [0, 0.25, 0.5, 0.75, 1]);

const skillsSection = document.querySelector(".skill");
const skillsLink = document.querySelector(".skills-link");
sectionIntersecting(skillsSection, skillsLink, 1);

const servicesSection = document.querySelector(".services");
const servicesLink = document.querySelector(".services-link");
sectionIntersecting(servicesSection, servicesLink, 0.5);

const portfolioSection = document.querySelector(".portfolio");
const portfolioLink = document.querySelector(".portfolio-link");
sectionIntersecting(portfolioSection, portfolioLink, 0.8);

const contactSection = document.querySelector(".contact");
const contactLink = document.querySelector(".contact-link");
sectionIntersecting(contactSection, contactLink, 0.8);

// scroll

// scroll for menu links
const menuLinksArray = document.querySelectorAll(".menu_links a");

// for each menu link
menuLinksArray.forEach((link) => {
  //  clink on link
  link.addEventListener("click", () => {
    // get the link attribute href
    const target = link.getAttribute("href");
    // console.log(target);

    // target
    const scrollLocation = document.querySelector(`${target}`);

    // scroll to target
    scrollLocation.scrollIntoView({ behavior: "smooth" });
  });
});

// scroll for mouse

const about = document.querySelector("#about");
const scrollbtn = document.querySelector(".mouse");

scrollbtn.addEventListener("click", () => {
  about.scrollIntoView({ behavior: "smooth" });
});

// scroolback to home

const home = document.querySelector("header");
const scrollArr = document.querySelector(".to-home");

scrollArr.addEventListener("click", () => {
  home.scrollIntoView({ behavior: "smooth" });
});

/////////////////////////////////////////////////////////////

const modeBtn = document.querySelector(".mode");
const body = document.querySelector("body");

let darkMode = localStorage.getItem("DARK_MODE_ON");
// let darkMode = false;

if (darkMode === null) {
  s = darkMode = "false";
}

const modeFuc = () => {
  if (darkMode === "false") {
    modeBtn.innerHTML = '<i class="uil uil-moon"></i>';
    body.classList.remove("body-dark-mode");
  } else if ((darkMode = "true")) {
    modeBtn.innerHTML = '<i class="uil uil-sun"></i>';
    body.classList.add("body-dark-mode");
  }
};

modeFuc();

modeBtn.addEventListener("click", () => {
  if (darkMode === "false") {
    localStorage.setItem("DARK_MODE_ON", "true");
    darkMode = "true";
    modeFuc();
  } else if (darkMode === "true") {
    localStorage.setItem("DARK_MODE_ON", "false");
    darkMode = "false";
    modeFuc();
  }
});
