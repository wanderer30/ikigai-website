// Dark Mode Toggle Functionality
(function() {
    let isInitialized = false;
    
    // Apply saved theme
    function applyTheme() {
        const currentTheme = localStorage.getItem('theme') || 'light';
        const isDark = currentTheme === 'dark';
        
        if (isDark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        
        // Update logo
        const logoImg = document.querySelector('.logo img');
        if (logoImg && logoImg.src) {
            if (isDark) {
                logoImg.src = logoImg.src.replace('white.jpg', 'black.jpg');
            } else {
                logoImg.src = logoImg.src.replace('black.jpg', 'white.jpg');
            }
        }
        
        // Update icon
        const toggleIcon = document.querySelector('#darkModeToggle .toggle-icon');
        if (toggleIcon) {
            toggleIcon.textContent = isDark ? '☀️' : '🌙';
        }
    }
    
    // Toggle dark mode
    function toggleDarkMode() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        const newTheme = isDarkMode ? 'dark' : 'light';
        
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        const toggleIcon = document.querySelector('#darkModeToggle .toggle-icon');
        if (toggleIcon) {
            toggleIcon.textContent = isDarkMode ? '☀️' : '🌙';
        }
        
        // Update logo
        const logo = document.querySelector('.logo img');
        if (logo && logo.src) {
            if (isDarkMode) {
                logo.src = logo.src.replace('white.jpg', 'black.jpg');
            } else {
                logo.src = logo.src.replace('black.jpg', 'white.jpg');
            }
        }
    }
    
    // Initialize once
    function init() {
        if (isInitialized) return;
        
        applyTheme();
        
        // Use event delegation - single listener on document
        document.addEventListener('click', function(e) {
            if (e.target.closest('#darkModeToggle')) {
                e.preventDefault();
                toggleDarkMode();
            }
        }, { once: false, passive: true });
        
        isInitialized = true;
    }
    
    // Apply theme immediately
    if (document.body) {
        applyTheme();
    }
    
    // Initialize after DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Also try after window loads (for w3-include-html)
    window.addEventListener('load', function() {
        if (!isInitialized) {
            init();
        }
        applyTheme();
    });
})();
