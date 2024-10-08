import styles from './Page.module.css'
import PropTypes from 'prop-types'

export default function Container({ children }) {
    return <div className={styles.container}>{children}</div>
}

Container.propTypes = {
    children: PropTypes.element,
}
