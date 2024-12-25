import { fetchAPI } from './api.js';

const renderClubs = async () => {
  const clubs = await fetchAPI('club');
  const clubContainer = document.getElementById('club-container');

  clubs.forEach(club => {
    const card = `
      <div class="club-card">
        <img src="${club.image}" alt="${club.name}">
        <h3>${club.name}</h3>
        <p>${club.description}</p>
      </div>`;
    clubContainer.innerHTML += card;
  });
};

renderClubs();
