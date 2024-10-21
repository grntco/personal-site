import Page from '../components/layout/Page/Page'
import Section from '../components/layout/Page/Section'

// I'm thinking on layout (or page) stylesheet, with styles for each page components that can be reused without having to import styles from Pages into each page

function ErrorPage() {
    return (
        <Page>
            <Section>
                <h1>404</h1>
            </Section>
        </Page>
    )
}

export default ErrorPage
