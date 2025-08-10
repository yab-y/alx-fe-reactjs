import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export async function searchUsers(query) {
  if (!query) return [];
  const response = await axios.get(`${BASE_URL}/search/users`, {
    params: { q: query }
  });
  return response.data.items;
}
