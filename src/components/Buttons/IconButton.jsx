import PropTypes from 'prop-types'
import styles from './IconButton.module.css'

function IconButton({ src, handleOnClick, alt, title }) {
    return (
        <button className={styles.button} onClick={handleOnClick}>
            <img src={src} alt={alt} title={title} className={styles.icon} />
        </button>
    )
}

IconButton.propTypes = {
    src: PropTypes.img,
    handleOnClick: PropTypes.func,
    alt: PropTypes.string,
    title: PropTypes.string,
}

export default IconButton
