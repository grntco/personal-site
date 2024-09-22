import Page from '../components/layout/Page/Page'
import Section from '../components/layout/Page/Section'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
// import blogs from '../data/blogs.json'
import { useEffect, useState } from 'react'
import remarkGfm from 'remark-gfm'
import matter from 'gray-matter'

function Post() {
    const { path } = useParams()
    const [postContent, setPostContent] = useState('')
    const [postMeta, setPostMeta] = useState({title: '', date: ''})

    useEffect(() => {
        async function fetchPostContent() {
            try {
                const response = await fetch(`/posts/${path}.md`)
                const text = await response.text()

                const { content, data } = matter(text)

                setPostContent(content)
                setPostMeta(data)
            } catch (err) {
                console.error('Unable to locate .md file', err)
            }
        }
        fetchPostContent()
    }, [path])

    return (
        <Page>
            <Section>
                <article>
                    <p>{postMeta.date}</p>
                    <Markdown remarkPlugins={remarkGfm}>{postContent}</Markdown>
                </article>
            </Section>
        </Page>
    )
}

export default Post
