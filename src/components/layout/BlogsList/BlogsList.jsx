import styles from './BlogsList.module.css'
// import Markdown from 'react-markdown'
import blogs from '../../../data/blogs.json'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { Fragment } from 'react'

function BlogsList() {
    const blogsOrdered = blogs.sort((a, b) => {
        const aYear = new Date(a.date).getFullYear()
        const bYear = new Date(b.date).getFullYear()
        return bYear - aYear
    })

    // console.log()

    return (
        <ul className={styles.list}>
            {blogsOrdered.map((blog, index) => {
                const currentBlogYear = new Date(blog.date).getFullYear()
                const previousBlogYear =
                    index > 0
                        ? new Date(blogsOrdered[index - 1].date).getFullYear()
                        : null

                console.log(
                    `current: ${currentBlogYear}, previous: ${previousBlogYear}`,
                )

                if (currentBlogYear === previousBlogYear) {
                    return (
                        <li key={index} className={styles.listItem}>
                            <Link
                                to={blog.path}
                                className={styles.link}
                  
                            >
                                <span className={styles.date}>
                                    {format(new Date(blog.date), 'LL-dd')}
                                </span>
                                <h3 className={styles.title}>{blog.title}</h3>
                                <span className={styles.tag}>#{blog.tag}</span>
                            </Link>
                        </li>
                    )
                } else {
                    return (
                        <Fragment key={index}>
                            <li className={styles.yearTitle}>
                                <h2>{currentBlogYear}</h2>
                            </li>
                            <li key={index} className={styles.listItem}>
                                <Link
                                    to={blog.path}
                                    className={styles.link}
                               
                                >
                                    <span className={styles.date}>
                                        {format(new Date(blog.date), 'LL-dd')}
                                    </span>
                                    <h3 className={styles.title}>
                                        {blog.title}
                                    </h3>
                                    <span className={styles.tag}>
                                        #{blog.tag}
                                    </span>
                                </Link>
                            </li>
                        </Fragment>
                    )
                }
            })}
        </ul>
    )
}

export default BlogsList
