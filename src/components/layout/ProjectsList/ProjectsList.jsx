import LinkButton from '../../Buttons/LinkButton'
import styles from './ProjectsList.module.css'
import projects from './projects.json'
import { useState } from 'react'
import IconButton from '../../Buttons/IconButton'
import ChevronIcon from '../../../assets/icons/chevron-up.svg'

export default function ProjectsList() {
    const [activeIndex, setActiveIndex] = useState(-1)

    return (
        <ul className={styles.accordian}>
            {projects.map((project, index) => {
                return (
                    <li className={styles.panel} key={index}>
                        <div className={styles.panelHeader}>
                            <h3>{project.name}</h3>
                            <IconButton
                                src={ChevronIcon}
                                handleOnClick={() =>
                                    activeIndex === index
                                        ? setActiveIndex(-1)
                                        : setActiveIndex(index)
                                }
                            />
                        </div>
                        {activeIndex === index && (
                            <div className={styles.panelContent}>
                                <div>{project.meta.year}</div>
                                <p>{project.content}</p>
                                <div className={styles.buttonsContainer}>
                                    <LinkButton
                                        url={project.links.demo}
                                        external
                                    >
                                        Demo
                                    </LinkButton>
                                    <LinkButton
                                        url={project.links.repo}
                                        external
                                    >
                                        Repo
                                    </LinkButton>
                                </div>
                            </div>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}