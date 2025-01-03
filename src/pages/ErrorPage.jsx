import Page from '../components/layout/Page/Page'
import Section from '../components/layout/Page/Section'
import Content from '../components/layout/Content/Content'
import { Link } from 'react-router-dom'
import styles from '../components/layout/Page/Page.module.css'

const ErrorPage = () => {
    return (
        <Page>
            <Section>
                <Content>
                    <h1 className={styles.heading404}>404</h1>
                </Content>
            </Section>
            <Section>
                <Content>
                    <p>
                        The page at {window.location.href} does not exist.
                        Return <Link to={'/'}>home</Link>?
                    </p>
                </Content>
            </Section>
        </Page>
    )
}

export default ErrorPage
