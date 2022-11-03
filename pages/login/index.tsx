import type {NextPage} from 'next';
import styles from './Login.module.scss'
import Logo from '../../common/logo/Logo'
import RegisterLoginNavigation from "../../components/register-login-navigation/RegisterLoginNavigation";
import { MdCancel } from 'react-icons/md';
import Link from 'next/link'

const Login: NextPage = () => {
    return(
        <div className={styles.login}>
            <div className={styles.loginWrapper}>
                <RegisterLoginNavigation />
                <div className={styles.bottomSection}>
                    <Link href="/">
                        <a>
                            <MdCancel className={styles.cancel} />
                        </a>
                    </Link>
                    <Logo size={20} />
                    <h3 className={styles.title}>Logowanie</h3>
                    <form className={styles.form}>
                        <div className={styles.item}>
                            <label className={styles.labelTitle}>Email <span className={styles.required}>*</span></label>
                            <input className={styles.input} placeholder="Podaj Email" type="email" />
                        </div>
                        <div className={styles.item}>
                            <label className={styles.labelTitle}>Hasło <span className={styles.required}>*</span></label>
                            <input className={styles.input} placeholder="Podaj hasło" type="password" />
                        </div>
                        <div className={styles.lastItem}>
                            <input className={styles.input} type="checkbox" />
                            <label className={styles.labelTitle}>Oświadczam, że znam i akceptuję powiadomienia Regulaminu BestITLearn.pl</label>
                        </div>
                        <button>Zaloguj się</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login;