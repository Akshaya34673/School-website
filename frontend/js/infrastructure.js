import { fetchAPI } from './api.js';

const renderFacilities = async () => {
  const facilities = await fetchAPI('facility');
  const facilityContainer = document.getElementById('facility-container');

  facilities.forEach(facility => {
    const card = `
      <div class="facility-card">
        <img src="${facility.image}" alt="${facility.name}">
        <h3>${facility.name}</h3>
        <p>${facility.description}</p>
      </div>`;
    facilityContainer.innerHTML += card;
  });
};

renderFacilities();
