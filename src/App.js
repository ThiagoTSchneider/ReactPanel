import React from 'react';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import './App.css';
import Navbar from './Navbar/Navbar';


function App() {
  return (
    <div className="app-container">
      <Navbar />
        <div className="header-text">
          <p>💬 = </p>
        </div>
        <div className="button-container">
          <button className="button">Pausar</button>
          <button className="button">Proximo</button>
        </div>
      <div className="input-container">
  <input type="text" placeholder="Digite..." />
  <button>
    <SendRoundedIcon />
  </button>
</div>
    </div>
  );
}

export default App;
