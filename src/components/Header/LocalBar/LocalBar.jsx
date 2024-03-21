import styles from './LocalBar.module.css'
import Nav from '../Nav/Nav'

function LocalBar() {
    // for now...
    const localLinks = [
        { name: 'About', url: '/about' },
        { name: 'Projects', url: '/projects' },
        { name: 'Blog', url: '/blog' },
    ]

    return (
        <div className={styles.localBar}>
            <Nav links={localLinks}></Nav>
        </div>
    )
}

export default LocalBar
