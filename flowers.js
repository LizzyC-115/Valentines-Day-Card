document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.flowers-container');
    const colors = ['#ff69b4', '#ff9ecd', '#ffb3e6', '#ff4d94', '#ff80bf'];
    
    function createFlower(x, y) {
        const flower = document.createElement('div');
        flower.className = 'blooming-flower';
        flower.style.left = x + 'px';
        flower.style.bottom = y + 'px';
        
        // Create stem
        const stem = document.createElement('div');
        stem.className = 'stem';
        
        // Create flower head
        const flowerHead = document.createElement('div');
        flowerHead.className = 'flower-head';
        
        // Create petals
        const petalCount = 8;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.background = color;
            
            const angle = (360 / petalCount) * i;
            const radius = 15; // Distance from center
            const tx = Math.cos(angle * Math.PI / 180) * radius;
            const ty = Math.sin(angle * Math.PI / 180) * radius;
            
            petal.style.setProperty('--tx', `${tx}px`);
            petal.style.setProperty('--ty', `${ty}px`);
            petal.style.animation = `petalBloom 1.5s ease-out forwards ${1 + (i * 0.1)}s`;
            
            flowerHead.appendChild(petal);
        }
        
        // Create center
        const center = document.createElement('div');
        center.className = 'center';
        flowerHead.appendChild(center);
        
        flower.appendChild(stem);
        flower.appendChild(flowerHead);
        container.appendChild(flower);
    }
    
    function createRandomFlower() {
        // Create flowers in different sections of the page
        const section = Math.floor(Math.random() * 5); // 0: bottom, 1: left, 2: right, 3: top, 4: center
        let x, y;

        switch(section) {
            case 0: // bottom
                x = Math.random() * window.innerWidth;
                y = Math.random() * 100;
                break;
            case 1: // left side
                x = Math.random() * 100;
                y = Math.random() * window.innerHeight;
                break;
            case 2: // right side
                x = window.innerWidth - (Math.random() * 100) - 50;
                y = Math.random() * window.innerHeight;
                break;
            case 3: // top
                x = Math.random() * window.innerWidth;
                y = window.innerHeight - (Math.random() * 100) - 50;
                break;
            case 4: // center area
                x = window.innerWidth * (0.3 + Math.random() * 0.4); // 30% to 70% of width
                y = window.innerHeight * (0.3 + Math.random() * 0.4); // 30% to 70% of height
                break;
        }

        createFlower(x, y);
    }
    
    // Create initial flowers
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            createRandomFlower();
        }, i * 50);
    }
    
    // Add more flowers periodically
    // Add new flowers periodically
    setInterval(() => {
        if (container.children.length < 40) {
            createRandomFlower();
        }
    }, 2000);

    // Handle window resize
    window.addEventListener('resize', () => {
        // Clear existing flowers
        container.innerHTML = '';
        // Create new flowers
        for (let i = 0; i < 25; i++) {
            setTimeout(() => {
                createRandomFlower();
            }, i * 50);
        }
    });
});
