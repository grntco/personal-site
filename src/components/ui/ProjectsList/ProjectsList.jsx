import LinkButton from '../Buttons/LinkButton'
import styles from './ProjectsList.module.css'
import { useState, useEffect, useContext } from 'react'
import Button from '../Buttons/Button'
import ChevronIcon from '../../../assets/icons/chevron-up.svg'
import Markdown from 'react-markdown'
import { ThemeContext } from '../../../ThemeContext'
import matter from 'gray-matter'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ProjectsList() {
    const [projects, setProjects] = useState([])
    const [activeIndex, setActiveIndex] = useState(-1)
    const { isDarkMode } = useContext(ThemeContext)

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await fetch('/projects/projects.json')
                const projectSlugs = await response.json()

                const projects = await Promise.all(
                    projectSlugs.map(async (slug) => {
                        const projectResponse = await fetch(
                            `projects/${slug}.md`,
                        )
                        const projectText = await projectResponse.text()

                        const { content, data } = matter(projectText)

                        return { content: content, data: data }
                    }),
                )
                setProjects(projects)
            } catch (err) {
                console.error(`Unable to retrieve projects: ${err}`)
            }
        }
        fetchProjects()

        setTimeout(() => {
            setActiveIndex(0)
        }, 1000)
    }, [])

    function toggleActive(isActive, index) {
        isActive ? setActiveIndex(-1) : setActiveIndex(index)
    }

    return (
        <ul className={styles.accordian}>
            {projects.length === 0 ? (
                <Skeleton
                    count={4}
                    baseColor={'var(--secondary-bg-color)'}
                    highlightColor={'var(--border-color)'}
                    borderRadius={'4px'}
                    height={'1.8rem'}
                    className={styles.skeleton}
                />
            ) : (
                projects
                    .slice()
                    .reverse()
                    .map((project, index) => {
                        const isActive = activeIndex === index
                        return (
                            <li className={styles.panel} key={index}>
                                <div
                                    className={styles.header}
                                    onClick={() =>
                                        toggleActive(isActive, index)
                                    }
                                >
                                    <h2>{project.data.title}</h2>
                                    <Button
                                        onClick={() =>
                                            toggleActive(isActive, index)
                                        }
                                        className={styles.toggleBtn}
                                        type='icon'
                                        isDarkMode={isDarkMode}
                                    >
                                        <img
                                            src={ChevronIcon}
                                            alt='chevron icon button'
                                            className={`${styles.icon} ${isActive && styles.active}`}
                                        />
                                    </Button>
                                </div>
                                <div
                                    className={`${styles.content} ${isActive && styles.active}`}
                                >
                                    {project.data.image && (
                                        <div className={styles.imageWrapper}>
                                            <img
                                                src={project.data.image}
                                                alt={project.data.title}
                                            />
                                        </div>
                                    )}
                                    <div className={styles.btnsContainer}>
                                        <LinkButton
                                            url={project.data.demo}
                                            external
                                        >
                                            Demo
                                        </LinkButton>
                                        <LinkButton
                                            url={project.data.repo}
                                            external
                                        >
                                            Repo
                                        </LinkButton>
                                    </div>
                                    <div className={styles.text}>
                                        <Markdown>{project.content}</Markdown>
                                    </div>
                                </div>
                            </li>
                        )
                    })
            )}
        </ul>
    )
}
