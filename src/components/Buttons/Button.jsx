import PropTypes from 'prop-types'
import styles from './Button.module.css'

function Button({ type, children }) {
    const classNames = `${styles.button} ${type === 'icon' ? styles.iconButton : ''}`
    return <button className={classNames}>{children}</button>
}

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.element,
}

export default Button
