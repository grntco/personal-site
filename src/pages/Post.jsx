import { useEffect, useState, useContext } from 'react'
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
import { Button } from '../components/ui/Buttons/Button'
import { SettingsContext } from '../SettingsContext'

const Post = () => {
    const { postSlug } = useParams()
    const [postContent, setPostContent] = useState('')
    const [postMeta, setPostMeta] = useState({})
    const { isDarkMode } = useContext(SettingsContext)

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
                        <Link to='/blog' className={styles.allPostsLink}>
                            <img src={ChevronLeftIcon} alt='arrow left' />
                            All Posts
                        </Link>
                        <h1 className={styles.postTitle}>{postMeta.title}</h1>
                        <div className={styles.postMeta}>
                            <div className={styles.date}>
                                {postMeta.date &&
                                    format(postMeta.date, 'LL.dd.yy')}
                            </div>
                            <div className={styles.tag}>#{postMeta.tag}</div>{' '}
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
