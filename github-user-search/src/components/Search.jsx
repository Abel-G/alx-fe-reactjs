import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import '../App.css'; 

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
  return (
    <div className="search-container">
      <h1 className='m-3'>Github User Search</h1>
      <form onSubmit={handleSubmit} className="grid">
        <input className="input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input className="input"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          
        />
        <input className="input"
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repositories (optional)"
          
        />
        <button type="submit" className="search-button btn">
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