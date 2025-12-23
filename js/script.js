let slideIndex = 1;
showSlides(slideIndex);

// Auto Slide Logic
let autoSlideInterval = setInterval(function () {
    plusSlides(1);
}, 5000); // Change slide every 5 seconds

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
    resetTimer();
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
    resetTimer();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    let sliderWrapper = document.querySelector(".slider-wrapper");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Instead of hiding/showing, we translate the wrapper for a sliding effect
    // But since the CSS is simple display: flex, we need to adjust logic or CSS.
    // The CSS uses transform on slider-wrapper.
    // We need to calculate the percentage to translate.

    // However, the current standard structure I usually use with "slide" class hiding/showing might clash with the flex wrapper.
    // Let's check style.css again. 
    // .slider-wrapper { display: flex; transition: transform 0.5s ease-in-out; }
    // .slide { min-width: 100%; ... }

    // So we should translate the wrapper logic.

    let translateX = -(slideIndex - 1) * 100;
    if (sliderWrapper) {
        sliderWrapper.style.transform = `translateX(${translateX}%)`;
    }

    // Update dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active-dot";
    }
}

function resetTimer() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(function () {
        plusSlides(1);
    }, 5000);
}

// Event Listeners for Buttons (if they exist in HTML)
document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => plusSlides(-1));
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => plusSlides(1));
    }
});
