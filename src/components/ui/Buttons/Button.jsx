import PropTypes from 'prop-types'
import styles from './Button.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../ThemeContext'

export const Button = ({ children }) => {
    const { isDarkMode } = useContext(ThemeContext)
    const classNames = `${styles.button} ${isDarkMode ? styles.darkMode : ''}`
    return <button className={classNames}>{children}</button>
}

Button.propTypes = {
    children: PropTypes.element,
}
