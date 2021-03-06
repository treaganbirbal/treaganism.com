const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".btn-right");
const prevButton = document.querySelector(".btn-left");
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);
const lastSlide = slides.length - 1;
// console.log(lastSlide)

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange slides next to each other
slides[0].style.left = slideWidth * 0 + "px";
slides[1].style.left = slideWidth * 1 + "px";
slides[2].style.left = slideWidth * 2 + "px";
// refactor above to loop thru slides and position
const setSlidePosition = (slide, idx) => {
  slide.style.left = slideWidth * idx + "px";
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left;
  +")";
  currentSlide.classList.remove("current_slide");
  targetSlide.classList.add("current_slide");
};

const removeArrow = (currentSlide, lastSlide) => {
  if (slides.indexOf(currentSlide) === lastSlide) {
    console.log(currentSlide);
  }
};

//when I click left move slides to left

prevButton.addEventListener("click", (event) => {
  const currentSlide = track.querySelector(".current_slide");
  const prevSlide = currentSlide.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);
});
//when I click right move slides to right
nextButton.addEventListener("click", (event) => {
  const currentSlide = track.querySelector(".current_slide");
  const nextSlide = currentSlide.nextElementSibling;

  moveToSlide(track, currentSlide, nextSlide);
  removeArrow(currentSlide, lastSlide);
});
