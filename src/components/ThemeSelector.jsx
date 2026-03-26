const themes = ["Brewery", "Books", "Events", "Recipes", "Weather", "Marvel", "Museum", "Gaming", "Rewards", "Food"]

const ThemeSelector = ({ setTheme }) => {
  return (
    <div>
      {themes.map((theme) => (
        <button key={theme} onClick={() => setTheme(theme)}>
          {theme}
        </button>
      ))}
    </div>
  )
}

export default ThemeSelector