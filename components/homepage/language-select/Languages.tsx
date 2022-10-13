import LanguagesList from "./LanguagesList";
import {useState, useEffect} from 'react';
import cookiesGetItem from "../../../common/cookies-get-item/cookiesGetItem";
import { TypeAnimation } from 'react-type-animation';
import styles from './Languages.module.scss'

const Languages = () => {
    const[languagesVisibility, setLanguagesVisibility] = useState(true);
    const[subtitleStyleActive, setSubtitleStyleActive] = useState(false)
    // useEffect(() => {
    //     if(cookiesGetItem()){
    //         setLanguagesVisibility(false)
    //     }
    //     else{
    //         setLanguagesVisibility(true);
    //     }
    // })
    return(
        <>
            {languagesVisibility &&
            <div className={styles.languagesWrapper}>
                <div className={styles.languages}>
                    <div className={styles.titleWrapper}>
                        <TypeAnimation
                            className={styles.title}
                            sequence={['Welcome in Best']}
                            cursor={false}
                            repeat={0}
                            wrapper="h1"
                        />
                        <TypeAnimation
                            className={`${styles.title} ${styles.underlinedText}`}
                            sequence={[900, 'IT']}
                            cursor={false}
                            repeat={0}
                            wrapper="h1"
                        />
                        <TypeAnimation
                            className={styles.title}
                            sequence={[1100, 'Learn', () => {
                                setSubtitleStyleActive(true);
                            }]}
                            cursor={true}
                            repeat={0}
                            wrapper="h1"
                        />
                    </div>

                    <h3 className={`${styles.subtitle} ${subtitleStyleActive ? styles.active : ''}`}>Choose your language:</h3>
                    <LanguagesList subtitleStyleActive={subtitleStyleActive} />
                </div>
            </div>
            }
        </>
    )
}

export default Languages;