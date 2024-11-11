import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { format } from 'date-fns'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Page from '../components/layout/Page/Page'
import Section from '../components/layout/Page/Section'
import Content from '../components/layout/Content/Content'
import ChevronLeftIcon from '../assets/icons/chevron-left.svg'
import styles from '../components/layout/Page/Page.module.css'

const Post = () => {
    const { postSlug } = useParams()
    const [postContent, setPostContent] = useState('')
    const [postMeta, setPostMeta] = useState({})

    useEffect(() => {
        async function fetchPostContent() {
            try {
                const response = await fetch(`/posts/${postSlug}.md`)
                const text = await response.text()

                const { content, data } = matter(text)

                setPostContent(content)
                setPostMeta(data)
            } catch (err) {
                console.error('Unable to locate .md file', err)
            }
        }
        fetchPostContent()
    }, [postSlug])

    return (
        <Page>
            <div>
                <Section>
                    <div className={styles.postHeader}>
                        <Link to='/blog' className={styles.backButton}>
                            <img src={ChevronLeftIcon} alt='arrow left' />
                            <span>Back</span>
                        </Link>
                        <h1 className={styles.postTitle}>{postMeta.title}</h1>
                        <div className={styles.postMeta}>
                            <span className={styles.tag}>#{postMeta.tag}</span>
                            <span className={styles.date}>
                                {postMeta.date &&
                                    format(postMeta.date, 'MMMM d, y')}
                            </span>
                        </div>
                    </div>
                </Section>
                <Section>
                    <Content>
                        <ReactMarkdown remarkPlugins={remarkGfm}>
                            {postContent}
                        </ReactMarkdown>
                    </Content>
                </Section>
            </div>
        </Page>
    )
}

export default Post
