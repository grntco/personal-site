import profileImg from '../../../assets/images/profile.jpeg'
import Nav from '../Nav/Nav'
import SocialLinks from '../SocialLinks/SocialLinks'
import styles from './GlobalBar.module.css'

function GlobalBar() {
    //for now...
    const globalLinks = [
        { name: 'grntco', url: '/' },
        { name: 'Projects', url: '/projects' },
    ]

    return (
        <div className={styles.globalBar}>
            <img
                src={profileImg}
                alt='profile image'
                className={styles.profileImg}
            />
            <Nav links={globalLinks} global={true} />
            <SocialLinks />
        </div>
    )
}

export default GlobalBar
