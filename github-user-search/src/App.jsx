import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/Search';

function App() {
  

  return (
    <div>
      <Search onSearch={handleSearch} />
    </div>
  );
}

export default App;
