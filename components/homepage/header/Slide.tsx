import styles from './Slide.module.scss'

interface Props {
    text: string
    imageSrc: string
}

const Slide = (props: Props) => {
    return(
        <div className={styles.slide}>
            <h1 className={styles.title}>{props.text}</h1>
            <img src={props.imageSrc} alt="Slide" className={styles.image} />
        </div>
    )
}

export default Slide