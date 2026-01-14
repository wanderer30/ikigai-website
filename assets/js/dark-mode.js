// Dark Mode Toggle Functionality
// MODIFIED FOR DARK MODE DEFAULT - Light mode functionality commented out
// To re-enable theme switching: Uncomment all commented sections and change default back to 'light'
(function() {
    // LIGHT MODE INITIALIZATION - COMMENTED OUT
    // let isInitialized = false;
    
    // Apply dark mode theme and update logo
    function applyTheme() {
        // DARK MODE DEFAULT - Always apply dark mode
        // To re-enable theme switching: Uncomment the lines below and change default to 'light'
        // const currentTheme = localStorage.getItem('theme') || 'light';
        // const isDark = currentTheme === 'dark';
        
        // Always apply dark mode
        document.body.classList.add('dark-mode');
        
        // Update logo - try multiple times for dynamically loaded content
        function updateLogo() {
            const logoImg = document.querySelector('.logo img');
            if (logoImg && logoImg.src) {
                // Always use black logo for dark mode
                if (!logoImg.src.includes('black.jpg')) {
                    logoImg.src = logoImg.src.replace('white.jpg', 'black.jpg');
                }
                
                // LIGHT MODE LOGO LOGIC - COMMENTED OUT
                // To re-enable: Uncomment and restore conditional logic above
                /*
                if (isDark) {
                    if (!logoImg.src.includes('black.jpg')) {
                        logoImg.src = logoImg.src.replace('white.jpg', 'black.jpg');
                    }
                } else {
                    if (!logoImg.src.includes('white.jpg')) {
                        logoImg.src = logoImg.src.replace('black.jpg', 'white.jpg');
                    }
                }
                */
            }
        }
        
        updateLogo();
        
        // Also try after a short delay for w3-include-html
        setTimeout(updateLogo, 200);
        setTimeout(updateLogo, 500);
        
        // LIGHT MODE ICON UPDATE - COMMENTED OUT
        // To re-enable: Uncomment the function below
        /*
        // Update icon
        function updateIcon() {
            const toggleIcon = document.querySelector('#darkModeToggle .toggle-icon');
            if (toggleIcon) {
                toggleIcon.textContent = isDark ? '☀️' : '🌙';
            }
        }
        
        updateIcon();
        setTimeout(updateIcon, 200);
        setTimeout(updateIcon, 500);
        */
    }
    
    // LIGHT MODE TOGGLE FUNCTION - COMMENTED OUT
    // To re-enable: Uncomment the entire function below
    /*
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
    */
    
    // LIGHT MODE INITIALIZATION - COMMENTED OUT
    // To re-enable: Uncomment the function below
    /*
    // Initialize once
    function init() {
        if (isInitialized) return;
        
        // Use event delegation - single listener on document
        document.addEventListener('click', function(e) {
            if (e.target.closest('#darkModeToggle')) {
                e.preventDefault();
                toggleDarkMode();
            }
        }, { passive: true });
        
        isInitialized = true;
    }
    */
    
    // Apply theme immediately
    applyTheme();
    
    // Initialize after DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // LIGHT MODE INIT - COMMENTED OUT
            // init();
            applyTheme();
        });
    } else {
        // LIGHT MODE INIT - COMMENTED OUT
        // init();
        applyTheme();
    }
    
    // Also apply theme after window loads (for w3-include-html)
    window.addEventListener('load', function() {
        // LIGHT MODE INIT - COMMENTED OUT
        // init();
        applyTheme();
    });
})();
