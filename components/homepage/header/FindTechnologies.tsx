import styles from './FindTechnologies.module.scss'
import { BsCodeSlash } from 'react-icons/bs';

const FindTechnologies = () => {
    return(
        <div className={styles.findTechnologies}>
            <h2 className={styles.title}>Znajdź technologię <span>IT</span></h2>
            <form className={styles.form}>
                <div className={styles.inputWrapper}>
                    <BsCodeSlash className={styles.icon} />
                    <input className={styles.input} placeholder="Technologia" />
                    <button className={styles.searchButton}>Wyszukaj</button>
                </div>
            </form>
        </div>
    )

}

export default FindTechnologies;