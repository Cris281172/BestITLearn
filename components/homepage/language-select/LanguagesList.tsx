import {languages} from './json/languages'
import ReactCountryFlag from "react-country-flag"
import cookiesAddItem from "../../../common/cookies-add-item/cookiesAddItem";
import styles from './LanguagesList.module.scss'
interface Props{
    subtitleStyleActive: boolean
}
const LanguagesList = (props: Props) => {
    const availableLanguages = languages.filter(el => el.available === true)
    console.log(props)
    const test = () => {
    }
    return(
        <ul className={`${styles.languagesList} ${props.subtitleStyleActive ? styles.active : ''}`}>
            {availableLanguages.map(el => {
                return(
                    <>
                        <li className={styles.language} onClick={() => {
                            cookiesAddItem({name: 'language', value: el.id, path: '/', expires: 2592000})
                            test();
                        }}>
                            <ReactCountryFlag
                                style={{
                                    fontSize: '50px',
                                }}
                                countryCode={el.flagName}
                                alt={el.flagName}
                            />
                            <h3 className={styles.languageName}>{el.title}</h3>
                        </li>
                    </>
                )
            })}

        </ul>
    )
}

export default LanguagesList;