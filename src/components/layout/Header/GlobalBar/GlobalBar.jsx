import profileImg from '../../../../assets/images/profile.jpeg'
import ToggleButton from '../../../Buttons/ToggleButton'
import Nav from '../Nav/Nav'
import SocialLinks from '../SocialLinks/SocialLinks'
import styles from './GlobalBar.module.css'
import HamburgerIcon from '../../../../assets/icons/hamburger.svg'
import SettingsIcon from '../../../../assets/icons/settings.svg'
import Button from '../../../Buttons/Button'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
// import ThemeContext from '../../../../ThemeContext'
import { ThemeContext } from '../../../App/App'

function GlobalBar() {
    //for now...
    const { isDarkMode, toggleTheme } = useContext(ThemeContext)

    const globalLinks = [
        { name: '~', url: '/' },
        { name: 'Projects', url: '/projects' },
    ]

    return (
        <div className={styles.globalBar}>
            <Button type='icon' isDarkMode={isDarkMode}>
                <img src={HamburgerIcon} alt='menu' />
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
            <ToggleButton
                toggled={isDarkMode}
                handleOnClick={() => toggleTheme()}
            />
            <Button type='icon' isDarkMode={isDarkMode} onHover={() => this.img }>
                <img src={SettingsIcon} alt='settings' />
            </Button>
        </div>
    )
}

export default GlobalBar
