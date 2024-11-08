import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const SettingsContext = createContext()

export const SettingsProvider = ({ children }) => {
    const getInitialDarkMode = () => {
        const savedPreference = JSON.parse(
            localStorage.getItem('prefersDarkMode'),
        )

        return savedPreference !== null
            ? savedPreference
            : window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode())
    const [fontFamily, setFontFamily] = useState(
        localStorage.getItem('fontFamily') || 'sans-serif',
    )
    const [fontSize, setFontSize] = useState(
        JSON.parse(localStorage.getItem('fontSize')) || 16,
    )

    const toggleTheme = () => {
        const newDarkMode = !isDarkMode
        setIsDarkMode(newDarkMode)
        localStorage.setItem('prefersDarkMode', JSON.stringify(newDarkMode))
    }

    const updateFontFamily = (newFont) => {
        setFontFamily(newFont)
        localStorage.setItem('fontFamily', newFont)
    }

    const updateFontSize = (newSize) => {
        setFontSize(newSize)
        localStorage.setItem('fontSize', newSize)
    }

    useEffect(() => {
        document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light'
        document.documentElement.dataset.fontFamily = fontFamily
        document.documentElement.dataset.fontSize = fontSize
    }, [isDarkMode, fontFamily, fontSize])

    return (
        <SettingsContext.Provider
            value={{
                isDarkMode,
                toggleTheme,
                fontFamily,
                updateFontFamily,
                fontSize,
                updateFontSize,
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
}

SettingsProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
