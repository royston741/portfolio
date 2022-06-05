/////////////////// portfolio ////////////////////

// frontend project array
const fronrEndProjectArray = [
  
  {
    img: "/img/portfolioImg/wb.png",
    title: "WB website",
    codeLink: "https://github.com/royston741/WB-website",
    demoLink: "https://royston741.github.io/WB-website/",
  },
  {
    img: "/img/portfolioImg/iplay.png",
    title: "Iplay website",
    codeLink: "https://github.com/royston741/IPLAY",
    demoLink: "https://royston741.github.io/IPLAY/IPLAY.html",
  },
  {
    img: "/img/portfolioImg/coffee.jpg",
    title: "Coffee website",
    codeLink: "https://github.com/royston741/coffee",
    demoLink: "https://royston741.github.io/coffee/",
  },
];

// backend project array
const backEndProjectArray = [
  {
    img: "/img/portfolioImg/travel.png",
    title: "Travel website",
    codeLink: "https://github.com/royston741/travel-website",
    demoLink: "https://github.com/royston741/travel-website",
  },
];

// react project array
const reactProjectArray = [
  {
    img: "/img/portfolioImg/game.png",
    title: "Number game",
    codeLink: "https://github.com/royston741/number-game",
    demoLink: "https://resplendent-seahorse-a9c384.netlify.app/",
  },
  {
    img: "/img/portfolioImg/food.png",
    title: "ReactMeals",
    codeLink: "https://github.com/royston741/reactMeals",
    demoLink: "https://flourishing-chaja-efe0be.netlify.app/",
  },
];

// all project array
const allProjectArray = [
  ...backEndProjectArray,
  ...reactProjectArray,
  ...fronrEndProjectArray,
];

// Display array
let displayArray = allProjectArray;

// html for project
const projectHtml = (item) => {
  const html = `
            <div class="project">
                <img src="${item.img}" alt="">
                <h4>${item.title}</h4>
                <div class="project-btns">
                    <a href="${item.codeLink}"><button class="project-code-btn">Code</button></a>
                    <a href="${item.demoLink}"><button class="project-demo-btn">Deomo</button></a>
                </div>
            </div>`;

  return html;
};

// functions for displaying projects in project container
const displaProjects = (array) => {
  // remove all projects before
  document.querySelector(".project-container").innerHTML = "";

  // inserting projects from the array
  array.forEach((item) => {
    const html = projectHtml(item);
    document
      .querySelector(".project-container")
      .insertAdjacentHTML("afterbegin", html);
  });
};

// calling sisplay project function for all
displaProjects(displayArray);

const selectArray = document.querySelectorAll(".project-select li");

selectArray.forEach((select) => {
  select.addEventListener("click", () => {

    // 1) --------------------------------------------------
    // selected portfolio add class project selected
    selectArray.forEach((select) => {
      select.classList.remove("project-selected");
    });
    select.classList.add("project-selected");

    // 2)----------------------------------------------------
    // displaying the projects
    let selected = select.innerHTML;

    switch (selected) {
      case "All":
        displayArray = allProjectArray;
        displaProjects(displayArray);
        break;

      case "Frontend":
        displayArray = fronrEndProjectArray;
        displaProjects(displayArray);
        break;

      case "Backend":
        displayArray = backEndProjectArray;
        displaProjects(displayArray);
        break;

      case "React":
        displayArray = reactProjectArray;
        displaProjects(displayArray);
        break;
    }

  });
});
