const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const  nextButton = document.querySelector('.btn-right');
const prevButton = document.querySelector('.btn-left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width

//arrange slides next to each other
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1+ 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
//refactor above to loop thru slides and position
const setSlidePosition = (slide, idx) => {
    slide.style.left = slideWidth * idx + 'px'
}
slides.forEach(setSlidePosition)


//when I click left move slides to left
//when I click right move slides to right
nextButton.addEventListener('click', (event) => {
    const currentSlide = track.querySelector('.current_slide')
    const nextSlide = currentSlide.nextElementSibling
    const  amountToMove = nextSlide.style.left;
    console.log(amountToMove)
    //move to the next slide
    track.style.transform = 'translateX(-' + amountToMove + ')'; 
    currentSlide.classList.remove('current_slide') 
    nextSlide.classList.add('current_slide')
})
//when I click indicators move that to slide