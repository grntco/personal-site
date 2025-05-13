import { Link } from 'react-router-dom'
import Page from '../components/layout/Page/Page'
import Section from '../components/layout/Page/Section'
import Content from '../components/layout/Content/Content'
import PostsList from '../components/ui/PostsList/PostsList'

const Home = () => {
    return (
        <Page>
            <Section>
                <Content>
                    <p>
                        Hi! This website is primarily a portfolio to list
                        projects as a web developer. But sometimes I also
                        publish blog posts and update what I am doing now.
                    </p>
                </Content>
            </Section>
            <Section>
                <Content>
                    <h2>On this site</h2>
                    <ul>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                        <li>
                            <Link to='/now'>Now</Link>
                        </li>
                    </ul>
                </Content>
            </Section>
            <Section>
                <h2>Recent posts</h2>
                <PostsList limit={3} />
            </Section>
        </Page>
    )
}

export default Home
