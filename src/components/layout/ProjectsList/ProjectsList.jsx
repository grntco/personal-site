import LinkButton from '../../Buttons/LinkButton'
import styles from './ProjectsList.module.css'
import projects from './projects.json'
import { Fragment, useState, useEffect } from 'react'
import IconButton from '../../Buttons/IconButton'
import ChevronIcon from '../../../assets/icons/chevron-up.svg'
import Markdown from 'react-markdown'

export default function ProjectsList() {
    const [activeIndex, setActiveIndex] = useState(-1)

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
                            <button
                                onClick={() => toggleActive(isActive, index)}
                                className={styles.toggleBtn}
                            >
                                <img
                                    src={ChevronIcon}
                                    alt='chevron icon button'
                                    className={`${styles.icon} ${isActive && styles.active}`}
                                />
                            </button>
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
