// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });

    // Custom Mouse Glow Effect
    const cursorGlow = document.createElement('div');
    cursorGlow.id = 'cursor-glow';
    document.body.appendChild(cursorGlow);

    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });

    // GSAP Hero Animations
    if(document.querySelector('.hero-title')) {
        gsap.from(".hero-badge", { opacity: 0, y: -20, duration: 0.8, delay: 0.2 });
        gsap.from(".hero-title", { opacity: 0, y: 30, duration: 1, delay: 0.4 });
        gsap.from(".hero-desc", { opacity: 0, y: 30, duration: 1, delay: 0.6 });
        gsap.from(".hero-btns", { opacity: 0, y: 30, duration: 1, delay: 0.8 });
        gsap.from(".hero-stats", { opacity: 0, scale: 0.9, duration: 1, delay: 1 });
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-cardbg/80', 'backdrop-blur-md', 'border-b', 'border-borderline');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-cardbg/80', 'backdrop-blur-md', 'border-b', 'border-borderline');
            navbar.classList.add('bg-transparent');
        }
    });
});