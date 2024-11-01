import PropTypes from 'prop-types'
import styles from './Button.module.css'
import { useState } from 'react'

function ToggleButton({ toggled, handleOnClick }) {
    const [isToggled, setToggled] = useState(toggled)

    return (
        <button
            className={`${styles.toggleButton} ${isToggled ? styles.toggled : ''}`}
            onClick={() => {
                setToggled(!isToggled)
                handleOnClick()
            }}
        >
            <div className={styles.thumb} />
        </button>
    )
}

ToggleButton.propTypes = {
    toggled: PropTypes.bool,
    handleOnClick: PropTypes.func,
}

export default ToggleButton
