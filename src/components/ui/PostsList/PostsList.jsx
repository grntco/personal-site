import styles from './PostsList.module.css'
import { Link } from 'react-router-dom'
import formatPostDate from '../../../utils/formatPostDate.js'
import { useState, useEffect } from 'react'
import matter from 'gray-matter'
import PropTypes from 'prop-types'

const PostItem = ({ post, isBlog }) => {
    return (
        <li className={styles.listItem}>
            <Link
                to={isBlog ? '/blog/' + post.slug : '/library/' + post.slug}
                className={styles.link}
            >
                <span className={styles.date}>{formatPostDate(post.date)}</span>
                <h3 className={styles.title}>{post.title}</h3>
                {post.tag && <span className={styles.tag}>#{post.tag}</span>}
            </Link>
        </li>
    )
}

const PostsList = ({ limit, isBlog }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            try {
                const fetchDir = isBlog ? '/posts/' : '/books/'
                const fetchUrl = isBlog
                    ? `${fetchDir}posts.json`
                    : `${fetchDir}books.json`

                const response = await fetch(fetchUrl)
                const postSlugs = await response.json()

                const postsData = await Promise.all(
                    postSlugs.map(async (slug) => {
                        const fetchSlugUrl = fetchDir + slug + '.md'

                        const postResponse = await fetch(fetchSlugUrl)
                        const postText = await postResponse.text()

                        const { data } = matter(postText)

                        return data
                    }),
                )

                const sorted = postsData.sort((a, b) => {
                    return new Date(b.date) - new Date(a.date)
                })

                setPosts(limit ? sorted.slice(0, limit) : sorted)
            } catch (err) {
                console.error('Unable to retrieve posts', err)
            }
        }

        fetchPosts()
    }, [isBlog, limit])

    return (
        <ul className={styles.list}>
            {posts.map((post, index) => {
                return <PostItem key={index} post={post} isBlog={isBlog} />
            })}
        </ul>
    )
}

PostItem.propTypes = {
    post: PropTypes.object,
    dateFormat: PropTypes.string,
    isBlog: PropTypes.bool,
}

PostsList.propTypes = {
    limit: PropTypes.number,
    isBlog: PropTypes.bool,
}

export default PostsList
