import styles from './SettingsModal.module.css'
import Container from '../layout/Page/Container'
import { Button } from '../ui/Buttons/Button'
import xIcon from '../../assets/icons/x.svg'
import { useContext, useState } from 'react'
import { SettingsContext } from '../../SettingsContext'
import ToggleButton from '../ui/Buttons/ToggleButton/ToggleButton'
import chevronDownIcon from '../../assets/icons/chevron-down.svg'
import checkIcon from '../../assets/icons/check.svg'
import minusIcon from '../../assets/icons/minus.svg'
import plusIcon from '../../assets/icons/plus.svg'
import moonIcon from '../../assets/icons/moon.svg'
import typeIcon from '../../assets/icons/type.svg'
import fontSizeIcon from '../../assets/icons/font-size.svg'

export const SettingsModal = ({ handleCloseBtnClick }) => {
    const {
        isDarkMode,
        toggleTheme,
        fontFamily,
        updateFontFamily,
        fontSize,
        updateFontSize,
    } = useContext(SettingsContext)
    const [dropDownActive, setDropDownActive] = useState(false)

    return (
        <div className={styles.overlay}>
            <Container>
                <div className={styles.modal}>
                    <div className={styles.header}>
                        <h2>Settings</h2>
                        <Button onClick={() => handleCloseBtnClick()}>
                            <img
                                src={xIcon}
                                alt='Close modal x button'
                                title='Close'
                            />
                        </Button>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.settingsOption}>
                            <div className={styles.optionTitle}>
                                <img
                                    src={moonIcon}
                                    alt='moon icon'
                                    className={`${styles.icon} ${isDarkMode ? styles.darkMode : ''}`}
                                />
                                <span>Dark mode:</span>
                            </div>
                            <ToggleButton
                                toggled={isDarkMode}
                                onClick={() => toggleTheme()}
                            />
                        </div>
                        <div className={styles.settingsOption}>
                            <div className={styles.optionTitle}>
                                {/* <img src={typeIcon} alt='type icon' /> */}
                                <span className={styles.textIcon}>Aa</span>
                                <span>Font:</span>
                            </div>
                            <Button
                                className={styles.dropdownOption}
                                onClick={() =>
                                    setDropDownActive(!dropDownActive)
                                }
                            >
                                <span>
                                    {fontFamily === 'serif'
                                        ? 'Serif'
                                        : 'Sans Serif'}
                                </span>
                                <img
                                    src={chevronDownIcon}
                                    alt='chevron down icon'
                                />
                            </Button>
                            {dropDownActive && (
                                <div className={styles.dropdown}>
                                    <Button
                                        className={`${styles.dropdownOption} ${styles.sansSerif}`}
                                        onClick={() => {
                                            updateFontFamily('sans-serif')
                                            setDropDownActive(false)
                                        }}
                                    >
                                        <span>Sans Serif</span>
                                        {fontFamily === 'sans-serif' && (
                                            <img
                                                src={checkIcon}
                                                alt='check icon'
                                            />
                                        )}
                                    </Button>
                                    <Button
                                        className={`${styles.dropdownOption} ${styles.serif}`}
                                        onClick={() => {
                                            updateFontFamily('serif')
                                            setDropDownActive(false)
                                        }}
                                    >
                                        <span>Serif</span>
                                        {fontFamily === 'serif' && (
                                            <img
                                                src={checkIcon}
                                                alt='check icon'
                                            />
                                        )}
                                    </Button>
                                </div>
                            )}
                        </div>
                        <div className={styles.settingsOption}>
                            <div className={styles.optionTitle}>
                                {/* <img src={fontSizeIcon} alt='font size icon' /> */}
                                <span className={styles.textIcon}>T</span>
                                <span>Font size:</span>
                            </div>
                            <div className={styles.fontSizeAdjuster}>
                                <Button
                                    onClick={() => {
                                        if (fontSize > 14) {
                                            updateFontSize(fontSize - 2)
                                        }
                                    }}
                                >
                                    <img src={minusIcon} alt='minus icon' />
                                </Button>
                                <span className={styles.fontSize}>
                                    {fontSize}px
                                </span>
                                <Button
                                    onClick={() => {
                                        if (fontSize < 18) {
                                            updateFontSize(fontSize + 2)
                                        }
                                    }}
                                >
                                    <img src={plusIcon} alt='plus icon' />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
