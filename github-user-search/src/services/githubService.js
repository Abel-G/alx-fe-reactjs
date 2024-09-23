import axios from 'axios';

export const fetchUserData = async (username, location = '', minRepos = 0) => {
  const baseUrl = 'https://api.github.com/search/users?q';
  let query = `q=${username}`;

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  const response = await axios.get(`${baseUrl}?${query}`);
  const data = response.data; 

  if (!data.items || !data.items.length) {
    throw new Error("No users found matching your criteria.");
  }

  return data.items[0]; 
};