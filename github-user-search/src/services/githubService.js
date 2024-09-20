import axios from 'axios';

const apiUrl = process.env.REACT_APP_GITHUB_API_URL || 'https://api.github.com';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${apiUrl}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user', error);
    throw error;
  }
};
