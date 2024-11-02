import Router from '../../Router.jsx'
import styles from './App.module.css'
import { SettingsProvider } from '../../SettingsContext.jsx'

const App = () => {
    return (
        <div className={styles.app}>
            <Router />
        </div>
    )
}

const AppWithThemeProvider = () => {
    return (
        <SettingsProvider>
            <App />
        </SettingsProvider>
    )
}

export default AppWithThemeProvider
