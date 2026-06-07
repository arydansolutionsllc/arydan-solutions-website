const yearElements = document.querySelectorAll('#year');
yearElements.forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}
