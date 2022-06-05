//--------------------------- Skills ------------------------

////////// FRONTEND /////////////
// inserting skills in frontend

// frontend skill array
const frontEndArray = [
    {
      tool: "HTML",
      comp: 90,
    },
    {
      tool: "CSS",
      comp: 70,
    },
    {
      tool: "Javascript",
      comp: 60,
    },
    {
      tool: "JQuery",
      comp: 50,
    },
    {
      tool: "React",
      comp: 70,
    },    {
      tool: "Redux",
      comp: 70,
    },
  ];
  
  // selecting frontend  skill section
  const frontEnd = document.querySelector(".frontend .skill-tools");
  
  frontEndArray.forEach((skill) => {
    const frontEndHtml = `  
        <li class="skill-tool">
        <div class="skill-tool-detail">
        <h4>${skill.tool}</h4>
        <p>${skill.comp}%</p>
        </div>
        <progress value="${skill.comp}" max="100"></progress>
        </li>`;
  
    frontEnd.insertAdjacentHTML("beforeend", frontEndHtml);
  });
  
  ////////// BACKEND /////////////
  // inserting skills in backend
  
  
  // Backend skill array
  const backEndArray = [
    {
      tool: "Node.js",
      comp: 70,
    },
    {
      tool: "Express.js",
      comp: 60,
    },
    {
      tool: "Python",
      comp: 60,
    }
  ];
  
  // selecting frontend  skill section
  const backEnd = document.querySelector(".backend .skill-tools");
  
  backEndArray.forEach((skill) => {
    const backEndHtml = `  
        <li class="skill-tool">
        <div class="skill-tool-detail">
        <h4>${skill.tool}</h4>
        <p>${skill.comp}%</p>
        </div>
        <progress value="${skill.comp}" max="100"></progress>
        </li>`;
  
    backEnd.insertAdjacentHTML("beforeend", backEndHtml);
  });
  
  ////////// DATABASE /////////////
  // inserting skills in database
  
  // Backend skill array
  const databaseArray = [
    {
      tool: "MongoDB",
      comp: 60,
    },
    {
      tool: "Mongoose",
      comp: 60,
    },
    {
      tool: "MySQL",
      comp: 40,
    }
  ];
  
  // selecting database skill section
  const database = document.querySelector(".database .skill-tools");
  
  databaseArray.forEach((skill) => {
    const databaseHtml = `  
        <li class="skill-tool">
        <div class="skill-tool-detail">
        <h4>${skill.tool}</h4>
        <p>${skill.comp}%</p>
        </div>
        <progress value="${skill.comp}" max="100"></progress>
        </li>`;
  
    database.insertAdjacentHTML("beforeend", databaseHtml);
  });
  
  
// toggle for skill boxes
const skillBoxes = document.querySelectorAll(".skill-box");

skillBoxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.preventDefault();
    box.querySelector(".down-arrow").classList.toggle("rotate-arrow");
    box
      .querySelector(".skill-tools")
      .classList.toggle("skill-box-content-display");
  });
});
