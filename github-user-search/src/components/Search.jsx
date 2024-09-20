import React, { useState, useEffect } from 'react';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api.github.com/users/${searchTerm}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a GitHub user"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : userData ? (
        <div>
          <img src={userData.avatar_url} alt={userData.login} />
          <h2>{userData.login}</h2>
        </div>
      ) : (
        <p>Looks like we can't find the user.</p>
      )}
    </div>
  );
}

export default Search;