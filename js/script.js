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