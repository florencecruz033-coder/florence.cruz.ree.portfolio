// Navbar toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
burger.addEventListener('click', ()=>{ nav.classList.toggle('nav-active'); });

// Fade-in sections
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {threshold:0.2, rootMargin:"0px 0px -50px 0px"};
const appearOnScroll = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader=>appearOnScroll.observe(fader));

// Contact form
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Scroll progress bar
const progressBar = document.getElementById('progressBar');
window.addEventListener('scroll', ()=>{
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop/docHeight)*100;
    progressBar.style.width = scrollPercent+"%";
});

