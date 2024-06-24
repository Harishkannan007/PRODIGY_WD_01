const navbar = document.getElementById('navbar');
const navLinks = navbar.querySelectorAll('a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#444';
  } else {
    navbar.style.backgroundColor = '#333';
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    const targetOffset = targetElement.offsetTop - navbar.offsetHeight;
    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth'
    });
  });
});
