import { useState } from 'react'
import { Button } from '../Buttons/Button'
import chevronDownIcon from '../../../assets/icons/chevron-down.svg'
import checkIcon from '../../../assets/icons/check.svg'
import PropTypes from 'prop-types'
import styles from './Dropdown.module.css'

const Dropdown = ({ options }) => {
    const [dropDownActive, setDropDownActive] = useState(false)
    const selectedOption = options.find((option) => option.isSet)

    return (
        <>
            <Button
                className={styles.dropdownOption}
                onClick={() => setDropDownActive(!dropDownActive)}
            >
                <span>{selectedOption.label}</span>
                <img src={chevronDownIcon} alt='chevron down icon' />
            </Button>
            {dropDownActive && (
                <div className={styles.dropdown}>
                    {options.map((option, i) => {
                        return (
                            <Button
                                className={`${styles.dropdownOption} ${option.className}`}
                                onClick={() => {
                                    option.onSelect()
                                    setDropDownActive(false)
                                }}
                                key={i}
                            >
                                <span>{option.label}</span>
                                {option.isSet && (
                                    <img src={checkIcon} alt='check icon' />
                                )}
                            </Button>
                        )
                    })}
                </div>
            )}
        </>
    )
}

Dropdown.propTypes = {
    options: PropTypes.array,
}

export default Dropdown
