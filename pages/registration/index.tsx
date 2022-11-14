import styles from './Registration.module.scss';
import RegisterLoginNavigation from "../../components/register-login-navigation/RegisterLoginNavigation";
import Logo from "../../common/logo/Logo";
import axios from "axios"
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CirclesAnimationBackground from "../../common/circles-animation-background/CirclesAnimationBackground";
import Link from "next/link";
import {MdCancel} from "react-icons/md";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {NextPage} from "next";
import callToAPI from "../api/api";
import { useRouter } from 'next/router'
import {useState} from 'react';

const validationSchema = yup.object({
    email: yup.string().required("Adres email jest wymagany!").email("Podano nieprawidłowy adres email!"),
    password: yup.string().required("Hasło jest wymagane").min(8,'Hasło musi zawierać przynajmniej 8 znaków!').matches(/[0-9]+/ , 'Haslo musi zawierać conajmniej jedną liczbę!').matches(/[A-Z]+/ , 'Haslo musi zawierać conajmniej jedną duża cyfrę!'),
    repeatPassword: yup.string().required('Powtórzone hasło jest wymagane!').oneOf([yup.ref('password')], "Hasła nie są takie same!"),
    rulesAcceptations: yup.bool().oneOf([true], "Musisz zaakceptować regulamin"),
});

interface IRegisterForm{
    email: string,
    password: string,
    repeatPassword: string,
    rulesAcceptations: boolean,
}

const Registration: NextPage = () => {
    const [registrationStatus, setRegistrationStatus] = useState(false);
    const Router = useRouter();
    const { register, handleSubmit, formState: {errors}, reset } = useForm<IRegisterForm>({
        mode: 'onChange',
        resolver: yupResolver(validationSchema)
    });
    console.log(errors);

    const submitForm = async (data: IRegisterForm) => {
        await callToAPI('/register', 'post', {
            email: data.email,
            password: data.password,
        })
            .then(res => {
                setRegistrationStatus(true);
                Router.push({
                        pathname: '/',
                    },
                    undefined, { shallow: true }
                )
            })
    }

    return(
        <div className={styles.registration}>
            <CirclesAnimationBackground />
            <div className={styles.loginWrapper}>
                <RegisterLoginNavigation />
                <div className={styles.bottomSection}>
                    <Link href="/">
                        <a>
                            <MdCancel className={styles.cancel} />
                        </a>
                    </Link>
                    <Logo size={20} />
                    <h3 className={styles.title}>Rejestracja</h3>
                    <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
                        <div className={styles.item}>
                            <label className={styles.labelTitle}>Email <span className={styles.required}>*</span></label>
                            <input className={styles.input} placeholder="Podaj Email" type="email" {...register("email", {})}/>
                            <p className={styles.errorMessage}>{errors.email?.message}</p>
                        </div>
                        <div className={styles.item}>
                            <label className={styles.labelTitle}>Hasło <span className={styles.required}>*</span></label>
                            <input className={styles.input} placeholder="Podaj hasło" type="password" {...register("password", {})}  />
                            <p className={styles.errorMessage}>{errors.password?.message}</p>
                        </div>
                        <div className={styles.item}>
                            <label className={styles.labelTitle}>Powtórz hasło <span className={styles.required}>*</span></label>
                            <input className={styles.input} placeholder="Powtórz hasło" type="password" {...register("repeatPassword", {})}  />
                            <p className={styles.errorMessage}>{errors.repeatPassword?.message}</p>
                        </div>
                        <div className={styles.lastItem}>
                            <div className={styles.acceptRules}>
                                <label className={styles.label}>
                                    <input className={styles.label__checkbox} type="checkbox" {...register("rulesAcceptations", {})} />
                                    <span className={styles.label__text}>
                                  <span className={styles.label__check}>
                                    <AiOutlineCheckCircle className={styles.icon} />
                                  </span>
                                </span>
                                </label>
                                <label className={styles.labelTitle}>Oświadczam, że znam i akceptuję powiadomienia Regulaminu BestITLearn.pl</label>
                            </div>
                            <p className={styles.errorMessage}>{errors.rulesAcceptations?.message}</p>

                        </div>
                        <div className={styles.submitWrapper}>
                            <button className={styles.submitButton}>Zarejestruj się się</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Registration;