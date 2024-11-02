import styles from './SettingsModal.module.css'
import Container from '../layout/Page/Container'
import { Button } from '../ui/Buttons/Button'
import xIcon from '../../assets/icons/x.svg'
import { useContext } from 'react'
import { SettingsContext } from '../../SettingsContext'
import ToggleButton from '../ui/Buttons/ToggleButton'

export const SettingsModal = ({ handleCloseBtnClick }) => {
    const { isDarkMode, toggleTheme, fontFamily, updateFontFamily } =
        useContext(SettingsContext)
    // const { isSerif, toggleSerif }

    return (
        <div className={styles.overlay}>
            <Container>
                <div className={styles.modal}>
                    <div className={styles.header}>
                        <h2>Settings</h2>
                        <Button handleOnClick={() => handleCloseBtnClick()}>
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
                            <ToggleButton
                                handleOnClick={() => {
                                    updateFontFamily(
                                        fontFamily === 'serif'
                                            ? 'sans-serif'
                                            : 'serif',
                                    )
                                }}
                            />
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
