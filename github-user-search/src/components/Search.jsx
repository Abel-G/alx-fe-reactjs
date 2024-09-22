import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import './App.css'; 

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch({ username, location, minRepos });
    }
  };

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError('');
    setUserData(null);
    try {
      const data = await fetchUserData(searchParams.username, searchParams.location, searchParams.minRepos);
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="search-input"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          className="search-input"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repositories (optional)"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="results">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {userData && (
          <ul className="results-list">
            {userData.map((user) => (
              <li key={user.id} className="result-item">
                <img src={user.avatar_url} alt="User Avatar" className="avatar" />
                <div className="details">
                  <h2>{user.login}</h2>
                  <p>{user.location ? `Location: ${user.location}` : ''}</p>
                  <p>Public Repositories: {user.public_repos}</p>
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="profile-link">
                    Visit GitHub Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;