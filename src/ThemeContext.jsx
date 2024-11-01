import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
    const getInitialDarkMode = () => {
        const savedPreference = JSON.parse(
            localStorage.getItem('prefersDarkMode'),
        )

        return savedPreference !== null
            ? savedPreference
            : window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode())

    const toggleTheme = () => {
        const newDarkMode = !isDarkMode
        setIsDarkMode(newDarkMode)
        localStorage.setItem('prefersDarkMode', JSON.stringify(newDarkMode))
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
