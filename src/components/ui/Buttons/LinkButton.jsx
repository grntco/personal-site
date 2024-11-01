import styles from './Button.module.css'

export default function LinkButton({ url, external, children }) {
    const externalProps = external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {}
    return (
        <a href={url} className={styles.linkButton} {...externalProps}>
            {children}
        </a>
    )
}
