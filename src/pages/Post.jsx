import Page from '../components/layout/Page/Page'
import Section from '../components/layout/Page/Section'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import blogs from '../data/blogs.json'

function Post() {
    const { path } = useParams()
    const blog = blogs.find((blog) => blog.path === path)

    return (
        <Page>
            <Section>
                <article>
                    <h1>{blog.title}</h1>
                    <Markdown>{blog.content}</Markdown>
                </article>
            </Section>
        </Page>
    )
}

export default Post
