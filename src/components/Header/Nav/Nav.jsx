import styles from './Nav.module.css'
import PropTypes from 'prop-types'

function Nav({ links, global }) {
    return (
        <nav className={styles.nav}>
            <ul className={styles.linksList}>
                {links.map((l, i) => {
                    return (
                        <li
                            key={i}
                            className={global ? styles.globalLinkItem : ''}
                        >
                            <a href={l.url} className={styles.link}>
                                {l.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

Nav.propTypes = {
    links: PropTypes.array,
    global: PropTypes.bool,
}

export default Nav
