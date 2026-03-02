// Heart shapes for falling animation
const heartShapes = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘', '🩷', '♥️'];

// Create falling hearts
function createFallingHeart() {
    const container = document.getElementById('heartsContainer');
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.innerHTML = heartShapes[Math.floor(Math.random() * heartShapes.length)];
    
    // Random properties
    const startX = Math.random() * window.innerWidth;
    const size = Math.random() * 20 + 15;
    const duration = Math.random() * 4 + 4;
    const delay = Math.random() * 2;
    
    heart.style.left = startX + 'px';
    heart.style.fontSize = size + 'px';
    heart.style.animationDuration = duration + 's';
    heart.style.animationDelay = delay + 's';
    
    // Add sway animation
    heart.style.animation = `fall ${duration}s linear ${delay}s infinite, sway ${duration/2}s ease-in-out ${delay}s infinite`;
    
    container.appendChild(heart);
    
    // Remove heart after animation to prevent memory issues
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, (duration + delay) * 1000);
}

// Initialize falling hearts
function initFallingHearts() {
    // Create initial batch
    for (let i = 0; i < 15; i++) {
        setTimeout(createFallingHeart, i * 200);
    }
    
    // Continue creating hearts
    setInterval(createFallingHeart, 500);
}

// Gift box click handler
function initGiftInteraction() {
    const giftContainer = document.getElementById('giftContainer');
    const letterContainer = document.getElementById('letterContainer');
    const clickHint = document.getElementById('clickHint');
    
    giftContainer.addEventListener('click', function() {
        // Hide gift box
        giftContainer.style.display = 'none';
        
        // Show letter and unboxed gift
        letterContainer.classList.remove('hidden');
        
        // Hide hint
        clickHint.classList.add('hidden');
        
        // Add extra hearts celebration
        for (let i = 0; i < 20; i++) {
            setTimeout(createFallingHeart, i * 100);
        }
        
        // Play sound if available (optional)
        // playOpenSound();
		// 🎵 PUSTI PESMU
        const pesma = document.getElementById('ljubavnaPesma');
        pesma.play();
    });
}

// Background pulsing hearts effect
function initBackgroundPulse() {
    const background = document.querySelector('.background');
    
    // Add subtle color shift
    let hue = 0;
    setInterval(() => {
        hue = (hue + 1) % 20;
        background.style.filter = `hue-rotate(${hue - 10}deg) brightness(1.02)`;
    }, 100);
}



// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initFallingHearts();
    initGiftInteraction();
    initBackgroundPulse();
});

// Handle window resize
window.addEventListener('resize', function() {
    // Clear existing hearts on resize
    const container = document.getElementById('heartsContainer');
    container.innerHTML = '';
    
    // Reinitialize
    for (let i = 0; i < 10; i++) {
        setTimeout(createFallingHeart, i * 300);
    }
});
