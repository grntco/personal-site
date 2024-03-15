import './Header.css'
import profileImg from '../../assets/images/profile.jpeg'
import ghIcon from '../../assets/icons/github-mark.svg'

function Header() {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <img
                    src={profileImg}
                    alt='profile image'
                    className='header__profile-img'
                />
                <ul className='header__links-list'>
                    <li>
                        <a href=''>gr/-\ntco</a>
                    </li>
                </ul>
                <ul className='header__links-list header__socials-list'>
                    <li>
                        <a href="">
                            <img src={ghIcon} alt="github octocat icon" className='icon' />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={ghIcon} alt="github octocat icon" className='icon' />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={ghIcon} alt="github octocat icon" className='icon' />
                        </a>
                    </li>
                </ul>
            </nav>
            <nav className='header__nav'>
                <ul className='header__links-list header__page-links'>
                    <li>
                        <a href=''>About</a>
                    </li>
                    <li>Projects</li>
                    <li>Blog</li>
                    <li>Now</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
