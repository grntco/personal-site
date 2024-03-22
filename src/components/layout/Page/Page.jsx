import { useContext } from 'react'
import Header from '../Header/Header'
import PropTypes from 'prop-types'
import { ThemeContext } from '../../ThemeContext'

function Page({ children }) {
    const theme = useContext(ThemeContext)

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

export default Page
