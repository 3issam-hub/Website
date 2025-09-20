// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const contactForm = document.getElementById('contactForm');
const modal = document.getElementById('serviceModal');
const closeModal = document.querySelector('.close');
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Portfolio Filter
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.5s ease';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Service Modal
const serviceData = {
    creative: {
        title: 'Creative & Design Services',
        description: 'Transform your brand with our comprehensive creative design solutions.',
        features: [
            'Logo & Brand Identity Design',
            'Social Media Content Creation',
            'App Graphics & Mockups',
            'Business Cards & Flyers',
            'Presentation Design',
            'UX/UI Design',
            'Visual Communication Solutions'
        ],
        pricing: 'Starting from $299',
        timeline: '2-4 weeks'
    },
    it: {
        title: 'IT & Networking Services',
        description: 'Complete IT infrastructure solutions for your business needs.',
        features: [
            'Network Installation & Setup',
            'Server Setup & Management',
            'VoIP Systems Implementation',
            'Windows/Linux System Administration',
            'IT Troubleshooting & Support',
            'Security Solutions',
            'Cloud Migration Services'
        ],
        pricing: 'Starting from $499',
        timeline: '1-3 weeks'
    },
    web: {
        title: 'Web Development Services',
        description: 'Modern, responsive websites and applications built with cutting-edge technology.',
        features: [
            'WordPress Development',
            'Shopify E-commerce Solutions',
            'Custom Web Applications',
            'Landing Page Design',
            'Portfolio Websites',
            'Progressive Web Apps',
            'API Development & Integration'
        ],
        pricing: 'Starting from $799',
        timeline: '3-6 weeks'
    }
};

function openServiceModal(serviceType) {
    const service = serviceData[serviceType];
    if (!service) return;
    
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="service-modal">
            <h2>${service.title}</h2>
            <p class="service-description">${service.description}</p>
            
            <div class="service-details">
                <h3>What We Offer:</h3>
                <ul class="service-features-list">
                    ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                
                <div class="service-info">
                    <div class="info-item">
                        <strong>Pricing:</strong> ${service.pricing}
                    </div>
                    <div class="info-item">
                        <strong>Timeline:</strong> ${service.timeline}
                    </div>
                </div>
                
                <div class="modal-buttons">
                    <button class="btn-primary" onclick="scrollToSection('contact')">Get Quote</button>
                    <button class="btn-secondary" onclick="scrollToSection('contact')">Contact Us</button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Animated Counter for Stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate stats when about section comes into view
            if (entry.target.classList.contains('stats-grid')) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    if (target && !stat.classList.contains('animated')) {
                        stat.classList.add('animated');
                        animateCounter(stat, target);
                    }
                });
            }
            
            // Add animation class to service cards
            if (entry.target.classList.contains('service-card')) {
                entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            }
            
            // Add animation class to portfolio items
            if (entry.target.classList.contains('portfolio-item')) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

document.querySelectorAll('.portfolio-item').forEach(item => {
    observer.observe(item);
});

document.querySelector('.stats-grid') && observer.observe(document.querySelector('.stats-grid'));

// Add animation styles
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .service-modal {
        padding: 1rem;
    }
    
    .service-modal h2 {
        color: #1a202c;
        margin-bottom: 1rem;
        font-size: 2rem;
    }
    
    .service-description {
        color: #64748b;
        margin-bottom: 2rem;
        font-size: 1.1rem;
    }
    
    .service-details h3 {
        color: #1a202c;
        margin-bottom: 1rem;
        font-size: 1.3rem;
    }
    
    .service-features-list {
        list-style: none;
        margin-bottom: 2rem;
    }
    
    .service-features-list li {
        padding: 0.5rem 0;
        color: #64748b;
        position: relative;
        padding-left: 1.5rem;
    }
    
    .service-features-list li::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #10b981;
        font-weight: bold;
    }
    
    .service-info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-bottom: 2rem;
        padding: 1rem;
        background: #f8fafc;
        border-radius: 10px;
    }
    
    .info-item {
        color: #1a202c;
        font-weight: 500;
    }
    
    .modal-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }
    
    .modal-buttons .btn-primary,
    .modal-buttons .btn-secondary {
        padding: 12px 24px;
        border: none;
        border-radius: 10px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none;
        display: inline-block;
        text-align: center;
    }
    
    .modal-buttons .btn-primary {
        background: #6366f1;
        color: white;
    }
    
    .modal-buttons .btn-primary:hover {
        background: #4f46e5;
        transform: translateY(-2px);
    }
    
    .modal-buttons .btn-secondary {
        background: transparent;
        color: #6366f1;
        border: 2px solid #6366f1;
    }
    
    .modal-buttons .btn-secondary:hover {
        background: #6366f1;
        color: white;
        transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
        .service-info {
            grid-template-columns: 1fr;
        }
        
        .modal-buttons {
            flex-direction: column;
        }
    }
`;
document.head.appendChild(animationStyles);

// Contact Form Handling
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            const formData = new FormData(contactForm);
            
            // You'll need to replace 'YOUR_WEB3FORMS_KEY' with your actual Web3Forms key
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                // Show success message
                showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                contactForm.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    `;
    
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #6366f1, #4f46e5)';
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Add notification animations
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add staggered animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Add staggered animation to portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add some interactive hover effects
document.querySelectorAll('.service-card, .portfolio-item').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});
