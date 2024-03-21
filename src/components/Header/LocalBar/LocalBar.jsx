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
            {/* <nav className='header__nav'>
                <ul className='nav-links'>
                    <li
                        className='nav-link-item
'
                    >
                        <a href=''>About</a>
                    </li>
                    <li
                        className='nav-link-item
'
                    >
                        <a href=''>Projects</a>
                    </li>
                    <li
                        className='nav-link-item
'
                    >
                        <a href=''>Blog</a>
                    </li>
                </ul>
            </nav> */}
        </div>
    )
}

export default LocalBar
