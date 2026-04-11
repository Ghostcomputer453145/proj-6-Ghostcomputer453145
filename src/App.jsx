import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import ThemeSelector from "./components/ThemeSelector";
import SideNav from "./components/SideNav";
import "./App.css";

export default function App() {
  const location = useLocation();

  const [selectedTheme, setSelectedTheme] = useState("");

  useEffect(() => {
    const themeFromNav = location.state?.theme;

    if (themeFromNav) {
      setSelectedTheme(themeFromNav);
    } else {
      setSelectedTheme("");
    }
  }, [location.pathname, location.state]);

  useEffect(() => {
    if (selectedTheme) {
      localStorage.setItem("lastTheme", selectedTheme);
    }
  }, [selectedTheme]);

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