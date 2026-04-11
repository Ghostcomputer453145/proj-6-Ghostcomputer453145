import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import ThemeSelector from "./components/ThemeSelector";
import "./App.css";

export default function App() {
  const location = useLocation();
  const [selectedTheme, setSelectedTheme] = useState("");

  useEffect(() => {
    setSelectedTheme("");
  }, []);

  return (
    <>
      <Header theme={selectedTheme} />
      <ThemeSelector selected={selectedTheme} setSelected={setSelectedTheme} />
      <Dashboard selectedTheme={selectedTheme} />
    </>
  );
}