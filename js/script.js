document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.navbar__toggle');
  const menu = document.querySelector('.navbar__menu');
  const navbar = document.querySelector('.navbar');

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.querySelector('.lightbox__image');
  const lightboxClose = document.querySelector('.lightbox__close');
  const images = document.querySelectorAll('.gallery-card__image img');

  let lastScroll = 0;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
      navbar.classList.add('hide');
    } else {
      navbar.classList.remove('hide');
    }

    lastScroll = currentScroll;
  });

  images.forEach(img => {
    img.addEventListener('click', (e) => {
      e.preventDefault();
      lightbox.classList.add('active');
      lightboxImage.src = img.src;
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });
});

const slides = document.querySelectorAll('.hero__slide');
const prev = document.querySelector('.hero__prev');
const next = document.querySelector('.hero__next');

let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(nextSlide, 5000);

const form = document.querySelector('.contact__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensaje enviado (demo)');
  form.reset();
});