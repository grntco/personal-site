import profileImg from '../../../../assets/images/profile.jpeg'
import ToggleButton from '../../../Buttons/ToggleButton'
import Nav from '../Nav/Nav'
import SocialLinks from '../SocialLinks/SocialLinks'
import styles from './GlobalBar.module.css'
import HamburgerIcon from '../../../../assets/icons/hamburger.svg'
import Button from '../../../Buttons/Button'
import { NavLink } from 'react-router-dom'

function GlobalBar() {
    //for now...
    const globalLinks = [
        { name: '~', url: '/' },
        { name: 'Projects', url: '/projects' },
    ]

    return (
        <div className={styles.globalBar}>
            <Button type='icon'>
                <img src={HamburgerIcon} alt='hamburger menu icon' />
            </Button>
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
