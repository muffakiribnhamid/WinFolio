import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BootScreen from './components/BootScreen'
import { setDelay } from '../setTimeout'
import LockScreen from './components/LockScreen'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);

  setDelay(() => {
    setLoading(false);
  }, 3000);


  return (
   <div className=''>
   {loading ? <BootScreen/> :<LockScreen/>}
   </div>
  )
}

export default App
