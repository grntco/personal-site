import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from './Markdown.module.css'

// I'm thinking on layout (or page) stylesheet, with styles for each page components that can be reused without having to import styles from Pages into each page

function Markdown({ content }) {
    return (
        <ReactMarkdown className={styles.markdown} remarkPlugins={remarkGfm}>
            {content}
        </ReactMarkdown>
    )
}

export default Markdown
