    // init AOS
    AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic' });

    // set current year
    // document.getElementById('yr').innerText = new Date().getFullYear();

    // Mobile menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileBtn?.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('open');
    });

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    // persistent choice using localStorage
    const userTheme = localStorage.getItem('site-theme');
    if (userTheme === 'dark') document.documentElement.classList.add('dark');

    themeToggle?.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('site-theme', isDark ? 'dark' : 'light');
    });

    // Close any dropdowns on outside click (desktop groups handled via CSS group hover)
    document.addEventListener('click', (e) => {
      // future enhancements
    });