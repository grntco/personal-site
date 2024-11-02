import styles from './Header.module.css'
import GlobalBar from './GlobalBar/GlobalBar'
import LocalBar from './LocalBar/LocalBar'
import Container from '../Page/Container'

function Header({ handleSettingsBtnClick }) {
    return (
        <header className={styles.header}>
            <Container>
                <GlobalBar handleSettingsBtnClick={() => handleSettingsBtnClick()} />
                <LocalBar />
            </Container>
        </header>
    )
}

export default Header
