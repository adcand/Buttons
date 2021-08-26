const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider-container");

let counter = 0;

arrowLeft.addEventListener("click", moveLeft);
arrowRight.addEventListener("click", moveRight);
window.addEventListener("resize", fixSlide);

function moveLeft() {
  const exceededLeft = (counter === 0);
  if (exceededLeft) return;
  counter--;
  
  getWidthAndMove();
}

function moveRight() {
  const exceededRight = (counter === 4);
  if (exceededRight) return;
  counter++;

  getWidthAndMove();
}

function fixSlide() {
  getWidthAndMove();
}

function getWidthAndMove() {
  let width = sliderContainer.clientWidth;
  slider.style.transform = `translateX(${-width * counter}px)`;
}
