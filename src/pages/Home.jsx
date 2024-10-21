import Page from '../components/layout/Page/Page'
import Section from '../components/layout/Page/Section'
import { Link } from 'react-router-dom'
import styles from '../components/layout/Page/Page.module.css'

function Home() {
    return (
        <Page>
            <Section>
                <h1>Welcome, traveler!</h1>
                <p>
                    This website, grantcollins.me, is the internet home of Grant
                    Collins—me.
                </p>
                <p>Enjoy your stay :)</p>
            </Section>
            <Section>
                <h2>Recent writings</h2>
            </Section>
            <Section>
                <h2>What else?</h2>
                <p>
                    I encourage you to free explore this website! In the
                    meantime, here are some quick links:
                </p>
                <ul>
                    <li>
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/now'>Now</Link>
                    </li>
                </ul>
            </Section>
        </Page>
    )
}

export default Home
