// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Menu Toggle =====
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section');

function updateActiveLink() {
    const scrollPosition = window.scrollY + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ===== Copy Server IP =====
function copyIP() {
    const ipText = document.querySelector('.ip-address').textContent;
    
    navigator.clipboard.writeText(ipText).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        const originalHTML = copyBtn.innerHTML;
        
        copyBtn.innerHTML = '<i class="fas fa-check"></i>';
        copyBtn.style.color = '#2d6a4f';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalHTML;
            copyBtn.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ===== Scroll Reveal Animation =====
function revealOnScroll() {
    const elements = document.querySelectorAll('.lore-card, .rule-category, .staff-card, .step, .info-card, .lore-feature');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ===== Console Easter Egg =====
console.log('%c ALBA ROLEPLAY ', 'background: #f5c518; color: #0a0a0a; font-size: 20px; font-weight: bold; padding: 10px 20px; font-family: Oswald;');
console.log('%c Los Santos awaits you ', 'color: #f5c518; font-size: 14px; padding: 5px;');