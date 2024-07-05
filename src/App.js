import React, { useState, useEffect } from 'react';
import './App.css';
import Desktop from './component/Desktopweb/Desktop';
import Mobile from './component/MobileWeb/Mobile';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  
  return (
    <div className="App">
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  );
}

export default App;
