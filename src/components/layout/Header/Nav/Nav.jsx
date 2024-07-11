import styles from './Nav.module.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

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
                            <NavLink
                                to={l.url}
                                className={({ isActive }) =>
                                    `${styles.link} ${isActive && !global ? styles.active : ''}`
                                }
                                title={l.name === '~' ? 'Go home' : ''}
                            >
                                {l.name}
                            </NavLink>
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
