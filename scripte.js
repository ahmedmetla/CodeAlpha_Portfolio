function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const status = document.getElementById('status');

    if (name === '' || email === '' || message === '') {
        status.style.color = 'red';
        status.textContent = '⚠️ Please fill all fields!';
        return;
    }

    status.style.color = '#d4af37';
    status.textContent = '✅ Message sent successfully!';

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar active link highlight on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (window.scrollY >= top && window.scrollY < top + height) {
            navLinks.forEach(link => {
                link.style.color = '#ffffff';
                if (link.getAttribute('href') === `#${id}`) {
                    link.style.color = '#d4af37';
                }
            });
        }
    });
});