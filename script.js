
window.addEventListener('load', () => {
    const loader = document.getElementById('loader-overlay');
    if (loader) {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';
        setTimeout(() => loader.style.display = 'none', 500);
    }
});


const toggleBtn = document.getElementById('dark-mode-toggle');
const icon = toggleBtn?.querySelector('i');


if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    if (icon) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
}

toggleBtn?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    if (icon) {
        icon.classList.toggle('fa-moon', !isDark);
        icon.classList.toggle('fa-sun', isDark);
    }
});


const fadeEls = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target); 
        }
    });
}, { threshold: 0.12 });

fadeEls.forEach(el => fadeObserver.observe(el));


const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target;
            const targetWidth = fill.getAttribute('data-width');
           
            setTimeout(() => {
                fill.style.width = targetWidth + '%';
            }, 200);
            skillObserver.unobserve(fill);
        }
    });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillObserver.observe(fill));