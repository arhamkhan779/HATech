// ========================
// Main JavaScript for HATech Portfolio
// ========================

// Projects Data
const projects = [
    { title: "AI base Lungs Diagnoser Agent", description: "Complete Doctor Platform for complete lungs diagnosis.", video: "assets/Videos/bandicam 2025-06-03 10-45-54-529.mp4", github: "https://github.com/arhamkhan779/Lungs-Diagnoser", category: "Healthcare" },
    { title: "AI Technical Interviewer", description: "Technical Interviewer Agent Using LLM.", video: "assets/Videos/interviewer.mp4", github: "https://github.com/arhamkhan779/AI-Interviewer", category: "Agentic AI" },
    { title: "AI base assignment Maker", description: "AI Agent that writes professional assignments.", video: "assets/Videos/video12.mp4", github: "https://github.com/arhamkhan779", category: "Generative AI" },
    { title: "Segmented Classification of brain Tumor", description: "CNN + UNET hybrid architecture for segmented classification of brain tumor", video: "assets/Videos/video13.mp4", github: "https://github.com/arhamkhan779/BrainTumorSegmentedClassification", category: "Computer Vision" },
    { title: "AI Powered WebScrapper Agent", description: "Real-time Web Scrapper Agent.", video: "assets/Videos/aipowered.mp4", github: "https://github.com/arhamkhan779", category: "Agentic AI" },
    { title: "Real Time Car Detection", description: "Yolo base system for detecting cars.", video: "assets/Videos/bandicam 2024-09-02 18-59-13-633.mp4", github: "https://github.com/arhamkhan779", category: "Computer Vision" },
    { title: "Lung X-Ray Segmentation", description: "Lungs X-ray Segmentation using U-NET.", video: "assets/Videos/bandicam 2025-05-30 05-04-04-932.mp4", github: "https://github.com/arhamkhan779", category: "Healthcare" },
    { title: "AI Powered Chatbot", description: "Rag base AI Powered Chatbot using Gemini.", video: "assets/Videos/cellmat.mp4", github: "https://github.com/arhamkhan779", category: "NLP" },
    { title: "Diabetes Mellitus 2 Chatbot using Rag", description: "A Helpful assistant for diabetes mellitus 2 guidelines.", video: "assets/Videos/DiagueAssistant.mp4", github: "https://github.com/arhamkhan779/Diabetes2Chatbot", category: "Healthcare" },
    { title: "Hierarchical Classification of Lung Diseases", description: "CNN base Hierarchical Classification of Lung Diseases.", video: "assets/Videos/herir.mp4", github: "https://github.com/arhamkhan779", category: "Healthcare" },
    { title: "Website Integrated Chatbot Using DialogFlow", description: "A rule based Dialogflow chatbot", video: "assets/Videos/intergratedchatbot.mp4", github: "https://github.com/arhamkhan779", category: "NLP" },
    { title: "Jarvis", description: "Jarvis Voice Assistant.", video: "assets/Videos/jarvis.mp4", github: "https://github.com/arhamkhan779", category: "Agentic AI" },
    { title: "Mental Health Detection", description: "A transformer base architecture for mental health detection.", video: "assets/Videos/meicalhealthdetection.mp4", github: "https://github.com/arhamkhan779/Transformers", category: "NLP" },
    { title: "Paraphrase Generator", description: "A transformer base architecture of paraphrase generation.", video: "assets/Videos/phraphrasegenerator.mp4", github: "https://github.com/arhamkhan779/Transformers", category: "NLP" },
    { title: "Complete Transformer Pipeline", description: "Transformer base complete pipeline for multiple language tasks.", video: "assets/Videos/pipeline.mp4", github: "https://github.com/arhamkhan779/Transformers", category: "NLP" },
    { title: "Plants Classification", description: "CNN base architecture for plants classification.", video: "assets/Videos/platn.mp4", github: "https://github.com/arhamkhan779", category: "Computer Vision" },
    { title: "Pneumonia Detection", description: "CNN Architecture for pneumonia classification.", video: "assets/Videos/PrototypeSample.mp4", github: "https://github.com/arhamkhan779", category: "Healthcare" },
    { title: "DocumentMindAI", description: "A rag base application for document question answering.", video: "assets/Videos/RAG.mp4", github: "https://github.com/arhamkhan779", category: "NLP" },
    { title: "Skin Cancer Classification", description: "CNN base architecture for Cancer classification.", video: "assets/Videos/skincancer.mp4", github: "https://github.com/arhamkhan779/Cancer-Classification", category: "Healthcare" },
    { title: "Language Translator", description: "Transformer base architecture for eng-urdu translation.", video: "assets/Videos/translator.mp4", github: "https://github.com/arhamkhan779/Transformers", category: "NLP" },
    { title: "AI base Tumor Detection System", description: "Yolo base Architecture for Tumor Detection.", video: "assets/Videos/video1.mp4", github: "https://github.com/arhamkhan779/MRI-CLASSIFICATION", category: "Computer Vision" },
    { title: "Plagiarism Detector", description: "Transformer architecture for plagiarism detection.", video: "assets/Videos/video3.mp4", github: "https://github.com/arhamkhan779/Transformers", category: "NLP" },
    { title: "QR Code Detector", description: "OpenCV base QR Code Detection.", video: "assets/Videos/video4.mp4", github: "https://github.com/arhamkhan779/QrCodeDetection", category: "Computer Vision" },
    { title: "Breast Cancer Classification", description: "CNN Architecture for breast cancer classification.", video: "assets/Videos/video5.mp4", github: "https://github.com/arhamkhan779/BreastCancerClassification", category: "Healthcare" },
    { title: "Weather Prediction", description: "ML Architecture for accurate weather predictions.", video: "assets/Videos/video7.mp4", github: "https://github.com/arhamkhan779/WeatherPredictionSystem", category: "Machine Learning" },
    { title: "AI Base Content Moderation System", description: "CNN + Transformer Architecture for Content Moderation.", video: "assets/Videos/video9.mp4", github: "https://github.com/arhamkhan779/AI-base-Content-Moderation-System", category: "NLP" },
    { title: "Attendance System Using Facial Recognition", description: "A comprehensive system for automated attendance using facial recognition.", video: "assets/Videos/video10.mp4", github: "https://github.com/arhamkhan779", category: "Computer Vision" },
    { title: "Inventory Analysis Agent", description: "A inventory analysis agent that interact with real time database.", video: "assets/Videos/video11.mp4", github: "https://github.com/arhamkhan779", category: "Agentic AI" }
];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================
    // Navigation
    // ========================
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // ========================
    // Active Navigation Link
    // ========================
    const sections = document.querySelectorAll('.section');
    
    function setActiveNav() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNav);
    
    // ========================
    // Load Projects Dynamically
    // ========================
    const projectsGrid = document.getElementById('projectsGrid');
    
    function renderProjects() {
        if (!projectsGrid) return;
        
        projects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.style.animationDelay = `${(index % 3) * 0.1}s`;
            
            projectCard.innerHTML = `
                <div class="project-image">
                    <div class="project-video-thumbnail" data-video="${project.video}">
                        <div class="project-placeholder">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                <polyline points="21 15 16 10 5 21"/>
                            </svg>
                        </div>
                        <div class="play-button">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="5 3 19 12 5 21 5 3"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <div class="project-category">${project.category}</div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-actions">
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="github-link">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                        </a>
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
        
        // Add click handlers for video play buttons
        setupVideoHandlers();
    }
    
    // ========================
    // Video Modal Functionality
    // ========================
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalClose = document.getElementById('modalClose');
    
    function setupVideoHandlers() {
        const videoThumbnails = document.querySelectorAll('.project-video-thumbnail');
        
        videoThumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                const videoSrc = this.getAttribute('data-video');
                openVideoModal(videoSrc);
            });
        });
    }
    
    function openVideoModal(videoSrc) {
        modalVideo.querySelector('source').src = videoSrc;
        modalVideo.load();
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Don't auto-play - let user click play button to see video after poster loads
    }
    
    function closeVideoModal() {
        videoModal.classList.remove('active');
        modalVideo.pause();
        modalVideo.currentTime = 0;
        document.body.style.overflow = 'auto';
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', closeVideoModal);
    }
    
    if (videoModal) {
        videoModal.addEventListener('click', function(e) {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });
    
    // Render projects on load
    renderProjects();
    
    // ========================
    // Projects Carousel Navigation
    // ========================
    const projPrevBtn = document.getElementById('projPrev');
    const projNextBtn = document.getElementById('projNext');
    const cardWidth = 400 + 32; // Card width + gap (2rem = 32px)
    
    if (projPrevBtn && projNextBtn) {
        projPrevBtn.addEventListener('click', () => {
            projectsGrid.scrollBy({
                left: -cardWidth,
                behavior: 'smooth'
            });
        });
        
        projNextBtn.addEventListener('click', () => {
            projectsGrid.scrollBy({
                left: cardWidth,
                behavior: 'smooth'
            });
        });
        
        // Update button visibility based on scroll position
        function updateCarouselButtons() {
            const maxScroll = projectsGrid.scrollWidth - projectsGrid.clientWidth;
            projPrevBtn.style.opacity = projectsGrid.scrollLeft > 0 ? '1' : '0.3';
            projPrevBtn.style.pointerEvents = projectsGrid.scrollLeft > 0 ? 'auto' : 'none';
            
            projNextBtn.style.opacity = projectsGrid.scrollLeft < maxScroll ? '1' : '0.3';
            projNextBtn.style.pointerEvents = projectsGrid.scrollLeft < maxScroll ? 'auto' : 'none';
            
            // Animate visible cards
            animateVisibleCards();
        }
        
        // Function to animate cards as they become visible in carousel
        function animateVisibleCards() {
            const cards = document.querySelectorAll('.project-card');
            const gridRect = projectsGrid.getBoundingClientRect();
            
            cards.forEach((card, index) => {
                const cardRect = card.getBoundingClientRect();
                const isVisible = cardRect.left >= gridRect.left - 50 && cardRect.right <= gridRect.right + 50;
                
                if (isVisible) {
                    card.style.animation = `slideInLeft 0.6s ease forwards`;
                    card.style.animationDelay = `${index * 0.1}s`;
                } else if (cardRect.right < gridRect.left) {
                    // Card is scrolling out to the left
                    card.style.animation = `slideOutRight 0.4s ease forwards`;
                }
            });
        }
        
        projectsGrid.addEventListener('scroll', updateCarouselButtons);
        updateCarouselButtons();
    }
    
    // ========================
    // Smooth Scrolling
    // ========================
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================
    // Scroll Animations (AOS - Animate On Scroll)
    // ========================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, delay);
            }
        });
    }, observerOptions);
    
    // Observe all elements with data-aos attribute
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => observer.observe(el));
    
    // ========================
    // Contact Form Handling
    // ========================
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Simulate form submission (in production, you would send this to a server)
        console.log('Form submitted:', formData);
        
        // Show success message
        contactForm.style.display = 'none';
        formSuccess.classList.add('show');
        
        // Reset form after 5 seconds and show it again
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'block';
            formSuccess.classList.remove('show');
        }, 5000);
    });
    
    // ========================
    // Apply Now Buttons
    // ========================
    const applyButtons = document.querySelectorAll('.apply-btn');
    
    applyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Scroll to contact section
            const contactSection = document.getElementById('contact');
            const offsetTop = contactSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Pre-fill subject in contact form
            const jobTitle = button.closest('.job-card').querySelector('h3').textContent;
            document.getElementById('subject').value = `Application for ${jobTitle}`;
        });
    });
    
    // ========================
    // Back to Top Button
    // ========================
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ========================
    // Service Card Hover Effects
    // ========================
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px)';
        });
    });
    
    // ========================
    // Dynamic Year in Footer
    // ========================
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText) {
        footerText.innerHTML = `&copy; ${currentYear} HATech. All rights reserved. Built with passion for AI innovation.`;
    }
    
    // ========================
    // Parallax Effect for Hero Background
    // ========================
    const heroSection = document.querySelector('.hero-section');
    const gridPattern = document.querySelector('.grid-pattern');
    
    if (heroSection && gridPattern) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const parallaxSpeed = 0.5;
            gridPattern.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }
    
    // ========================
    // Typing Effect for Hero Title (Optional Enhancement)
    // ========================
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Uncomment to enable typing effect
    // const heroTitle = document.querySelector('.hero-title .title-line:first-child');
    // if (heroTitle) {
    //     const originalText = heroTitle.textContent;
    //     typeWriter(heroTitle, originalText, 80);
    // }
    
    // ========================
    // Count Up Animation for Stats (if you add stats section)
    // ========================
    function countUp(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCount() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCount);
            } else {
                element.textContent = target;
            }
        }
        
        updateCount();
    }
    
    // Example usage (if you add elements with class 'stat-number'):
    // const statNumbers = document.querySelectorAll('.stat-number');
    // statNumbers.forEach(stat => {
    //     const target = parseInt(stat.getAttribute('data-target'));
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 countUp(stat, target);
    //                 observer.unobserve(stat);
    //             }
    //         });
    //     });
    //     observer.observe(stat);
    // });
    
    // ========================
    // Project Filter (Optional - for future enhancement)
    // ========================
    function filterProjects(category) {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            const cardCategory = card.querySelector('.project-category').textContent.toLowerCase();
            
            if (category === 'all' || cardCategory === category.toLowerCase()) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // Example: Add filter buttons in HTML and call:
    // filterProjects('healthcare');
    
    // ========================
    // Form Input Animations
    // ========================
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        // Add floating label effect
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Check if input has value on load
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
    
    // ========================
    // Lazy Loading Images (if you add real images)
    // ========================
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
    
    // ========================
    // Performance: Debounce Scroll Events
    // ========================
    function debounce(func, wait = 10) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debounce to scroll-heavy functions
    const debouncedSetActiveNav = debounce(setActiveNav, 10);
    window.addEventListener('scroll', debouncedSetActiveNav);
    
    // ========================
    // Loading Animation (Optional)
    // ========================
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Hide loader if you add one
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    });
    
    // ========================
    // Console Easter Egg
    // ========================
    console.log('%c HATech Portfolio ', 'background: #00e5ff; color: #0a1929; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('%c Built with ❤️ using HTML, CSS, and JavaScript ', 'background: #0a1929; color: #00e5ff; font-size: 14px; padding: 5px;');
    console.log('%c Looking for talented developers! Check out our careers page. ', 'background: #132f4c; color: #90caf9; font-size: 12px; padding: 5px;');
    
    // ========================
    // Keyboard Navigation Accessibility
    // ========================
    document.addEventListener('keydown', (e) => {
        // Press 'Escape' to close mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // ========================
    // Service Worker Registration (for PWA - Optional)
    // ========================
    if ('serviceWorker' in navigator) {
        // Uncomment to enable service worker
        // window.addEventListener('load', () => {
        //     navigator.serviceWorker.register('/service-worker.js')
        //         .then(registration => console.log('SW registered:', registration))
        //         .catch(error => console.log('SW registration failed:', error));
        // });
    }
    
    // ========================
    // Analytics Event Tracking (Placeholder)
    // ========================
    function trackEvent(category, action, label) {
        // In production, integrate with Google Analytics, Mixpanel, etc.
        console.log('Event tracked:', { category, action, label });
        
        // Example: Google Analytics
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', action, {
        //         'event_category': category,
        //         'event_label': label
        //     });
        // }
    }
    
    // Track button clicks
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-outline');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            trackEvent('Engagement', 'Button Click', buttonText);
        });
    });
    
    // Track section views
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                trackEvent('Page View', 'Section Viewed', sectionId);
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => sectionObserver.observe(section));
    
    // ========================
    // Dark Mode Toggle (Future Enhancement)
    // ========================
    function toggleDarkMode() {
        document.body.classList.toggle('light-mode');
        
        // Save preference to localStorage
        const isDarkMode = !document.body.classList.contains('light-mode');
        localStorage.setItem('darkMode', isDarkMode);
    }
    
    // Load dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'false') {
        document.body.classList.add('light-mode');
    }
    
    // Example: Add a toggle button
    // const darkModeToggle = document.getElementById('darkModeToggle');
    // if (darkModeToggle) {
    //     darkModeToggle.addEventListener('click', toggleDarkMode);
    // }
    
    // ========================
    // Initialize Tooltips (if using a library)
    // ========================
    // Example with Tippy.js:
    // if (typeof tippy !== 'undefined') {
    //     tippy('[data-tippy-content]', {
    //         placement: 'top',
    //         animation: 'fade',
    //     });
    // }
    
    // ========================
    // Detect if user prefers reduced motion
    // ========================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // Disable animations for users who prefer reduced motion
        document.documentElement.style.setProperty('--transition-fast', '0s');
        document.documentElement.style.setProperty('--transition-medium', '0s');
        document.documentElement.style.setProperty('--transition-slow', '0s');
    }
    
    // ========================
    // Print Styles (Optional)
    // ========================
    window.addEventListener('beforeprint', () => {
        // Expand all collapsed sections for printing
        console.log('Preparing page for printing...');
    });
    
    // ========================
    // Error Handling
    // ========================
    window.addEventListener('error', (e) => {
        console.error('JavaScript error:', e.error);
        // In production, send errors to monitoring service
    });
    
    // ========================
    // Initialization Complete
    // ========================
    console.log('HATech Portfolio initialized successfully! 🚀');
    
}); // End of DOMContentLoaded

// ========================
// Utility Functions
// ========================

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Smooth scroll to element
 */
function smoothScrollTo(elementId, offset = 80) {
    const element = document.getElementById(elementId);
    if (element) {
        const offsetTop = element.offsetTop - offset;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

/**
 * Get scroll percentage
 */
function getScrollPercentage() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return (scrollTop / docHeight) * 100;
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Format phone number
 */
function formatPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumber;
}

/**
 * Copy text to clipboard
 */
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Text copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy text:', err);
        });
    } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
}

/**
 * Generate random ID
 */
function generateId(prefix = 'id') {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Throttle function
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export utilities for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isInViewport,
        smoothScrollTo,
        getScrollPercentage,
        isValidEmail,
        formatPhoneNumber,
        copyToClipboard,
        generateId,
        throttle
    };
}
