import axios from "axios";

const BASE_URL = "https://api.github.com/users";

export async function fetchUserData(username) {
  if (!username) throw new Error("Username is required");

  const response = await axios.get(`${BASE_URL}/${username}`);
  return response.data;
}
