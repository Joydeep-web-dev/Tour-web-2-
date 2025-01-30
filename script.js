const slider = document.querySelector('.slider');
let index = 0;
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

function moveToNextSlide() {
    index++;
    if (index >= totalImages) {
        index = 0; 
    }
    updateSliderPosition();
}

function moveToPreviousSlide() {
    index--;
    if (index < 0) {
        index = totalImages - 1;
    }
    updateSliderPosition();
}

function updateSliderPosition() {
    const offset = -index * 100; 
    slider.style.transform = `translateX(${offset}%)`;
}
