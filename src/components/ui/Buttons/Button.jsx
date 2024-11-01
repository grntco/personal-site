import PropTypes from 'prop-types'
import styles from './Button.module.css'

function Button({ type, isDarkMode, children }) {
    let classNames = `${styles.button} ${type === 'icon' ? styles.iconButton : ''} ${isDarkMode ? styles.darkMode : ''}`
    return <button className={classNames}>{children}</button>
}

Button.propTypes = {
    type: PropTypes.string,
    isDarkMode: PropTypes.bool,
    children: PropTypes.element,
}

export default Button
