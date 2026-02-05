document.addEventListener('DOMContentLoaded', () => {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#ff4d6d', '#ff69b4', '#ff85a2', '#ffc0cb', '#ff1493', '#ff6b6b'];
    const hearts = ['❤️', '💖', '💕', '💗', '💓', '💘', '💝'];

    // Play celebration audio
    const audio = new Audio('Roth 2 copy.m4a');
    audio.play();

    // Create confetti
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Randomly choose between colored square or heart
        if (Math.random() > 0.5) {
            confetti.classList.add('heart');
            confetti.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        } else {
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        }
        
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }

    // Create floating hearts from bottom
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '0';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        
        confettiContainer.appendChild(heart);
        
        setTimeout(() => heart.remove(), 4000);
    }

    // Initial burst of confetti
    for (let i = 0; i < 50; i++) {
        setTimeout(() => createConfetti(), i * 50);
    }

    // Continuous confetti
    setInterval(() => {
        createConfetti();
    }, 200);

    // Continuous floating hearts
    setInterval(() => {
        createFloatingHeart();
    }, 500);
});
