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
                        Listed are several projects created to learn to code,
                        mostly for The Odin Project's{' '}
                        <a
                            href='https://www.theodinproject.com/paths/full-stack-javascript'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Full Stack JavaScript Path
                        </a>
                        . To see what else I have built/am building, visit my{' '}
                        <a
                            href='https://github.com/grntco'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            GitHub
                        </a>
                        .
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
