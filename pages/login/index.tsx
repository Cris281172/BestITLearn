import type {NextPage} from 'next';
import styles from './Login.module.scss'
import Logo from '../../common/logo/Logo'
import RegisterLoginNavigation from "../../components/register-login-navigation/RegisterLoginNavigation";
import { MdCancel } from 'react-icons/md';
import Link from 'next/link'
import { AiOutlineCheckCircle } from 'react-icons/ai';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import CirclesAnimationBackground from "../../common/circles-animation-background/CirclesAnimationBackground";
import useAuth from "../../hooks/useAuth";
import callToAPI from "../api/api";
import {useState} from 'react';
const validationSchema = yup.object({
    email: yup.string().required("Adres email jest wymagany!").email("Podano nieprawidłowy adres email!"),
    password: yup.string().required("Hasło jest wymagane!"),
    rememberMe: yup.boolean()
});

interface IRegisterForm{
    email: string,
    password: string,
    rememberMe: boolean
}
const Login: NextPage = () => {
    const[sendLoginStatus, setSendLoginStatus] = useState(false);
    const { register, handleSubmit, formState: {errors}, reset } = useForm<IRegisterForm>({
        mode: 'onChange',
        resolver: yupResolver(validationSchema)
    });
    console.log('dasdas')
    console.log(useAuth())

    const submitForm = async (data: IRegisterForm) => {

        const token = await callToAPI('/login', 'post', {
            email: data.email,
            password: data.password,
        })

        if(token.error){
            setSendLoginStatus(true);
        }
        else{
            if(data.rememberMe){
                const now = new Date();
                now.setTime(now.getTime() + 1000);
                document.cookie = `token=${token.token};expires=${now.toUTCString()};path=/`;
            }
            // else{
            //     const now = new Date();
            //     document.cookie = `token=${token.token};expires=${now.toUTCString()};path=/`;
            // }
        }

    }

        return(
        <div className={styles.login}>
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
                    <h3 className={styles.title}>Logowanie</h3>
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
                        <div className={styles.lastItem}>
                            <div className={styles.rememberMe}>
                                <label className={styles.label}>
                                    <input className={styles.label__checkbox} type="checkbox" {...register("rememberMe", {})}/>
                                    <span className={styles.label__text}>
                                  <span className={styles.label__check}>
                                    <AiOutlineCheckCircle className={styles.icon} />
                                  </span>
                                </span>
                                </label>
                                <label className={styles.labelTitle}>Zapamiętaj mnie</label>
                            </div>
                            <div className={styles.forgotPassword}>
                                <Link href="">
                                    <a className={styles.title}>Zapomniałeś hasła?</a>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.submitWrapper}>
                            <button className={styles.submitButton}>Zaloguj się</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login;