import React from "react";
import { themes } from "../themes";

export default function ThemeSelector({ theme, setTheme }) {
  return (
    <div className="theme-selector">
      <label>Theme:</label>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="">Pick a theme to start</option>
        {Object.keys(themes).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
}