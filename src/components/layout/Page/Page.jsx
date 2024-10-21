import Header from '../Header/Header'
import PropTypes from 'prop-types'
import Container from './Container'
import Section from './Section'
// import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import matter from 'gray-matter'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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
                    <Section>
                        <h1>{pageMeta.title}</h1>
                        <Markdown remarkPlugins={remarkGfm}>
                            {pageContent}
                        </Markdown>
                    </Section>
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
