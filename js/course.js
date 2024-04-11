// Initialize variables for course buttons
const premiumBtn = document.getElementById('premiumBtn');
const freeBtn = document.getElementById('freeBtn');
const featureBtn = document.getElementById('featureBtn');

// Line
const line = document.getElementById("move-line");

// Slide
let slideIndex = 0;

function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    const slideWidth = slidesContainer.clientWidth;
    if (index >= 0 && index < slidesContainer.children.length) { 
        slidesContainer.style.transition = 'transform 0.3s ease-in-out'; 
        slidesContainer.style.transform = `translateX(-${slideWidth * index}px)`;
    }
}


function updateSlideAndLine() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        slideIndex = 0;
        line.style.marginLeft = '0%';
    } else if (screenWidth >= 768 && screenWidth < 1024) {
        slideIndex = 1;
        line.style.marginLeft = '35%';
    } else {
        slideIndex = 2;
        line.style.marginLeft = '70%';
    }
    showSlide(slideIndex);
}

// Call updateSlideAndLine initially and on window resize
updateSlideAndLine();
window.addEventListener('resize', updateSlideAndLine);

// Show premium course slide when page loads
window.onload = () => {
    slideIndex = 0;
    line.style.marginLeft = '0%';
    showSlide(slideIndex);
};

premiumBtn.onclick = () => {
    slideIndex = 0;
    line.style.marginLeft = '0%';
    showSlide(slideIndex);
};

freeBtn.onclick = () => {
    slideIndex = 1;
    line.style.marginLeft = '35%';
    showSlide(slideIndex);
};

featureBtn.onclick = () => {
    slideIndex = 2;
    line.style.marginLeft = '70%';
    showSlide(slideIndex);
};
