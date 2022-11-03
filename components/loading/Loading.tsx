import styles from './Loading.module.scss';

const Loading = () => {
    return(
        <div className={styles.test}>
            <div className={styles.ring}>
                Loading
                <span></span>
            </div>

        </div>

    )
}

export default Loading;