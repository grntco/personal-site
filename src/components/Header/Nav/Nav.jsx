import styles from './Nav.module.css'

function Nav({ links, position }) {
    return (
        <nav className={styles.nav}>
            <ul className={styles.linksList}>
                {links.map((l, i) => {
                    return (
                        <li key={i} className={position === 'global' ? styles.globalLinkItem : ''}>
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

export default Nav
