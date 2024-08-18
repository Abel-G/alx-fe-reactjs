import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfilePage from './components/ProfilePage';
import UserContext, { UserProvider } from './Context/UserContext'

const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

function App() {
  return (
    <UserProvider userData={userData}>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;