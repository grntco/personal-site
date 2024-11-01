import styles from './SettingsModal.module.css'
import Container from '../layout/Page/Container'
import { Button } from '../ui/Buttons/Button'
import xIcon from '../../assets/icons/x.svg'
import { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'
import ToggleButton from '../ui/Buttons/ToggleButton'

export const SettingsModal = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext)

    return (
        <div className={styles.overlay}>
            <Container>
                <div className={styles.modal}>
                    <div className={styles.header}>
                        <h2>Settings</h2>
                        <Button>
                            <img
                                src={xIcon}
                                alt='Close modal x button'
                                title='Close'
                            />
                        </Button>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.option}>
                            <span>Dark mode:</span>
                            <ToggleButton
                                toggled={isDarkMode}
                                handleOnClick={() => toggleTheme()}
                            />
                        </div>
                        <div className={styles.option}>
                            <span>Font:</span>
                        </div>
                        <div className={styles.option}>
                            <span>Font size:</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
