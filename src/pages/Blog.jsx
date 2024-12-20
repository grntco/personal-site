import Page from '../components/layout/Page/Page'
import Section from '../components/layout/Page/Section'
import Content from '../components/layout/Content/Content'
import PostsList from '../components/ui/PostsList/PostsList'

const Blog = () => {
    return (
        <Page>
            <Section>
                <Content>
                    <h1>Blog</h1>
                    <p>
                        I don't write much, but created this page to encourage
                        myself to write more. Here are the posts I have so far.
                    </p>
                </Content>
            </Section>
            <Section>
                <PostsList />
            </Section>
        </Page>
    )
}

export default Blog
