// Carousel Code from Kevin Powell: How to code a carousel with HTML, CSS and JavaScript - from scratch (part 1 and part 2) on YouTube
// https://www.youtube.com/watch?v=gBzsE0oieio&t=3387s

const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__btn--right');
const prevButton = document.querySelector('.carousel__btn--left');

const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);

//arrange slides
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

//When clicked, move slide to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    //Move to the next slide
    moveToSlide(track, currentSlide, nextSlide);
});

//When clicked, move slide to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
});

console.log(slides);

// Sightseeing Carousel
const track2 = document.querySelector('.carousel_track2');
const slides2 = Array.from(track2.children);
const nextButton2 = document.querySelector('.carousel__btn--right2');
const prevButton2 = document.querySelector('.carousel__btn--left2');

const slideWidth2 = slides2[0].getBoundingClientRect().width;
console.log(slideWidth2);

//arrange slides
const setSlidePosition2 = (slide2, index2) => {
    slide2.style.left = slideWidth2 * index2 + 'px';
};

slides2.forEach(setSlidePosition2);

const moveToSlide2 = (track2, currentSlide2, targetSlide2) => {
    track2.style.transform = 'translateX(-' + targetSlide2.style.left + ')';
    currentSlide2.classList.remove('current-slide2');
    targetSlide2.classList.add('current-slide2');
};

//When clicked, move slide to the right
nextButton2.addEventListener('click', e => {
    const currentSlide2 = track2.querySelector('.current-slide2');
    const nextSlide2 = currentSlide2.nextElementSibling;
    //Move to the next slide
    moveToSlide2(track2, currentSlide2, nextSlide2);
});

//When clicked, move slide to the left
prevButton2.addEventListener('click', e => {
    const currentSlide2 = track2.querySelector('.current-slide2');
    const prevSlide2 = currentSlide2.previousElementSibling;

    moveToSlide2(track2, currentSlide2, prevSlide2);
});

console.log(slides2);