// Get the elements
const arrow = document.getElementById('arrow');
const banner = document.getElementById('banner');

// Add a click event to the arrow image
arrow.addEventListener('click', () => {
    // Toggle the visibility of the banner by adding/removing the active class
    banner.classList.toggle('active');
    
    // Rotate the arrow when clicked
    arrow.classList.toggle('clicked');
});
document.addEventListener("DOMContentLoaded", function () {
    console.log('DOMContentLoaded');

    // Debug: Check if the elements are found
    const vehiclesBtn = document.querySelector('.vehicles-btn');
    const vehiclesDropdown = document.querySelector('.vehicles-dropdown');
    console.log(vehiclesBtn, vehiclesDropdown); // Check if the elements are properly selected
    
    // Vehicles dropdown toggle
    vehiclesBtn?.addEventListener('click', () => {
        // Log to check the event firing
        console.log("Vehicles button clicked");
        
        // Toggle the active class
        vehiclesDropdown.classList.toggle('active');
        vehiclesBtn.classList.toggle('active');
    });
});
// Toggle Vehicle Dropdown
const vehiclesBtn = document.querySelector('.vehicles-btn');
vehiclesBtn.addEventListener('click', () => {
    vehiclesBtn.classList.toggle('active');
});

// Change the Car Color
function changeColor(hue) {
    const carVideo = document.getElementById('car-video');
    carVideo.style.filter = `hue-rotate(${hue}deg)`;
}

// Instructions
document.getElementById('instructions').style.display = 'block';
const video = document.getElementById("car-video"); 
let isDragging = false;
let startX = 0;
let currentTime = 0;

document.getElementById("car-video").addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    document.body.style.cursor = "grabbing";  // Change cursor to grabbing
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    let deltaX = e.clientX - startX;
    currentTime += deltaX * 0.05;  // Adjust sensitivity
    currentTime = Math.max(0, Math.min(video.duration, currentTime));  // Clamp the value
    video.currentTime = currentTime;
    startX = e.clientX;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.cursor = "grab";  // Revert cursor to grab
});

function changeColor(degrees) {
    video.style.filter = `hue-rotate(${degrees}deg)`;
}

document.addEventListener("wheel", function(event) {
    if (event.deltaY > 0) {
        // Scrolling down - smooth scroll to car effect section
        document.getElementById("#carEffect")?.scrollIntoView({ behavior: "smooth" });

        // Delay redirect to allow smooth scrolling
        setTimeout(() => {
            window.location.href = "#carEffect";
        }, 1000); // Adjust timing as needed
    } else if (event.deltaY < 0) {
        // Scrolling up - smooth scroll to home
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });

        // Delay redirect to allow smooth scrolling
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    console.log('DOMContentLoaded');

    // CTA Button smooth scroll & redirect
    const ctaButton = document.querySelector(".cta-button");
    if (ctaButton) {
        ctaButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

            setTimeout(() => {
                window.location.href = "#carEffect";
            }, 1500);
        });
    }

    // Menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    menuToggle?.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        dropdownMenu.classList.toggle('show');
    });

    // Vehicles dropdown
    const vehiclesBtn = document.querySelector('.vehicles-btn');
    const vehiclesDropdown = document.querySelector('.vehicles-dropdown');
    vehiclesBtn?.addEventListener('click', () => {
        vehiclesDropdown.classList.toggle('active');
        vehiclesBtn.classList.toggle('active');
    });

    // Splash screen handling
    if (document.body.classList.contains("splash")) {
        const splashVideo = document.querySelector("video");
        splashVideo?.addEventListener("ended", () => {
            redirectToHome();
        });

        // Fallback redirect after 5s
        setTimeout(() => {
            redirectToHome();
        }, 5000);
    }

    // Always show the navbar, only delay the overlay if on splash screen
    document.querySelector("nav")?.classList.add("show");

    if (document.body.classList.contains("home")) {
        // Delay overlay appearance only when splash screen is present
        if (document.body.classList.contains("splash")) {
            const splashVideo = document.querySelector("video");
            if (splashVideo) {
                splashVideo.addEventListener("ended", () => {
                    setTimeout(() => {
                        document.querySelector(".overlay")?.classList.add("slide-in");
                    }, 500); // Adjust delay as needed
                });
            }
        } else {
            // If not on splash screen, show overlay immediately
            document.querySelector(".overlay")?.classList.add("slide-in");
        }
    }
});

function redirectToHome() {
    window.location.href = "index.html";
}
