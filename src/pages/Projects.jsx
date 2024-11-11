import Page from '../components/layout/Page/Page'
import Section from '../components/layout/Page/Section'
import Content from '../components/layout/Content/Content'
import ProjectsList from '../components/ui/ProjectsList/ProjectsList'

const Projects = () => {
    return (
        <Page>
            <Section>
                <Content>
                    <h1>Projects</h1>
                    <p>
                        Created to learn. 
                    </p>
                </Content>
            </Section>
            <Section>
                <ProjectsList />
            </Section>
        </Page>
    )
}

export default Projects
