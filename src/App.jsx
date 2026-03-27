import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  const [selectedTheme, setSelectedTheme] = useState("");

  return (
    <>
      <Header theme={selectedTheme} />
      <Dashboard setSelectedTheme={setSelectedTheme} selectedTheme={selectedTheme} />
    </>
  );
}

export default App;