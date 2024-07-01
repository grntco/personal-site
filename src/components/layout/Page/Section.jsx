import styles from './Page.module.css'
import Container from '../Container/Container'
import PropTypes from 'prop-types'


export default function Section({ children }) {
    return (
        <section className={styles.section}>
            <Container>{children}</Container>
        </section>
    )
}

Section.propTypes = {
    children: PropTypes.element,
}
