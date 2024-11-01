import Router from '../../Router.jsx'
import { useContext } from 'react'
import styles from './App.module.css'
import { ThemeContext, ThemeContextProvider } from '../../ThemeContext.jsx'

const App = () => {
    const { isDarkMode } = useContext(ThemeContext)
    return (
        <div
            className={`${styles.app} ${isDarkMode ? styles.darkMode : styles.lightMode}`}
        >
            <Router />
        </div>
    )
}

const AppWithThemeProvider = () => {
    return (
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    )
}

export default AppWithThemeProvider
