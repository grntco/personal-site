import profileImg from '../../../../assets/images/profile.jpeg'
import ToggleButton from '../../../Buttons/ToggleButton/ToggleButton'
import Nav from '../Nav/Nav'
import SocialLinks from '../SocialLinks/SocialLinks'
import styles from './GlobalBar.module.css'
import HamburgerIcon from '../../../../assets/icons/hamburger.svg'
import IconButton from '../../../Buttons/IconButton'
import { NavLink } from 'react-router-dom'

function GlobalBar() {
    //for now...
    const globalLinks = [
        { name: '~', url: '/' },
        { name: 'Projects', url: '/projects' },
    ]

    return (
        <div className={styles.globalBar}>
            <IconButton src={HamburgerIcon} />
            {/* <img
                src={profileImg}
                alt='profile image'
                className={styles.profileImg}
            /> */}
            <NavLink to={globalLinks[0].url} className={styles.siteNameLink}>
                <h2 className={styles.siteName}>Grant Collins</h2>
            </NavLink>
            <Nav links={globalLinks} global={true} />
            <SocialLinks />
            <ToggleButton />
        </div>
    )
}

export default GlobalBar
