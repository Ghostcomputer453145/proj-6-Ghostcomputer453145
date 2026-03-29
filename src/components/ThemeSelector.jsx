import React from "react";
import { themes } from "../themes";

export default function ThemeSelector({ selected, setSelected }) {
  return (
    <div className="theme-selector">
      <label>Theme: </label>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="">Pick a theme</option>
        {Object.keys(themes).map((key) => (
          <option key={key} value={key}>{key.replace("Theme", "")}</option>
        ))}
      </select>
    </div>
  );
}