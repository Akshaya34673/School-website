import { fetchAPI } from './api.js';

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  };

  const response = await fetchAPI('contact', 'POST', formData);
  alert(response.message || 'Your message has been sent!');
  contactForm.reset();
});
