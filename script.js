const cursor = document.querySelector('.cursor');
const blobs = document.querySelectorAll('.blob');

// 1. حركة الماوس والخلفية
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    blobs.forEach((blob, index) => {
        const shift = (index + 1) * 25;
        blob.style.transform = `translate(${x * shift}px, ${y * shift}px)`;
    });
});

// 2. أنيميشن الظهور
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .skill-card, .project-card, .contact-box').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});

// 3. تأثيرات الماوس
document.querySelectorAll('a, button, .project-card').forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.style.transform = "scale(2.5)";
        cursor.style.background = "rgba(0, 242, 255, 0.1)";
    });
    item.addEventListener('mouseleave', () => {
        cursor.style.transform = "scale(1)";
        cursor.style.background = "transparent";
    });
});

// CSS Injection
const style = document.createElement('style');
style.innerHTML = `
    .hidden { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
    .show { opacity: 1 !important; transform: translateY(0) !important; }
`;
document.head.appendChild(style);

// منع القائمة اليمنى (Right Click)
document.addEventListener('contextmenu', (e) => e.preventDefault());

// منع اختصارات الكيبورد المشهورة للـ Inspect
document.addEventListener('keydown', (e) => {
    if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || 
        (e.ctrlKey && e.key === 'U')
    ) {
        e.preventDefault();
        return false;
    }
});