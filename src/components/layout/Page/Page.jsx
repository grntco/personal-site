import Header from '../Header/Header'
import PropTypes from 'prop-types'
import Container from './Container'
import Section from './Section'
// import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import matter from 'gray-matter'
// import Markdown from '../../ui/Markdown/Markdown'
import Content from '../Content/Content'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from './Page.module.css'
import { SettingsModal } from '../../SettingsModal/SettingsModal'
import Footer from '../Footer/Footer'

export default function Page({ title, contentPath, children }) {
    // const { pageSlug } = useParams()
    const [pageContent, setPageContent] = useState('')
    const [pageMeta, setPageMeta] = useState({})
    const [modalActive, setModalActive] = useState(false)

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

    if (modalActive) {
        document.body.classList.add('modal-active')
    } else {
        document.body.classList.remove('modal-active')
    }

    const toggleModal = () => {
        setModalActive(!modalActive)
    }

    return (
        <>
            <Header handleSettingsBtnClick={() => toggleModal()} />
            <main className={styles.mainContent}>
                {modalActive && (
                    <SettingsModal handleCloseBtnClick={() => toggleModal()} />
                )}
                {contentPath ? (
                    <>
                        <Section className={styles.heroSection}>
                            <Content>
                                <h1>{contentPath ? pageMeta.title : title}</h1>
                            </Content>
                        </Section>
                        <Section>
                            <Content>
                                <ReactMarkdown remarkPlugins={remarkGfm}>
                                    {pageContent}
                                </ReactMarkdown>
                            </Content>
                        </Section>
                    </>
                ) : (
                    children
                )}
            </main>
            <Footer />
        </>
    )
}

Page.propTypes = {
    // children: PropTypes.element,
}
