import styles from './Header.module.css'
import GlobalBar from './GlobalBar/GlobalBar'
import LocalBar from './LocalBar/LocalBar'

function Header() {
    return (
        <header className={styles.header}>
            <GlobalBar />
            <LocalBar />
        </header>
    )
}

export default Header
