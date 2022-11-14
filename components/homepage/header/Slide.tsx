import styles from './Slide.module.scss'
import Image from 'next/image'

interface Props {
    text: string
    imageSrc: string
}

const Slide = (props: Props) => {
    return(
        <div className={styles.slide}>
            <h1 className={styles.title}>{props.text}</h1>
            <div className={styles.image}>
                <Image src={props.imageSrc} alt="Slide" layout="fill"/>
            </div>
        </div>
    )
}

export default Slide