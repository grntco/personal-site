import Header from '../Header/Header'
import PropTypes from 'prop-types'
import Container from './Container'
import Section from './Section'
// import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import matter from 'gray-matter'
import Markdown from '../../ui/Markdown/Markdown'
import styles from './Page.module.css'

export default function Page({ title, contentPath, children }) {
    // const { pageSlug } = useParams()
    const [pageContent, setPageContent] = useState('')
    const [pageMeta, setPageMeta] = useState({})

    useEffect(() => {
        async function fetchPostContent() {
            try {
                const response = await fetch(`/pages/${contentPath}.md`)
                const text = await response.text()
                const { content, data } = matter(text)

                setPageContent(content)
                setPageMeta(data)
            } catch (err) {
                console.error('Unable to locate .md file', err)
            }
        }
        fetchPostContent()
    }, [contentPath])

    // console.log(pageSlug)

    return (
        <>
            <Header />
            <main>
                {contentPath ? (
                    <>
                        <Section className={styles.heroSection}>
                            <h1>{contentPath ? pageMeta.title : title}</h1>
                        </Section>
                        <Section>
                            <Markdown content={pageContent} />
                        </Section>
                    </>
                ) : (
                    children
                )}
            </main>
        </>
    )
}

Page.propTypes = {
    // children: PropTypes.element,
}
