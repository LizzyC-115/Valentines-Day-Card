document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const heartsContainer = document.getElementById('hearts-container');
    
    let noClickCount = 0;
    let noScale = 1;
    
    // Create floating flowers
    function createFlowers() {
        const flowerContainer = document.querySelector('.flower-container');
        for (let i = 0; i < 5; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.style.left = Math.random() * 100 + 'vw';
            flower.style.animationDelay = Math.random() * 5 + 's';
            flowerContainer.appendChild(flower);
        }
    }

    // Yes button click - go to celebration page
    yesBtn.addEventListener('click', () => {
        window.location.href = 'celebration.html';
    });

    // No button click handler
    noBtn.addEventListener('click', (e) => {
        noClickCount++;
        
        // Shrink button gradually on each click (until click 20)
        if (noClickCount <= 20) {
            noScale = Math.max(0.5, 1 - (noClickCount * 0.025)); // Shrink to minimum 0.5 scale
            noBtn.style.transform = `scale(${noScale})`;
        }
        
        if (noClickCount === 1) {
            document.querySelector('h1').textContent = 'Try Again... Will you be my Valentine? 💕';
        }
        
        if (noClickCount === 3) {
            document.querySelector('h1').textContent = 'Wow, you\'re really playing hard to get! 😘';
        }
        
        if (noClickCount === 6) {
            document.querySelector('h1').textContent = 'Please? 💖';
        }
        
        if (noClickCount === 8) {
            document.querySelector('h1').textContent = 'What are you trying to say?? 🥲';
        }

        if (noClickCount === 12) {
            document.querySelector('h1').textContent = 'You sure you want to do this? 😢';
        }

        if (noClickCount === 15) {
            document.querySelector('h1').textContent = 'Maybe think it over again? 🥺';
        }

        if (noClickCount === 20) {
            document.querySelector('h1').textContent = 'Once more... Will you be my Valentine? 💕';
            // Hide No button and center Yes button
            noBtn.style.display = 'none';
            yesBtn.style.margin = '0 auto';
            document.querySelector('.button-container').style.justifyContent = 'center';
        }
    });

    // Initial flower creation
    createFlowers();
});
