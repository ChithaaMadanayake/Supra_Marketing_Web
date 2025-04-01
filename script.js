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
    const body = document.body;

    console.log(vehiclesBtn, vehiclesDropdown); // Check if the elements are properly selected
    
    // Vehicles dropdown toggle
    vehiclesBtn?.addEventListener('click', () => {
        // Log to check the event firing
        console.log("Vehicles button clicked");
        
        // Toggle the active class
        vehiclesDropdown.classList.toggle('active');
        vehiclesBtn.classList.toggle('active');

        // Prevent body scrolling when dropdown is active
        if (vehiclesDropdown.classList.contains('active')) {
            body.style.overflow = 'hidden'; // Disable page scroll
        } else {
            body.style.overflow = ''; // Enable page scroll
        }
    });
});

// Toggle Vehicle Dropdown (Already handled above, this code may be redundant)
const vehiclesBtn = document.querySelector('.vehicles-btn');
vehiclesBtn?.addEventListener('click', () => {
    vehiclesBtn.classList.toggle('active');
});

// Smooth scroll & redirect for wheel event
document.addEventListener("wheel", function(event) {
    if (event.deltaY > 0) {
        // Scrolling down - smooth scroll to car effect section
        document.getElementById("carEffect")?.scrollIntoView({ behavior: "smooth" });

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

// CTA Button smooth scroll & redirect
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

        // Prevent body scrolling when dropdown is active
        if (vehiclesDropdown.classList.contains('active')) {
            body.style.overflow = 'hidden'; // Disable page scroll
        } else {
            body.style.overflow = ''; // Enable page scroll
        }
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
