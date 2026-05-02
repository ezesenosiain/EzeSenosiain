document.addEventListener('DOMContentLoaded', () => {

  const toggle = document.querySelector('.navbar__toggle');
  const menu = document.querySelector('.navbar__menu');
  const navbar = document.querySelector('.navbar');

  if (toggle) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const current = window.pageYOffset;

    if (current > lastScroll && current > 100) {
      navbar.classList.add('hide');
    } else {
      navbar.classList.remove('hide');
    }

    lastScroll = current;
  });

  const slides = document.querySelectorAll('.hero__slide');
  const prev = document.querySelector('.hero__prev');
  const next = document.querySelector('.hero__next');

  if (slides.length) {
    let current = 0;

    function showSlide(i) {
      slides.forEach(s => s.classList.remove('active'));
      slides[i].classList.add('active');
    }

    function nextSlide() {
      current = (current + 1) % slides.length;
      showSlide(current);
    }

    function prevSlide() {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    }

    if (next) next.addEventListener('click', nextSlide);
    if (prev) prev.addEventListener('click', prevSlide);

    setInterval(nextSlide, 5000);
  }

  const form = document.querySelector('.contact__form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Mensaje enviado (demo)');
      form.reset();
    });
  }

});