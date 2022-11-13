let offset = 0;
let slides = document.querySelectorAll('.slider__item');
let slider = [];
for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i].src;
    slides[i].remove();
}
let currentSlide = 0;
let nextSlide = 0;
let leftButton = document.querySelector('#button-left');
let rightButton = document.querySelector('#button-right');
console.log(leftButton);
console.log(rightButton);
try {
    nextSlide = Number(localStorage.getItem('slide'));
    currentSlide = nextSlide;
} catch (error) {
    
}


function draw(direction) {
    let img = document.createElement('img');
    img.src = slider[nextSlide];
    img.classList.add('slider__item');
    console.log(slider);
    console.log(document.querySelector('.slider').offsetWidth);
    if (direction === "right") {
        img.style.left = offset * document.querySelector('.slider').offsetWidth + 'px';
    } else {
        img.style.left = -offset * document.querySelector('.slider').offsetWidth + 'px';
    }
    document.querySelector('.slider').appendChild(img);
    offset = 1;
}

function drawForLeft(){
    if (currentSlide + 1 == slider.length) {
        nextSlide = 0;
    } else {
        nextSlide = currentSlide + 1;
    }
    draw("left");
    currentSlide = nextSlide;
    console.log(currentSlide);
    console.log(nextSlide);
}

function drawForRight(){
    if (currentSlide - 1 == -1) {
        nextSlide = slider.length - 1;
    } else {
        nextSlide = currentSlide - 1;
    }
    draw("right");
    currentSlide = nextSlide;
    console.log(currentSlide);
    console.log(nextSlide);
}

function swap(direction){
    rightButton.onclick = null;
    leftButton.onclick = null;  
    let visibleSlides;
    let offset2 = 0;
    clearInterval(intervalId);
    switch(direction) {
        case 'right':
            drawForRight();
            visibleSlides = document.querySelectorAll('.slider__item');
            for (let i = 0; i < visibleSlides.length; i++){
                visibleSlides[i].style.left = offset2*document.querySelector('.slider').offsetWidth 
                - document.querySelector('.slider').offsetWidth + 'px';
                offset2++;
            };
            break;
        case 'left':
            drawForLeft();
            visibleSlides = document.querySelectorAll('.slider__item');
            for (let i = 0; i < visibleSlides.length; i++){
                visibleSlides[i].style.left = -offset2*document.querySelector('.slider').offsetWidth 
                + document.querySelector('.slider').offsetWidth + 'px';
                offset2++;
            };
            break;
    }
    setTimeout(function(){
        visibleSlides[0].remove();
        rightButton.onclick = () => swap('right');
        leftButton.onclick = () => swap('left');
    }, 1000);

    localStorage.setItem('slide', currentSlide);
    intervalId = setInterval(() => swap('right'), 5000);

}

function keyPress(e) {
    if (e.which == 32) rightButton.click();
    else if (e.which == 39) rightButton.click();
    else if (e.which == 37) leftButton.click();
  }
document.onkeydown=keyPress;

draw("left");

let intervalId = setInterval(() => swap('right'), 5000);
