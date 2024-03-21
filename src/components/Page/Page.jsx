import Header from '../Header/Header'
import PropTypes from 'prop-types'

function Page({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}

Page.propTypes = {
    children: PropTypes.element
}

export default Page
