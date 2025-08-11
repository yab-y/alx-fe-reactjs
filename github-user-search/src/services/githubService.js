import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

/**
 * Fetch advanced GitHub user search results
 * @param {Object} params - Search parameters
 * @param {string} params.username - The username or keyword to search
 * @param {string} [params.location] - Filter by location
 * @param {number} [params.minRepos] - Filter by minimum public repos
 * @returns {Promise<Object>} API response data
 */
export const fetchAdvancedUserSearch = async ({ username, location, minRepos }) => {
  try {
    let query = username ? `${username}` : "";

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(`${BASE_URL}${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching advanced user search:", error);
    throw error;
  }
};
