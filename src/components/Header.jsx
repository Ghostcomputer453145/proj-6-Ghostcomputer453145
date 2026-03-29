import React from "react";

export default function Header({ theme }) {
  const formatTheme = theme => theme === "booksTheme" ? "Books" : theme === "breweryTheme" ? "Breweries" : "";
  return (
    <header className="header">
      <h1>{formatTheme(theme) ? `${formatTheme(theme)} Dashboard` : "Multi Data Dashboard"}</h1>
      <p><strong>Name:</strong> Yumin Jang</p>
      <p><strong>Z Number:</strong> Z23655899</p>
      <p>{formatTheme(theme) ? `Welcome to ${formatTheme(theme)} dashboard` : "Welcome to the data management interface"}</p>
    </header>
  );
}