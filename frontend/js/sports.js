import { fetchAPI } from './api.js';

const renderSports = async () => {
  const sports = await fetchAPI('sports');
  const sportsContainer = document.getElementById('sports-container');

  sports.forEach(sport => {
    const card = `
      <div class="sport-card">
        <img src="${sport.image}" alt="${sport.name}">
        <h3>${sport.name}</h3>
      </div>`;
    sportsContainer.innerHTML += card;
  });
};

renderSports();
