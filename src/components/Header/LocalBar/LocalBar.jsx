import styles from './LocalBar.module.css'
import Nav from '../Nav/Nav'

function LocalBar() {
    // for now...
    const localLinks = [
        { name: 'About', url: '#' },
        { name: 'Projects', url: '#' },
        { name: 'Blog', url: '#' },
    ]

    return (
        <div className={styles.localBar}>
            <Nav links={localLinks}></Nav>
        </div>
    )
}

export default LocalBar
