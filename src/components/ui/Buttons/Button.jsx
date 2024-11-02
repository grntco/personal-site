import PropTypes from 'prop-types'
import styles from './Button.module.css'
import { useContext } from 'react'
import { SettingsContext } from '../../../SettingsContext'

export const Button = ({ children, handleOnClick }) => {
    const { isDarkMode } = useContext(SettingsContext)
    const classNames = `${styles.button} ${isDarkMode ? styles.darkMode : ''}`
    return (
        <button className={classNames} onClick={handleOnClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.element,
}
