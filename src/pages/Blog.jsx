import Page from '../components/layout/Page/Page'
import Section from '../components/layout/Page/Section'
import BlogsList from '../components/layout/BlogsList/BlogsList'

function Blog() {
    return (
        <Page>
            <Section>
                <h1>Blog</h1>
                <p>Hello from Blog! Here are a list of blogs.</p>
            </Section>
            <Section>
                <BlogsList />
            </Section>
        </Page>
    )
}

export default Blog
