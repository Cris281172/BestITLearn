import styles from './ListItem.module.scss';
interface Props{
    number: number,
    title: string,
    text: string,
    readMoreLink: string,
}


const ListItem = (props: Props) => {
    return(
        <li className={styles.listItem}>
            <h2 className={styles.number}>0{props.number}</h2>
            <h3 className={styles.title}>{props.number}. {props.title}</h3>
            <p className={styles.text}>
                {props.text}
            </p>
            <button className={styles.readMore}>Zobacz więcej</button>
        </li>
    )
}

export default ListItem;