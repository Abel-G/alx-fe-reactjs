import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/Search';

function App() {
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
    <div>
      <Search onSearch={handleSearch} />
    </div>
  );
}

export default App;
