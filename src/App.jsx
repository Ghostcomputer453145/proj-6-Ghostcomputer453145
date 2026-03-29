import React, { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import ThemeSelector from "./components/ThemeSelector";
import SideNav from "./components/SideNav";
import "./App.css";

export default function App() {
  const [selectedTheme, setSelectedTheme] = useState("");

  return (
    <div className="app-container">
      <SideNav />
      <div className="main-content">
        <Header theme={selectedTheme} />
        <ThemeSelector selected={selectedTheme} setSelected={setSelectedTheme} />
        <Dashboard selectedTheme={selectedTheme} />
      </div>
    </div>
  );
}