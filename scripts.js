// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    // Apply Theme Preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.dataset.theme = savedTheme;

    // Section Animation on Scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });
    sections.forEach(section => observer.observe(section));
});

let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            const scrollProgress = document.getElementById('progress-bar');
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;
            scrollProgress.style.width = scrollPercentage + '%';
            isScrolling = false;
        });
        isScrolling = true;
    }
});


function toggleTheme() {
    const body = document.body;
    body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', body.dataset.theme);
}

// Apply stored theme on load
document.addEventListener('DOMContentLoaded', () => {
    // Apply Theme Preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.dataset.theme = savedTheme;

    // Section Animation on Scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });
    sections.forEach(section => observer.observe(section));
});


// Contact Form Validation
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    const name = document.querySelector('.contact-form input[type="text"]').value.trim();
    const email = document.querySelector('.contact-form input[type="email"]').value.trim();
    const message = document.querySelector('.contact-form textarea').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields');
        e.preventDefault();
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address');
        e.preventDefault();
    } else {
        alert('Thank you for your message! We will get back to you soon.');
    }
});


// Newsletter Subscription Form Handling
const newsletterForm = document.getElementById('newsletter-form');
const newsletterMessage = document.getElementById('newsletter-message');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newsletterMessage.textContent = 'Please enter a valid email address.';
        newsletterMessage.classList.remove('hidden', 'success');
        newsletterMessage.classList.add('error');
        return;
    }

    newsletterMessage.textContent = 'Thank you for subscribing!';
    newsletterMessage.classList.remove('hidden', 'error');
    newsletterMessage.classList.add('success');
    emailInput.value = '';
});