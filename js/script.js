document.addEventListener('DOMContentLoaded', function() {
    // Language toggling
    const enBtn = document.getElementById('en-btn');
    const jpBtn = document.getElementById('jp-btn');
    
    if (enBtn && jpBtn) {
        enBtn.addEventListener('click', function() {
            document.body.classList.remove('jp');
            enBtn.classList.add('active');
            jpBtn.classList.remove('active');
            localStorage.setItem('language', 'en');
        });
        
        jpBtn.addEventListener('click', function() {
            document.body.classList.add('jp');
            jpBtn.classList.add('active');
            enBtn.classList.remove('active');
            localStorage.setItem('language', 'jp');
        });
        
        // Load saved language preference or detect browser language
        const savedLanguage = localStorage.getItem('language');
        const browserLanguage = navigator.language || navigator.userLanguage;
        
        if (savedLanguage === 'jp' || (!savedLanguage && browserLanguage.startsWith('ja'))) {
            document.body.classList.add('jp');
            jpBtn.classList.add('active');
            enBtn.classList.remove('active');
        }
    } else {
        console.error('Language buttons not found!');
    }
    
    // Keyboard animation
    const keys = document.querySelectorAll('.key');
    
    keys.forEach(key => {
        key.addEventListener('click', function() {
            animateKey(this);
        });
    });
    
    // Random key animation for demo
    function randomKeyAnimation() {
        if (keys.length > 0) {
            const keyIndex = Math.floor(Math.random() * keys.length);
            animateKey(keys[keyIndex]);
            
            // Schedule next animation
            const delay = Math.random() * 300 + 100; // 100-400ms delay
            setTimeout(randomKeyAnimation, delay);
        }
    }
    
    function animateKey(key) {
        key.classList.add('active');
        setTimeout(() => {
            key.classList.remove('active');
        }, 100);
    }
    
    // Start random key animation after a delay
    if (keys.length > 0) {
        setTimeout(randomKeyAnimation, 2000);
    }
});
