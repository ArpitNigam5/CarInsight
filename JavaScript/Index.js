<<<<<<< HEAD
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

links.forEach(link => {
    link.addEventListener('click', function(event) {
    event.preventDefault();
    links.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
    });
});

window.addEventListener('scroll', function() {
sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 3 &&
        window.pageYOffset < sectionTop + sectionHeight) {
        links.forEach(link => link.classList.remove('active'));
        const targetLink = document.querySelector(`a[href="#${section.id}"]`);
        targetLink.classList.add('active');
    }
    });
=======
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

links.forEach(link => {
    link.addEventListener('click', function(event) {
    event.preventDefault();
    links.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
    });
});

window.addEventListener('scroll', function() {
sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 3 &&
        window.pageYOffset < sectionTop + sectionHeight) {
        links.forEach(link => link.classList.remove('active'));
        const targetLink = document.querySelector(`a[href="#${section.id}"]`);
        targetLink.classList.add('active');
    }
    });
>>>>>>> 8f44abc (Initial Commit)
});