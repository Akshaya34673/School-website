import { fetchAPI } from './api.js';

const renderFaculty = async () => {
  const facultyList = await fetchAPI('faculty');
  const facultyContainer = document.getElementById('faculty-container');

  facultyList.forEach(faculty => {
    const row = `
      <tr>
        <td>${faculty.name}</td>
        <td>${faculty.subject}</td>
        <td>${faculty.qualification}</td>
      </tr>`;
    facultyContainer.innerHTML += row;
  });
};

renderFaculty();
