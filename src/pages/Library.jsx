import Page from '../components/layout/Page/Page'
import Section from '../components/layout/Page/Section'
import Content from '../components/layout/Content/Content'
import PostsList from '../components/ui/PostsList/PostsList'

const Library = () => {
    return (
        <Page>
            <Section>
                <Content>
                    <h1>Library</h1>
                    <p>Notes on books I've read.</p>
                </Content>
            </Section>
            <Section>
                <PostsList />
            </Section>
        </Page>
    )
}

export default Library
