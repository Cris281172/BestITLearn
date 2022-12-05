import styles from './Navigation.module.scss'
import Link from 'next/link'
import Logo from '../../../common/logo/Logo'
import menu from './menu.json'
import {useState} from 'react';

interface Props{
    mobileMenuActive: boolean
}

const MobileMenu = (props: Props) => {
    return(
        <div className={`${styles.mobileMenu}  ${props.mobileMenuActive ? styles.active : ''}`}>
            <div className={styles.mobileMenuWrapper}>
                <ul className={`${styles.linkList}`}>
                    {menu.map((menuItem, key) => {
                        return(
                            <li key={key} className={styles.linkWrapper}>
                                <Link href={menuItem.link}>
                                    <a className={styles.link}>{menuItem.title}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div className={`${styles.buttonsWrapper} ${styles.active}`}>
                    <Link href="/login">
                        <a className={styles.loginButton}>Zaloguj się</a>
                    </Link>
                    <Link href="/registration">
                        <a className={styles.registerButton}>Zarejestruj się</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const Navigation = () => {
    const[mobileMenuActive, setMobileMenuActive] = useState(false);
    const hamburgerHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        document.body.style.overflow = "hidden";
        e.currentTarget.classList.toggle(`${styles.isActive}`);
        setMobileMenuActive(true);
        if(!e.currentTarget.classList[2]){
            setMobileMenuActive(false);
            document.body.style.overflow = "visible";
        }
    }
    return(
        <nav className={styles.mainNav}>
            <Logo size={48} />
            <ul className={`${styles.linkList} ${styles.active}`}>
                {menu.map((menuItem, key) => {
                    return(
                        <li key={key} className={styles.linkWrapper}>
                            <Link href={menuItem.link}>
                                <a className={styles.link}>{menuItem.title}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <div className={`${styles.buttonsWrapper} ${styles.active}`}>
                <Link href="/login">
                    <a className={styles.loginButton}>Zaloguj się</a>
                </Link>
                <Link href="/registration">
                    <a className={styles.registerButton}>Zarejestruj się</a>
                </Link>
            </div>
            <button className={`${styles.hamburger} ${styles.active}`} onClick={hamburgerHandler}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </button>
            <MobileMenu mobileMenuActive={mobileMenuActive} />
        </nav>
    )
}

export default Navigation;