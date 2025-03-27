// Get the toggle button and the menu
const menuToggle = document.querySelector('.menu-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Get the vehicles button and the dropdown
const vehiclesBtn = document.querySelector('.vehicles-btn');
const vehiclesDropdown = document.querySelector('.vehicles-dropdown');

// Toggle the menu when clicking the hamburger icon
menuToggle.addEventListener('click', () => {
    console.log('Menu toggle clicked');
    menuToggle.classList.toggle('active');
    dropdownMenu.classList.toggle('show');
});

// Toggle the vehicles dropdown when clicking the vehicles button
vehiclesBtn.addEventListener('click', () => {
    console.log('Vehicles button clicked');
    vehiclesDropdown.classList.toggle('active');
    vehiclesBtn.classList.toggle('active');
});

// DOMContentLoaded to handle splash page and home page actions
document.addEventListener("DOMContentLoaded", function () {
    console.log('DOMContentLoaded');
    // Check if the body has the "splash" class
    if (document.body.classList.contains("splash")) {
        const splashVideo = document.querySelector("video");
        if (splashVideo) {
            console.log('Splash video found');
            splashVideo.onended = function () {
                redirectToHome();
            };

            // Fallback: Redirect after 5 seconds
            setTimeout(redirectToHome, 5000);
        }
    }

    // Check if the body has the "home" class
    if (document.body.classList.contains("home")) {
        console.log('Home page detected');
        // Delay navbar and overlay appearance
        setTimeout(() => {
            document.querySelector("nav").classList.add("show");
            document.querySelector(".overlay").classList.add("slide-in");
        }, 5000);
    }
});

// Redirect function to navigate to the homepage
function redirectToHome() {
    console.log('Redirecting to home...');
    window.location.href = "index.html";
}
