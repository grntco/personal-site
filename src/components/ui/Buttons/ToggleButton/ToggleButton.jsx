import PropTypes from 'prop-types'
import styles from './ToggleButton.module.css'
import { useState } from 'react'

function ToggleButton({ toggled, onClick }) {
    const [isToggled, setToggled] = useState(toggled)

    return (
        <button
            className={`${styles.toggleButton} ${isToggled ? styles.toggled : ''}`}
            onClick={() => {
                setToggled(!isToggled)
                onClick()
            }}
        >
            <div className={styles.thumb} />
        </button>
    )
}

ToggleButton.propTypes = {
    toggled: PropTypes.bool,
    onClick: PropTypes.func,
}

export default ToggleButton
