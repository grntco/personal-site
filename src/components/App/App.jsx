import Router from '../Router.jsx'
import { createContext, useState } from 'react'
import Page from '../layout/Page/Page.jsx'
import styles from './App.module.css'

const ThemeContext = createContext('light')

function App() {
    const [theme, setTheme] = useState('light')
    const className = theme + 'Theme';

    return (
        <ThemeContext.Provider value={theme}>
            <div className={`${styles.app} ${styles[`${className}`]}`} toggleTheme={toggleTheme}>
                <Router />
            </div>
        </ThemeContext.Provider>
    )

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
}

export default App
