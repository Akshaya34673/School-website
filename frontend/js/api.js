const API_URL = 'http://localhost:5000';

export const fetchAPI = async (endpoint, method = 'GET', body = null) => {
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };
  if (body) options.body = JSON.stringify(body);

  const response = await fetch(`${API_URL}/${endpoint}`, options);
  return response.json();
};
