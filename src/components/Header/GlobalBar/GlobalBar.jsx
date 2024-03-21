import profileImg from '../../../assets/images/profile.jpeg'
import ghIcon from '../../../assets/icons/github-mark.svg'
import xIcon from '../../../assets/icons/x-twitter.svg'
import Nav from '../Nav/Nav'
import styles from './GlobalBar.module.css'

function GlobalBar() {
    //for now...
    const globalLinks = [
        { name: 'grntco', url: '#' },
        { name: 'Projects', url: '#' },
    ]

    return (
        <div className={styles.globalBar}>
            <img
                src={profileImg}
                alt='profile image'
                className={styles.profileImg}
            />
            <Nav links={globalLinks} global={true}></Nav>
            <ul className='social-links'>
                <li className='social-link-item'>
                    <a
                        href='https://github.com/grntco'
                        target='_blank'
                        rel='noopener'
                        className='social-link'
                    >
                        <img
                            src={ghIcon}
                            alt='github octocat icon'
                            className='icon'
                        />
                    </a>
                </li>
                <li className='social-link-item'>
                    <a href='' className='social-link'>
                        <img
                            src={xIcon}
                            alt='x twitter icon'
                            className='icon'
                        />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default GlobalBar
