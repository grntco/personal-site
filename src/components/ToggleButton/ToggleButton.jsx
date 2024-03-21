import styles from './ToggleButton.module.css'
import { useState } from 'react'

function ToggleButton() {
    const [toggled, setToggled] = useState(false)

    return (
        <button
            className={`${styles.button} ${toggled ? styles.toggled : ''}`}
            onClick={() => setToggled(!toggled)}
        >
            <div className={styles.thumb} />
        </button>
    )
}

export default ToggleButton
