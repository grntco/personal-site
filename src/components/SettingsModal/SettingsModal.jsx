import { useContext } from 'react'
import { SettingsContext } from '../../SettingsContext'
import Container from '../layout/Page/Container'
import { Button } from '../ui/Buttons/Button'
import ToggleButton from '../ui/Buttons/ToggleButton/ToggleButton'
import Dropdown from '../ui/Dropdown/Dropdown'
import xIcon from '../../assets/icons/x.svg'
import minusIcon from '../../assets/icons/minus.svg'
import plusIcon from '../../assets/icons/plus.svg'
import moonIcon from '../../assets/icons/moon.svg'
import styles from './SettingsModal.module.css'
import PropTypes from 'prop-types'

const SettingsModal = ({ handleCloseBtnClick }) => {
    const {
        isDarkMode,
        toggleTheme,
        fontFamily,
        updateFontFamily,
        fontSize,
        updateFontSize,
    } = useContext(SettingsContext)

    const dropdownOptions = [
        {
            label: 'Sans Serif',
            onSelect() {
                updateFontFamily('sans-serif')
            },
            isSet: fontFamily === 'sans-serif',
            className: styles.sansSerif,
        },
        {
            label: 'Serif',
            onSelect() {
                updateFontFamily('serif')
            },
            isSet: fontFamily === 'serif',
            className: styles.serif,
        },
    ]

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
                    <div className={styles.optionsContainer}>
                        <div className={styles.option}>
                            <div className={styles.optionTitle}>
                                <img
                                    src={moonIcon}
                                    alt='moon icon'
                                    className={`${styles.optionIcon} ${isDarkMode ? styles.darkMode : ''}`}
                                />
                                Dark mode:
                            </div>
                            <ToggleButton
                                toggled={isDarkMode}
                                onClick={() => toggleTheme()}
                            />
                        </div>
                        <div className={styles.option}>
                            <div className={styles.optionTitle}>
                                <span className={styles.textIcon}>Aa</span>
                                Font:
                            </div>
                            <Dropdown options={dropdownOptions} />
                        </div>
                        <div className={styles.option}>
                            <div className={styles.optionTitle}>
                                <span className={styles.textIcon}>T</span>
                                Font size:
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

SettingsModal.propTypes = {
    handleCloseBtnClick: PropTypes.func,
}

export default SettingsModal
