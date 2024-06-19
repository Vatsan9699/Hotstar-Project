const carousel = document.querySelector('.carousel');
let sliders = [];
let slideIndex = 0;

const movies = [
    { name: 'images/slider1.PNG', des: 'Description of movie 1' },
    { name: 'images/slider2.PNG', des: 'Description of movie 2' },
    { name: 'images/slider3.PNG', des: 'Description of movie 3' },
];

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    imgElement.src = movies[slideIndex].name;
    h1.textContent = `Movie ${slideIndex + 1}`;
    p.textContent = movies[slideIndex].des;

    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 1)}% - ${30 * (sliders.length - 1)}px)`;
    }

    slideIndex++;
};

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);

// Video Cards Section
const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    });

    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause(); // Corrected to pause() instead of play()
    });
});

// Cards Sliders Section
let cardContainers = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    });

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth - 200;
    });
});
