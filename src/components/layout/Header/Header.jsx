import styles from './Header.module.css'
import GlobalBar from './GlobalBar/GlobalBar'
import LocalBar from './LocalBar/LocalBar'
import Container from '../Container/Container'

function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <GlobalBar />
                <LocalBar />
            </Container>
        </header>
    )
}

export default Header
