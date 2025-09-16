import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import formatPostDate from '../utils/formatPostDate'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Page from '../components/layout/Page/Page'
import Section from '../components/layout/Page/Section'
import Content from '../components/layout/Content/Content'
import ChevronLeftIcon from '../assets/icons/chevron-left.svg'
import styles from '../components/layout/Page/Page.module.css'

const Post = () => {
    const { slug } = useParams()
    const [postContent, setPostContent] = useState('')
    const [postMeta, setPostMeta] = useState({})

    const isBlogPost = window.location.href.includes('blog')

    useEffect(() => {
        async function fetchPostContent() {
            try {
                const fetchDir = isBlogPost ? '/posts/' : '/books/'
                const fetchUrl = `${fetchDir}${slug}.md`

                const response = await fetch(fetchUrl)
                const text = await response.text()

                const { content, data } = matter(text)

                setPostContent(content)
                setPostMeta(data)
            } catch (err) {
                console.error('Unable to locate .md file', err)
            }
        }
        fetchPostContent()
    }, [isBlogPost, slug])

    return (
        <Page>
            <div>
                <Section>
                    <div className={styles.postHeader}>
                        <Link
                            to={isBlogPost ? '/blog' : '/library'}
                            className={styles.allPostsLink}
                        >
                            <img src={ChevronLeftIcon} alt='arrow left' />
                            {isBlogPost ? 'All Posts' : 'All Books'}
                        </Link>
                        <h1 className={styles.postTitle}>{postMeta.title}</h1>
                        <div className={styles.postMeta}>
                            <div className={styles.date}>
                                {postMeta.date && formatPostDate(postMeta.date)}
                            </div>
                            {postMeta.tag && (
                                <div className={styles.tag}>
                                    #{postMeta.tag}
                                </div>
                            )}
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
