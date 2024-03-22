import './App.css'
import Router from '../Router.jsx'
import { createContext, useState } from 'react'
import Page from '../layout/Page/Page.jsx'

const ThemeContext = createContext('light')

function App() {
    const [theme, setTheme] = useState('light')

    return (
        <ThemeContext.Provider value={theme}>
            <div className='app'>
                <Router />
            </div>
        </ThemeContext.Provider>
    )
}

export default App
