import PropTypes from 'prop-types'
import styles from './Button.module.css'
import { useContext } from 'react'
import { SettingsContext } from '../../../SettingsContext'

export const Button = ({ children, href = '', noBorder = false, className = '', ...props }) => {
    const Tag = href ? 'a' : 'button'
    const { isDarkMode } = useContext(SettingsContext)
    const classes = `${styles.button} ${isDarkMode ? styles.darkMode : ''} ${noBorder ? styles.noBorder : ''} ${className.trim()}`

    return (
        <Tag href={href} className={classes} {...props}>
            {children}
        </Tag>
    )
}

Button.propTypes = {
    children: PropTypes.element,
    href: PropTypes.string,
    noBorder: PropTypes.bool,
    className: PropTypes.string,
}
