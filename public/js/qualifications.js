
//////////////////////////// Qualification ///////////////////////////////

const education = document.querySelector(".education");
const work = document.querySelector(".work");

// Education ------------------
education.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".education").classList.add("active");
  document.querySelector(".work").classList.remove("active");
  document.querySelector(".work-box").classList.add("display-qualification");
  document.querySelector(".education-box").classList.remove("display-qualification");
});

const workDone=false
// work --------------------------
work.addEventListener("click", (e) => {
  e.preventDefault();
  if(workDone){
  document.querySelector(".work").classList.add("active");
  document.querySelector(".education").classList.remove("active");
  document.querySelector(".education-box").classList.add("display-qualification");
  document.querySelector(".work-box").classList.remove("display-qualification");
}
});
