import Container from '../Page/Container'
import { Button } from '../../ui/Buttons/Button'
import ghIcon from '../../../assets/icons/github-mark.svg'
import styles from './Footer.module.css'

function Footer() {
    const links = [
        {
            src: ghIcon,
            href: 'https://github.com/grntco',
            alt: 'GitHub octocan logo',
        },
    ]

    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footerContent}>
                    <span>Grant Collins © {new Date().getFullYear()}</span>
                    <ul className={styles.linksList}>
                        {links.map((link, i) => {
                            return (
                                <li key={i}>
                                    <Button
                                        href={link.href}
                                        noBorder
                                        target='_blank'
                                        rel='noopener noreferrer'
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
