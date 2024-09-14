import Router from '../../Router.jsx'
import { createContext, useState } from 'react'
import styles from './App.module.css'
// import { ThemeContext } from '../../ThemeContext.jsx'

export const ThemeContext = createContext()

function App() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
    const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode.matches)

    function toggleTheme() {
        setIsDarkMode((prevDarkMode) => !prevDarkMode)
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <div
                className={`${styles.app} ${isDarkMode ? styles.darkMode : styles.lightMode}`}
            >
                <Router />
            </div>
        </ThemeContext.Provider>
    )
}

export default App
