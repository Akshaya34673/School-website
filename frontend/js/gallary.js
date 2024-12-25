import { fetchAPI } from './api.js';

const renderGallery = async () => {
  const events = await fetchAPI('event');
  const galleryContainer = document.getElementById('gallery-container');

  events.forEach(event => {
    const card = `
      <div class="gallery-card">
        <h3>${event.name}</h3>
        <p>${event.description}</p>
        <div class="gallery-images">
          ${event.images.map(img => `<img src="${img}" alt="${event.name}">`).join('')}
        </div>
      </div>`;
    galleryContainer.innerHTML += card;
  });
};

renderGallery();
