import Page from '../components/layout/Page/Page'
import Section from '../components/layout/Page/Section'
// import styles from '../components/layout/Page/Page.module.css'
import ProjectsList from '../components/ui/ProjectsList/ProjectsList'
// import { Link } from 'react-router-dom'

// I'm thinking on layout (or page) stylesheet, with styles for each page components that can be reused without having to import styles from Pages into each page

function Projects() {
    return (
        <Page>
            <Section>
                <h1>Projects</h1>
                <p>Hello from Projects! Here are a list of projects created.</p>
            </Section>
            <Section>
                <ProjectsList />
            </Section>
        </Page>
    )
}

export default Projects
