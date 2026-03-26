import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  );
}