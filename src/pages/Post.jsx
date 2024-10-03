import Page from '../components/layout/Page/Page'
import Section from '../components/layout/Page/Section'
import Container from '../components/layout/Page/Container'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import remarkGfm from 'remark-gfm'
import matter from 'gray-matter'
import { format } from 'date-fns'
import LinkButton from '../components/Buttons/LinkButton'
import styles from '../components/layout/Page/Page.module.css'

function Post() {
    const { slug } = useParams()
    const [postContent, setPostContent] = useState('')
    const [postMeta, setPostMeta] = useState({})

    useEffect(() => {
        async function fetchPostContent() {
            try {
                const response = await fetch(`/posts/${slug}.md`)
                const text = await response.text()

                const { content, data } = matter(text)

                setPostContent(content)
                setPostMeta(data)
            } catch (err) {
                console.error('Unable to locate .md file', err)
            }
        }
        fetchPostContent()
    }, [slug])

    console.log(postMeta.date)

    return (
        <Page>
            <Container>
                <div className={styles.postHeader}>
                    <h1>{postMeta.title}</h1>
                    <LinkButton to='/blog'>View all posts</LinkButton>
                    <span>
                        {postMeta.date && format(postMeta.date, 'LL-dd')}
                    </span>
                </div>
                <article className={styles.postContent}>
                    <Markdown remarkPlugins={remarkGfm}>{postContent}</Markdown>
                </article>
            </Container>
        </Page>
    )
}

export default Post
