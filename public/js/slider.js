const slides = document.querySelectorAll(".slide");
const sliderLeftBtn = document.querySelector(".slide-left");
const sliderRighttBtn = document.querySelector(".slide-right");

let currSlide = 0;
let maxSlide = slides.length;

slides.forEach((s, i) => {
  s.style.transform = `translateX(${100 * i}%)`;
});

sliderRighttBtn.addEventListener("click", () => {
  if ((currSlide === maxSlide-1)) {
    currSlide = 0;
  } else {
    currSlide++;
  }

  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - currSlide)}%)`;
  });
});


sliderLeftBtn.addEventListener("click", () => {
    if ((currSlide === 0)) {
      currSlide = maxSlide-1;
    } else {
      currSlide--;
    }
  
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - currSlide)}%)`;
    });
  });
  