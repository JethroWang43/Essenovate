const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
let index = 0;

function updateSlide() {
    const imageWidth = images[0].clientWidth; // Get actual image width
    carousel.style.transform = `translateX(-${index * imageWidth}px)`;
}

function prevSlide() {
    index = (index > 0) ? index - 1 : images.length - 1;
    updateSlide();
}

function nextSlide() {
    index = (index < images.length - 1) ? index + 1 : 0;
    updateSlide();
}

window.addEventListener('load', () => {
    carousel.style.width = `${images.length * images[0].clientWidth}px`;
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-container form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents default form submission behavior

        alert("Thank you for the opinion, our staff will try and give our best to make it up to you!");

        form.reset(); // Clears the form after submission

        location.reload(); // Reloads the page
    });
});
const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function() {
    setTimeout(() => {
        cross.style.display = 'block'; 
        cross.style.zIndex = '2';
    }, 200);
    headerbar.style.right = '0'; // Slide in from the right
});

cross.addEventListener('click', function() {
    cross.style.display = 'none';  // Hide the cross icon when clicked
    headerbar.style.right = '-100%'; // Slide out to the right
});




let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide(n) {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    slides[slideIndex].classList.add("active");
}

// Initialize the first slide
slides[slideIndex].classList.add("active");