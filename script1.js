// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking overlay
overlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Close menu when clicking a navigation link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Make service boxes editable
const serviceBoxes = document.querySelectorAll('.service-box p');
serviceBoxes.forEach(box => {
    box.setAttribute('contenteditable', 'true');
    box.addEventListener('focus', () => {
        box.dataset.before = box.textContent;
    });
    box.addEventListener('blur', () => {
        if (box.textContent.trim() === '') {
            box.textContent = box.dataset.before;
        }
    });
});

const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    function nextSlide() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            slides.style.left = `-${currentIndex * 100}%`;
        }

        if (currentIndex === totalSlides - 1) {
            setTimeout(() => {
                slides.style.transition = 'none';
                slides.style.left = '0';
                currentIndex = 0;
                setTimeout(() => slides.style.transition = 'left 1s ease-in-out', 50); 
            }, 2000);
        }
    }

    setInterval(nextSlide, 3000); 