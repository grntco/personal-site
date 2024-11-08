import Container from '../Page/Container'
import { Button } from '../../ui/Buttons/Button'
import { Link } from 'react-router-dom'
import ghIcon from '../../../assets/icons/github-mark.svg'
import xIcon from '../../../assets/icons/x-twitter.svg'
import styles from './Footer.module.css'

function Footer({}) {
    const links = [
        {
            src: ghIcon,
            href: 'https://github.com/grntco',
            alt: 'GitHub octocan logo',
        },
        { src: xIcon, href: '#', alt: 'Twitter (x) logo' },
    ]

    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footerContent}>
                    <span>Grant Collins {new Date().getFullYear()}</span>
                    <ul className={styles.linksList}>
                        {links.map((link, i) => {
                            return (
                                <li key={i}>
                                    <Button
                                        href={link.href}
                                        noBorder
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className={styles.link}
                                    >
                                        <img src={link.src} alt={link.alt} />
                                    </Button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
