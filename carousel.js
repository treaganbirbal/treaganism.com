const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const  nextButton = document.querySelector('.btn-right');
const prevButton = document.querySelector('.btn-left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width

//when I click left move slides to left
//when I click right move slides to right
//when I click indicators move that to slide