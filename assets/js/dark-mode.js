// Dark Mode Toggle Functionality
(function() {
    // Apply saved theme on page load
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
        if (logoImg) {
            if (isDark) {
                if (logoImg.src.includes('white.jpg')) {
                    logoImg.src = logoImg.src.replace('white.jpg', 'black.jpg');
                }
            } else {
                if (logoImg.src.includes('black.jpg')) {
                    logoImg.src = logoImg.src.replace('black.jpg', 'white.jpg');
                }
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
        
        // Save preference
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        const toggleIcon = document.querySelector('#darkModeToggle .toggle-icon');
        if (toggleIcon) {
            toggleIcon.textContent = isDarkMode ? '☀️' : '🌙';
        }
        
        // Update logo
        const logo = document.querySelector('.logo img');
        if (logo) {
            if (isDarkMode) {
                logo.src = logo.src.replace('white.jpg', 'black.jpg');
            } else {
                logo.src = logo.src.replace('black.jpg', 'white.jpg');
            }
        }
    }
    
    // Apply theme immediately
    applyTheme();
    
    // Use event delegation for the toggle button (works even if button loads later)
    document.addEventListener('click', function(e) {
        const toggle = e.target.closest('#darkModeToggle');
        if (toggle) {
            e.preventDefault();
            e.stopPropagation();
            toggleDarkMode();
        }
    });
    
    // Also try to apply theme when header loads
    function checkAndApply() {
        const toggle = document.getElementById('darkModeToggle');
        if (toggle) {
            applyTheme();
        }
    }
    
    // Check multiple times for dynamically loaded content
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(checkAndApply, 100);
            setTimeout(checkAndApply, 500);
        });
    } else {
        setTimeout(checkAndApply, 100);
        setTimeout(checkAndApply, 500);
    }
    
    window.addEventListener('load', function() {
        setTimeout(checkAndApply, 200);
        setTimeout(checkAndApply, 500);
    });
    
    // Watch for when header is added
    const observer = new MutationObserver(function() {
        if (document.getElementById('darkModeToggle')) {
            applyTheme();
        }
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
