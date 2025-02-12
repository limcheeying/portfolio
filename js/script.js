// Navigation Bar 
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');  
    navbar.classList.toggle('open'); 
};

// Navigation Menu Button is only visible when screen width is smaller
window.addEventListener('resize', function() {
    if (window.innerWidth > 800) {
        navbar.classList.remove('open');  
        menu.classList.remove('bx-x'); 
    }
});

// ScrollReveal
const sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.logo', { delay: 200, origin: 'left' });
sr.reveal('.menu-btn', { delay: 520, origin: 'right' });

sr.reveal('.main-btn', { delay: 860, origin: 'left' });

// Home Page - Typing effect  
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const text = "Seeking IT Internship...";
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (isDeleting) {
            textElement.textContent = text.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = text.substring(0, charIndex + 1);
            charIndex++;
        }

        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === text.length) {
            typingSpeed = 2000; // Pause at full text
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            typingSpeed = 500; // Pause before typing again
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
});

// About Me Page - Show the Download Documents Dialog 
function openDownloadDialog() {
    document.getElementById('downloadDialog').style.display = 'flex';
}

// About Me Page - Close the Download Documents Dialog 
function closeDownloadDialog() {
    document.getElementById('downloadDialog').style.display = 'none';
}