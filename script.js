const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#nav-links');
const joinForm = document.querySelector('.join-form');
const formNote = document.querySelector('.form-note');

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  navLinks?.classList.toggle('is-open', !isOpen);
});

navLinks?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navToggle?.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('is-open');
  }
});

joinForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(joinForm);
  const name = data.get('name')?.toString().trim() || 'friend';
  const snack = data.get('snack')?.toString().trim() || 'snack';

  formNote.textContent = `Thanks, ${name}! We saved you a seat and noted your love of ${snack}.`;
  joinForm.reset();
});
