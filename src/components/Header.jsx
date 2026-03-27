import React from 'react';

export default function Header({ theme }) {

  const formatThemeWords = (themeName) => {
    if (!themeName) return "";

    const cleaned = themeName.replace("Theme", "");

    const words = cleaned.match(/([A-Z]+(?=[A-Z][a-z])|[A-Z]?[a-z]+|[A-Z]+)/g) || [];

    return words
      .map(word => {
        const upperWord = word.toUpperCase();
        if (["API","DB","TV","IP"].includes(upperWord)) return upperWord;
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  const formatTitle = (themeName) => {
    if (!themeName) return "Multi Data Dashboard";
    return `${formatThemeWords(themeName)} Data Dashboard`;
  };

  const formatWelcome = (themeName) => {
    if (!themeName) return "Welcome to the data management interface";
    return `Welcome to the data management interface of ${formatThemeWords(themeName)}`;
  };

  return (
    <header className="header">
      <h1>{formatTitle(theme)}</h1>
      <p><strong>Name:</strong> Yumin Jang</p>
      <p><strong>Z Number:</strong> Z23655899</p>
      <p>{formatWelcome(theme)}</p>
    </header>
  );
}