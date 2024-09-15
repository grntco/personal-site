import LinkButton from '../../Buttons/LinkButton'
import styles from './ProjectsList.module.css'
import projects from './projects.json'
import { useState, useEffect, useContext } from 'react'
import Button from '../../Buttons/Button'
import ChevronIcon from '../../../assets/icons/chevron-up.svg'
import Markdown from 'react-markdown'
import { ThemeContext } from '../../App/App'

export default function ProjectsList() {
    const [activeIndex, setActiveIndex] = useState(-1)
    const { isDarkMode } = useContext(ThemeContext)

    useEffect(() => {
        setTimeout(() => {
            setActiveIndex(0)
        }, 1000)
    }, [])

    function toggleActive(isActive, index) {
        isActive ? setActiveIndex(-1) : setActiveIndex(index)
    }

    return (
        <ul className={styles.accordian}>
            {projects.map((project, index) => {
                const isActive = activeIndex === index
                return (
                    <li className={styles.panel} key={index}>
                        <div
                            className={styles.header}
                            onClick={() => toggleActive(isActive, index)}
                        >
                            <h2>{project.name}</h2>
                            <Button
                                onClick={() => toggleActive(isActive, index)}
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
                            <div className={styles.btnsContainer}>
                                <LinkButton url={project.links.demo} external>
                                    Demo
                                </LinkButton>
                                <LinkButton url={project.links.repo} external>
                                    Repo
                                </LinkButton>
                            </div>
                            <div className={styles.text}>
                                <Markdown>{project.content}</Markdown>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
