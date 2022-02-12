import React from 'react';
import { Advertisement } from './features/advertisement/Advertisement';
import { AdComponent } from './components/Ad/AdComponent';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          An M.V.P. for AdEase
        </p>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Advertisement />} />
          <Route path="ad" element={<AdComponent />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
