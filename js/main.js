// ===================================
// ZIZWE.IT Website - Main JavaScript
// ===================================

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('nav')) {
                navLinks.classList.remove('active');
            }
        });
    }

    // Set active navigation link
    setActiveNavLink();

    // Initialize cookie banner
    initCookieBanner();

    // Form handling
    initContactForm();
});

// Set Active Navigation Link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Cookie Banner Management
function initCookieBanner() {
    const cookieBanner = document.querySelector('.cookie-banner');
    const acceptBtn = document.querySelector('.accept-cookies');
    const declineBtn = document.querySelector('.decline-cookies');

    if (!cookieBanner) return;

    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');

    if (!cookieConsent) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieBanner.classList.remove('show');
            // Enable analytics or other tracking here
            enableAnalytics();
        });
    }

    if (declineBtn) {
        declineBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'declined');
            cookieBanner.classList.remove('show');
        });
    }
}

// Enable Analytics (placeholder - add your analytics code)
function enableAnalytics() {
    // Add Google Analytics, Facebook Pixel, or other tracking code here
    console.log('Analytics enabled');
    
    // Example: Google Analytics
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());
    // gtag('config', 'GA_MEASUREMENT_ID');
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Validate form
        if (validateForm(data)) {
            // Send form data (you'll need to implement your backend)
            submitForm(data);
        }
    });
}

// Form Validation
function validateForm(data) {
    let isValid = true;
    const errors = [];

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        errors.push('Please enter a valid email address');
        isValid = false;
    }

    // Name validation
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Please enter your name');
        isValid = false;
    }

    // Message validation
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Please enter a message (at least 10 characters)');
        isValid = false;
    }

    if (!isValid) {
        showFormErrors(errors);
    }

    return isValid;
}

// Submit Form
async function submitForm(data) {
    try {
        // Show loading state
        showFormLoading();

        // Build email body
        const subject = encodeURIComponent(`ZIZWE.IT Contact: ${data.product || 'General Inquiry'} from ${data.name}`);
        const body = encodeURIComponent(
            `Name: ${data.name}\n` +
            `Email: ${data.email}\n` +
            `Business: ${data.business || 'Not provided'}\n` +
            `Interest: ${data.product || 'General'}\n\n` +
            `Message:\n${data.message}`
        );

        // Open email client with pre-filled message
        window.location.href = `mailto:support@zizweit.uk?subject=${subject}&body=${body}`;

        // Show success message
        setTimeout(() => {
            showFormSuccess();
            document.querySelector('.contact-form form').reset();
        }, 500);

    } catch (error) {
        console.error('Form submission error:', error);
        showFormError('Something went wrong. Please email us directly at <a href="mailto:support@zizweit.uk">support@zizweit.uk</a>');
    } finally {
        hideFormLoading();
    }
}

// Form UI Feedback Functions
function showFormLoading() {
    const submitBtn = document.querySelector('.contact-form button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
    }
}

function hideFormLoading() {
    const submitBtn = document.querySelector('.contact-form button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }
}

function showFormSuccess() {
    const message = document.createElement('div');
    message.className = 'form-message success';
    message.innerHTML = '<p><strong>Thank you!</strong> Your message has been sent. We\'ll get back to you soon.</p>';
    
    const form = document.querySelector('.contact-form');
    form.insertBefore(message, form.firstChild);
    
    setTimeout(() => {
        message.remove();
    }, 5000);
}

function showFormError(errorMessage) {
    const message = document.createElement('div');
    message.className = 'form-message error';
    message.innerHTML = `<p><strong>Error:</strong> ${errorMessage}</p>`;
    
    const form = document.querySelector('.contact-form');
    form.insertBefore(message, form.firstChild);
    
    setTimeout(() => {
        message.remove();
    }, 5000);
}

function showFormErrors(errors) {
    const errorList = errors.map(err => `<li>${err}</li>`).join('');
    const message = document.createElement('div');
    message.className = 'form-message error';
    message.innerHTML = `<p><strong>Please fix the following errors:</strong></p><ul>${errorList}</ul>`;
    
    const form = document.querySelector('.contact-form');
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) existingMessage.remove();
    
    form.insertBefore(message, form.firstChild);
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// App Store Redirects
function redirectToAppStore(appName) {
    const appUrls = {
        'revalidator-android': 'https://play.google.com/store/apps/details?id=com.zizweit.revalidator',
        'revalidator-ios': 'https://apps.apple.com/app/revalidator', // Update when iOS version available
        'orderease-android': '', // Update when available
        'orderease-ios': '', // Update when available
        'stockease-android': '', // Update when available
        'stockease-ios': '' // Update when available
    };

    const url = appUrls[appName];
    if (url) {
        window.open(url, '_blank');
    } else {
        alert('This app is not yet available. Join our waitlist to be notified when it launches!');
    }
}

// Waitlist Form Handling (if needed)
function submitWaitlist(product, email) {
    // TODO: Implement waitlist submission
    console.log(`Waitlist signup for ${product}: ${email}`);
}

// Fade-in Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});
