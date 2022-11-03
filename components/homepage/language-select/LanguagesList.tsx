import {languages} from './languages/languages'
import ReactCountryFlag from "react-country-flag"
import cookiesAddItem from "../../../common/cookies-add-item/cookiesAddItem";
import styles from './LanguagesList.module.scss'
interface Props{
    subtitleStyleActive: boolean
    setHomepageStatus: (open: boolean) => void;
    setLanguagesStatus: (open: boolean) => void;
}
const LanguagesList = (props: Props) => {
    const availableLanguages = languages.filter(el => el.available === true)
    const setVisibleValue = () => {
        props.setHomepageStatus(true);
        props.setLanguagesStatus(false);
    }
    return(
        <ul className={`${styles.languagesList} ${props.subtitleStyleActive ? styles.active : ''}`}>
            {availableLanguages.map(el => {
                return(
                    <>
                        <li className={styles.language} onClick={() => {
                            cookiesAddItem({name: 'language', value: el.id, path: '/', expires: 2592000})
                            setVisibleValue();
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