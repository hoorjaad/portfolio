const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider = document.querySelector('.slider');
let slideIndex = 0;
let autoSlideInterval;

// Function to update the slider position
function updateSlider() {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Move to the next slide
function nextSlide() {
    slideIndex++;
    if (slideIndex >= slider.children.length) {
        slideIndex = 0;
    }
    updateSlider();
}

// Move to the previous slide
function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slider.children.length - 1;
    }
    updateSlider();
}

// Event listeners for manual controls
next.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide(); // Reset the timer when manually changing slides
});

prev.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide(); // Reset the timer when manually changing slides
});

// Auto-slide functionality
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

// Reset the auto-slide timer
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Start the auto-slide when the page loads
startAutoSlide();