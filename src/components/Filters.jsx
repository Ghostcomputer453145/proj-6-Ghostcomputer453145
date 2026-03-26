import React from "react";

export default function Filters({ options, onSelect }) {
  return (
    <div className="filters">
      {options.map((opt) => (
        <button key={opt} onClick={() => onSelect(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
}