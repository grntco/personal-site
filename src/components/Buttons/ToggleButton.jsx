import styles from './Button.module.css'
import { useState } from 'react'

function ToggleButton() {
    const [toggled, setToggled] = useState(false)

    return (
        <button
            className={`${styles.toggleButton} ${toggled ? styles.toggled : ''}`}
            onClick={() => setToggled(!toggled)}
        >
            <div className={styles.thumb} />
        </button>
    )
}

export default ToggleButton
