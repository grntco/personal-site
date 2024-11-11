// for rendering text-based content with shared styles (ex. md files, certain page sections)
import PropTypes from 'prop-types'
import styles from './Content.module.css'

const Content = ({ children }) => {
    return <div className={styles.content}>{children}</div>
}

Content.propTypes = {
    children: PropTypes.node,
}

export default Content
