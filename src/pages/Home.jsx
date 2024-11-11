import { Link } from 'react-router-dom'
import Page from '../components/layout/Page/Page'
import Section from '../components/layout/Page/Section'
import Content from '../components/layout/Content/Content'

const Home = () => {
    return (
        <Page>
            <Section>
                <Content>
                    <h1>Hi</h1>
                    <p>
                        This website, grantcollins.me, is the internet home of
                        Grant Collins—me. Thanks for visiting!
                    </p>
                    <p>I hope you enjoy your stay :)</p>
                </Content>
            </Section>
            <Section>
                <Content>
                    <h2>On this site</h2>
                    {/* <p>Here are some links to get you started exploring:</p> */}
                    <ul>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/now'>Now</Link>
                        </li>
                        <li>
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                    </ul>
                </Content>
            </Section>
            <Section>
                <h2>Recent writings</h2>
            </Section>
        </Page>
    )
}

export default Home
