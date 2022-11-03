import styles from './RegisterLoginNavigation.module.scss'
import Link from 'next/link'
import { useRouter } from "next/router";

const RegisterLoginNavigation = () => {

    const router = useRouter();
    return(
        <nav className={styles.navigation}>
            <Link href="/login">
                <a className={router.pathname == "/login" ? `${styles.active}` : `${styles.link}`}>Zaloguj się</a>
            </Link>
            <Link href="/registration/">
                <a className={router.pathname == "/registration" ? `${styles.active}` : `${styles.link}`}>Zarejestruj się</a>
            </Link>
        </nav>
    )
}

export default RegisterLoginNavigation;