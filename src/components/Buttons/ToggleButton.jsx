import PropTypes from 'prop-types'
import styles from './Button.module.css'
import { useState } from 'react'

function ToggleButton({ handleOnClick }) {
    const [toggled, setToggled] = useState(false)

    return (
        <button
            className={`${styles.toggleButton} ${toggled ? styles.toggled : ''}`}
            onClick={() => {
                setToggled(!toggled)
                handleOnClick()
            }}
        >
            <div className={styles.thumb} />
        </button>
    )
}

ToggleButton.propTypes = {
    handleOnClick: PropTypes.func,
}

export default ToggleButton
