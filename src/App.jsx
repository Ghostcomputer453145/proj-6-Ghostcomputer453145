import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  const [selectedTheme, setSelectedTheme] = useState("");

  return (
    <>
      <Header theme={selectedTheme} />
      <Dashboard selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />
    </>
  );
}

export default App;