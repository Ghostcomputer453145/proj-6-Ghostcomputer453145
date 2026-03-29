import React from "react";

export default function Filters({ options, selected, onSelect }) {
  return (
    <select value={selected} onChange={(e) => onSelect(e.target.value)}>
      <option value="all">All</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  );
}