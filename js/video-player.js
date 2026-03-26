// ========================================
// Dian Li's Personal Homepage
// Video Player & Interactive Modules
// ========================================

// Video Player Controls
function initVideoPlayer() {
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        const playButton = card.querySelector('.video-play-icon');
        const thumbnail = card.querySelector('.video-thumbnail');

        if (playButton && thumbnail) {
            card.addEventListener('click', () => {
                // Simulate video play
                showVideoModal(card);
            });
        }
    });
}

function showVideoModal(card) {
    // Create modal if it doesn't exist
    let modal = document.querySelector('.video-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'video-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" aria-label="Close">×</button>
                <div class="video-placeholder-large">
                    <p>视频播放功能</p>
                    <p>（此处将嵌入实际视频）</p>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Close handlers
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', closeVideoModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeVideoModal();
        }
    });

    // Close on escape
    document.addEventListener('keydown', handleEscapeKey);
}

function closeVideoModal() {
    const modal = document.querySelector('.video-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscapeKey);
    }
}

function handleEscapeKey(e) {
    if (e.key === 'Escape') {
        closeVideoModal();
    }
}

// Video Filtering
function initVideoFilters() {
    const filterBtns = document.querySelectorAll('.video-filters .filter-btn');
    const videoCards = document.querySelectorAll('.video-card');

    if (filterBtns.length === 0) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;

            videoCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = '';
                    card.classList.add('animate-in');
                } else {
                    card.style.display = 'none';
                    card.classList.remove('animate-in');
                }
            });
        });
    });
}

// Social Stats Animation
function initStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');

    if (statNumbers.length === 0) return;

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

function animateNumber(element) {
    const targetText = element.textContent;
    const number = parseInt(targetText.replace(/,/g, ''));
    const suffix = targetText.replace(/[0-9]/g, '');

    if (isNaN(number)) return;

    let current = 0;
    const duration = 2000;
    const steps = 60;
    const increment = number / steps;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            current = number;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString() + suffix;
    }, stepDuration);
}

// Light Beam Effect Enhancement
function initLightBeamEffects() {
    const heroSection = document.querySelector('.ultraman-hero');
    if (!heroSection) return;

    // Add floating particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'light-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: ${Math.random() > 0.5 ? 'var(--theme-cyan)' : 'var(--theme-yellow)'};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: 0;
            animation: floatParticle ${Math.random() * 3 + 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        heroSection.appendChild(particle);
    }

    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0%, 100% {
                opacity: 0;
                transform: translateY(0) scale(0);
            }
            50% {
                opacity: 0.6;
                transform: translateY(-100px) scale(1);
            }
        }
    `;
    document.head.appendChild(style);
}

// Hero Greeting Animation
function initHeroGreeting() {
    const heroContent = document.querySelector('.hero-content');
    if (!heroContent) return;

    const elements = heroContent.querySelectorAll('.profile-photo, .hero-name, .hero-username, .hero-motto, .hero-stats, .hero-location, .hero-buttons');

    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 200 + (index * 150));
    });
}

// Social Media Stats Update
function initSocialStats() {
    // Simulate real-time stats update
    const statValues = document.querySelectorAll('.stat-value');

    statValues.forEach(stat => {
        // Add subtle pulse animation
        stat.style.animation = 'pulse 3s ease-in-out infinite';
    });
}

// Online Status Indicator
function initOnlineStatus() {
    const onlineIndicator = document.querySelector('.online-indicator');
    if (!onlineIndicator) return;

    // Simulate random online/offline status changes
    setInterval(() => {
        const isOnline = Math.random() > 0.3;
        if (isOnline) {
            onlineIndicator.style.background = 'var(--theme-secondary)';
            onlineIndicator.style.boxShadow = '0 0 10px rgba(59, 130, 246, 0.5)';
        } else {
            onlineIndicator.style.background = 'var(--text-muted)';
            onlineIndicator.style.boxShadow = 'none';
        }
    }, 30000); // Check every 30 seconds
}

// Scroll Progress Indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--theme-red), var(--theme-blue), var(--theme-yellow));
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    });
}

// Video Card Hover Effects
function initVideoCardEffects() {
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add glow effect
            card.style.boxShadow = `
                0 0 20px rgba(59, 130, 246, 0.3),
                0 0 40px rgba(239, 68, 68, 0.2)
            `;
        });

        card.addEventListener('mouseleave', () => {
            // Remove glow effect
            card.style.boxShadow = '';
        });
    });
}

// Highlight Card Animation
function initHighlightAnimations() {
    const highlightCards = document.querySelectorAll('.highlight-card');

    const observerOptions = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 200);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    highlightCards.forEach(card => {
        observer.observe(card);
    });
}

// Social Platform Hover Effects
function initSocialPlatformEffects() {
    const platforms = document.querySelectorAll('.social-platform');

    platforms.forEach(platform => {
        platform.addEventListener('mouseenter', () => {
            // Scale up and add glow
            platform.style.transform = 'translateY(-4px) scale(1.02)';
            platform.style.boxShadow = `
                0 10px 30px rgba(6, 182, 212, 0.3),
                0 0 50px rgba(6, 182, 212, 0.2)
            `;
        });

        platform.addEventListener('mouseleave', () => {
            // Reset
            platform.style.transform = '';
            platform.style.boxShadow = '';
        });
    });
}

// Utility Functions

// Format number with K or M suffix
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Get random element from array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Debounce function
function debounce(func, wait) {
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

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initVideoPlayer();
    initVideoFilters();
    initStatsAnimation();
    initLightBeamEffects();
    initHeroGreeting();
    initSocialStats();
    initOnlineStatus();
    initScrollProgress();
    initVideoCardEffects();
    initHighlightAnimations();
    initSocialPlatformEffects();
});

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initVideoPlayer,
        initVideoFilters,
        initStatsAnimation,
        initLightBeamEffects,
        initHeroGreeting,
        initSocialStats,
        initOnlineStatus,
        initScrollProgress,
        initVideoCardEffects,
        initHighlightAnimations,
        initSocialPlatformEffects,
        formatNumber,
        getRandomElement,
        debounce
    };
}
