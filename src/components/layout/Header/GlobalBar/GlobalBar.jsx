// import profileImg from '../../../../assets/images/profile.jpeg'

import Nav from '../Nav/Nav'
import styles from './GlobalBar.module.css'
import HamburgerIcon from '../../../../assets/icons/hamburger.svg'
import SettingsIcon from '../../../../assets/icons/settings.svg'
import { Button } from '../../../ui/Buttons/Button'
import { NavLink } from 'react-router-dom'

function GlobalBar({ handleSettingsBtnClick }) {
    const globalLinks = [
        { name: '~', url: '/' },
        { name: 'Projects', url: '/projects' },
    ]

    return (
        <div className={styles.globalBar}>
            {/* <Button>
                <img src={HamburgerIcon} alt='menu' />
            </Button> */}
            <NavLink to={globalLinks[0].url} className={styles.siteNameLink}>
                <h2 className={styles.siteName}>Grant Collins</h2>
            </NavLink>
            {/* <Nav links={globalLinks} global={true} /> */}
            <Button className={styles.settingsButton} onClick={handleSettingsBtnClick}>
                <img src={SettingsIcon} alt='settings' />
            </Button>
        </div>
    )
}

export default GlobalBar
