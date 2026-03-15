// ================================================
// BRUTALIST STYLE — Main JavaScript
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Scroll-triggered fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        fadeObserver.observe(el);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Brutalist hover effect on feature cards - snap color change
    document.querySelectorAll('.feature-card').forEach(card => {
        const originalBg = card.style.backgroundColor;

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'background-color 0s';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = 'background-color 0.2s ease';
        });
    });

    // Animate geometric shapes on scroll
    const shapes = document.querySelectorAll('.shape');
    if (shapes.length > 0) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            shapes.forEach((shape, index) => {
                const rate = (index + 1) * 0.05;
                const rotation = scrolled * rate * 0.5;
                const translation = scrolled * rate;
                shape.style.transform = `translateY(${translation}px) rotate(${rotation}deg)`;
            });
        });
    }

    // Initialize i18n (translations)
    if (typeof initI18n === 'function') {
        initI18n();
    }

    // Initialize Beta Modal
    initBetaModal();
});

/* ------------------------------------------------
   Beta Modal Logic
   ------------------------------------------------ */
function initBetaModal() {
    const modal = document.getElementById('beta-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.getElementById('close-modal');
    const appleBtn = document.getElementById('store-apple');
    const googleBtn = document.getElementById('store-google');

    if (!modal || !modalBody || !closeModal || !appleBtn || !googleBtn) return;

    function showBetaModal(platform) {
        const lang = document.documentElement.lang || 'en';
        const msgKey = platform === 'apple' ? 'beta_apple_msg' : 'beta_google_msg';

        if (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[msgKey]) {
            const translations = TRANSLATIONS[msgKey];
            const message = translations[lang] || translations['en'];
            modalBody.innerHTML = message;
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    appleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showBetaModal('apple');
    });

    googleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showBetaModal('google');
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}
