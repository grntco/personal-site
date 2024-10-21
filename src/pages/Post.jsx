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
import { Link } from 'react-router-dom'
import ArrowLeftIcon from '../assets/icons/arrow-left.svg'
import styles from '../components/layout/Page/Page.module.css'

function Post() {
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

    // console.log(postContent)
    // console.log(postMeta.date)

    return (
        <Page>
            <div>
                <Section>
                    <div className={styles.postHeader}>
                        <Link to='/blog'>
                            <img src={ArrowLeftIcon} alt='arrow left' />
                        </Link>
                        <h1>{postMeta.title}</h1>
                        <div className={styles.postMeta}>
                            <span className={styles.date}>
                                {postMeta.date &&
                                    format(postMeta.date, 'LL-dd')}
                            </span>
                            <span className={styles.tag}>#{postMeta.tag}</span>
                        </div>
                    </div>
                </Section>
                <Section>
                    <article className={styles.postContent}>
                        <Markdown remarkPlugins={remarkGfm}>
                            {postContent}
                        </Markdown>
                    </article>
                </Section>
            </div>
        </Page>
    )
}

export default Post
