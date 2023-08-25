import logo from './logo.svg';
import './App.css';
import useLocalStorage from './Hooks/Local';
import { useState } from 'react';
import useWindowsResize from './Hooks/useWindowsResize';

function App() {

  const device = useWindowsResize();
    const [isdark, setisdark] = useLocalStorage('tab', false, device);
  
  const toggleTheme = () => {
    if (device !== 'MOBILE') {
      setisdark(!isdark);
    } else {
      
      console.log("You cannot change the theme on mobile");
    }
  }
  
  return (
    <div className={`App ${isdark ? "black" : "white"}`}>
      <button
        id={isdark ? "dark" : "light"}
        onClick={toggleTheme}
      >
        <div className={`ball ${isdark ? "darkball" : "lightball"}`}></div>
      </button>
    </div>
  );
}

export default App;