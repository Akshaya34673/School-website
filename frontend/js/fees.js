import { fetchAPI } from './api.js';

const renderFees = async () => {
  const feesList = await fetchAPI('fees');
  const feeContainer = document.getElementById('fee-container');

  feesList.forEach(fee => {
    const row = `
      <tr>
        <td>${fee.grade}</td>
        <td>${fee.fee}</td>
      </tr>`;
    feeContainer.innerHTML += row;
  });
};

renderFees();
