import LinkButton from '../../Buttons/LinkButton'
import styles from './ProjectsList.module.css'
import projects from './projects.json'

export default function ProjectsList() {
    return (
        <ul className={styles.list}>
            {projects.map((project) => {
                return (
                    <li className={styles.listItem}>
                        <p className={styles.year}>{project.meta.year}</p>
                        <div className={styles.info}>
                            <h3>{project.name}</h3>
                            <p>{project.exerpt}</p>
                        </div>
                        <div className={styles.buttonsContainer}>
                            <LinkButton url={project.links.demo} external>
                                Demo
                            </LinkButton>
                            <LinkButton url={project.links.repo} external>
                                Repo
                            </LinkButton>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
