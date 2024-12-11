import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import BootScreen from './components/BootScreen';
import { setDelay } from '../setTimeout';
import LockScreen from './components/LockScreen';
import SignIn from './components/SignIn';
import MainScreen from './components/MainScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const [isLocked, setIsLocked] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Set loading state after delay
    setDelay(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleFullscreen = () => {
    document.body.requestFullscreen().catch(err => {
      console.error("Error attempting to enable full-screen mode:", err);
    });
  };

  return (
    <div className=''>
      {loading ? (
        <BootScreen />
      ) : isLocked ? (
        <LockScreen enterFullscreen={handleFullscreen} setIsLocked={setIsLocked} />
      ) : isLoggedIn ? (
        <MainScreen /> // Render MainScreen when logged in
      ) : (
        <SignIn setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;