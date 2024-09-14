import Header from '../Header/Header'
import PropTypes from 'prop-types'

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
