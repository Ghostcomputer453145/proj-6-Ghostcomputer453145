import { useState } from "react"
import Header from "./components/Header"
import Dashboard from "./components/Dashboard"
import ThemeSelector from "./components/ThemeSelector"
import "./App.css"

function App() {
  const [currentTheme, setCurrentTheme] = useState("brewery")

  return (
    <div className={`app ${currentTheme}`}>
      <Header />
      <p><strong>Name:</strong> Yumin Jang</p>
      <p><strong>Z Number:</strong> Z23655899</p>
      <ThemeSelector setTheme={setCurrentTheme} />
      <Dashboard theme={currentTheme} />
    </div>
  )
}

export default App