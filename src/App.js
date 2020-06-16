import React from 'react';
import './App.css';
import Title from './components/title/Title';
import { Button } from './components/button/Button';
import HeroBanner from './components/heroBanner/HeroBanner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeroBanner />
      </header>
    </div>
  );
}

export default App;
