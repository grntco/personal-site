import ghIcon from '../../../assets/icons/github-mark.svg'
import xIcon from '../../../assets/icons/x-twitter.svg'
import styles from './SocialLinks.module.css'

function SocialLinks() {
    const links = [
        {
            name: 'GitHub octocan logo',
            url: 'https://github.com/grntco',
            icon: ghIcon,
        },
        { name: 'Twitter (x) logo', url: '#', icon: xIcon },
    ]

    return (
        <ul className={styles.linksList}>
            {links.map((l, i) => {
                return (
                    <li key={i}>
                        <a
                            href={l.url}
                            target='_blank'
                            rel='noopener'
                            className={styles.link}
                        >
                            <img
                                src={l.icon}
                                alt={l.name}
                                className={styles.icon}
                            />
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

export default SocialLinks
