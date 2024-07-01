import Header from '../Header/Header'
import PropTypes from 'prop-types'
import styles from './Page.module.css'

export default function Page({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}

Page.propTypes = {
    children: PropTypes.element,
}
