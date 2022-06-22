import sliderImages from "./app2.js";

console.log(sliderImages);
const mappedItem = sliderImages.map((el) => {
  return `        <div class="slider">
    <img src="${el.photo}" class="slider-img" />
    <div class="caption">
      <h4>${el.name}</h4>
      <p>
       ${el.description}
      </p>
    </div>
  </div>`;
});

let slideContainer = document.querySelector(".slider-container");
slideContainer.innerHTML = mappedItem.join(" ");

let sliders = document.querySelectorAll(".slider");
let leftBtn = document.querySelector(".left");
let rightBtn = document.querySelector(".right");

let currentPosition = 0;

// the left button
leftBtn.addEventListener("click", () => {
  if (currentPosition == 0) {
    currentPosition = 3;
    // console.log(currentPosition);
  }
  currentPosition -= 1;

  for (let index = 0; index < sliders.length; index++) {
    sliders[index].style.transform = `translate(-${currentPosition}00%)`;
  }
});

// the right button
rightBtn.addEventListener("click", () => {
  if (currentPosition > sliders.length - 1) {
    rightBtn.style.opacity = "0.4";
    rightBtn.style.cursor = "default";
  } else {
    rightBtn.style.opacity = "1";
    rightBtn.style.cursor = "pointer";
    currentPosition += 1;
    if (currentPosition > sliders.length - 3) {
      currentPosition = 0;
    }
    for (let index = 0; index < sliders.length; index++) {
      sliders[index].style.transform = `translate(-${currentPosition}00%)`;
    }
  }
});

// the slider functionality
function activateSlider() {
  if (currentPosition > sliders.length - 1) {
    rightBtn.style.opacity = "0.4";
    rightBtn.style.cursor = "default";
  } else {
    rightBtn.style.opacity = "1";
    rightBtn.style.cursor = "pointer";
    currentPosition += 1;
    if (currentPosition > sliders.length - 3) {
      currentPosition = 0;
    }
    for (let index = 0; index < sliders.length; index++) {
      sliders[index].style.transform = `translate(-${currentPosition}00%)`;
    }
  }
}
// the time interval
setInterval(() => {
  activateSlider();
}, 4000);
