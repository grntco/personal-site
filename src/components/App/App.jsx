import Router from '../../Router.jsx'
import { createContext, useContext, useState } from 'react'
import styles from './App.module.css'
import { ThemeContext } from '../../ThemeContext.jsx'

function App() {
    const [theme, setTheme] = useState('light')
    // const theme = useContext(ThemeContext)
    const className = theme + 'Theme'

    return (
        <ThemeContext.Provider value={theme}>
            <div
                className={`${styles.app} ${styles[`${className}`]}`}
                // toggleTheme={toggleTheme}
            >
                <Router />
            </div>
        </ThemeContext.Provider>
    )
}

export default App
