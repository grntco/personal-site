import styles from './PostsList.module.css'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { Fragment } from 'react'
import { useState, useEffect } from 'react'
import matter from 'gray-matter'

function PostsList() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch('/posts/posts.json')
                const postSlugs = await response.json()

                const postsData = await Promise.all(
                    postSlugs.map(async (slug) => {
                        const postResponse = await fetch(`posts/${slug}.md`)
                        const postText = await postResponse.text()

                        const { data } = matter(postText)

                        return data
                    }),
                )

                const groupedPosts = postsData.reduce((acc, post) => {
                    const year = post.date.getFullYear()

                    if (!acc[year]) {
                        acc[year] = []
                    }

                    acc[year].push(post)
                    return acc
                }, {})

                const sortedPosts = Object.entries(groupedPosts)
                    .sort(([yearA], [yearB]) => yearB - yearA)
                    .map(([year, posts]) => [
                        year,
                        posts.sort((a, b) => b.date - a.date),
                    ])

                setPosts(sortedPosts)
            } catch (err) {
                console.error('Unable to retrieve posts', err)
            }
        }

        fetchPosts()
    }, [])

    return (
        <ul className={styles.list}>
            {posts.map(([year, postsByYear]) => {
                return (
                    <Fragment key={year}>
                        <li className={styles.yearTitle}>
                            <h2>{year}</h2>
                        </li>
                        {postsByYear.map((post, index) => {
                            return (
                                <li key={index} className={styles.listItem}>
                                    <Link
                                        to={post.slug}
                                        className={styles.link}
                                    >
                                        <span className={styles.date}>
                                            {format(post.date, 'LL-dd')}
                                        </span>
                                        <h3 className={styles.title}>
                                            {post.title}
                                        </h3>
                                        <span className={styles.tag}>
                                            #{post.tag}
                                        </span>
                                    </Link>
                                </li>
                            )
                        })}
                    </Fragment>
                )
            })}
        </ul>
    )
}

export default PostsList
