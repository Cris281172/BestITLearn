import styles from './Register.module.scss';
import RegisterLoginNavigation from "../../components/register-login-navigation/RegisterLoginNavigation";
import Logo from "../../common/logo/Logo";
import axios from "axios"
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object({
    email: yup.string().required("Adres email jest wymagany!").email("Podano nieprawidłowy adres email!"),
    password: yup.string().required("Required"),
    repeatPassword: yup.string().required('Powtórzone hasło jest wymagane!').oneOf([yup.ref('password')], "Hasła nie są takie same!").min(8,'Musi być przynajmniej 8 znaków'),
    // rulesAcceptations: yup.boolean().required("Required"),
    // consentAcceptations: yup.boolean().required("Required"),
});

interface IRegisterForm{
    email: string,
    password: string,
    repeatPassword: string,
    rulesAcceptations: boolean,
    consentAcceptations: boolean
}

const Register = () => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm<IRegisterForm>({
        mode: 'onChange',
        resolver: yupResolver(validationSchema)
    });
    console.log(errors);
    const submitForm = (data: IRegisterForm) => {
        console.log(data);
        console.log('data');
        axios({
            method: "post",
            url: "localhost:8080/register",
            headers: {
                "Content-Type": "application/ld+json"
            },
            data: JSON.stringify({
                "email": "test@test.pl",
                "password": "dsadasdsads"
            })
        })
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err);
            })
    };

    return(
        <div className={styles.login}>
            <div className={styles.loginWrapper}>
                <RegisterLoginNavigation />
                <h3 className={styles.title}>Logowanie</h3>
                <Logo size={20} />
                <form onSubmit={handleSubmit(submitForm)}>
                    <div>
                        <label>Email <span>*</span></label>
                        <input placeholder="Podaj Email" type="email" {...register("email", {})}/>
                        <p>{errors.email?.message}</p>
                    </div>
                    <div>
                        <label>Hasło <span>*</span></label>
                        <input placeholder="Podaj hasło" type="password" {...register("password", {})} />
                        <p>{errors.password?.message}</p>
                    </div>
                    <div>
                        <label>Powtórz hasło <span>*</span></label>
                        <input placeholder="Podaj hasło" type="password" {...register("repeatPassword", )} />
                        <p>{errors.repeatPassword?.message}</p>
                    </div>
                    <div>
                        <label>Zapamiętaj mnie</label>
                        <input type="checkbox" />
                    </div>
                    <button>Zaloguj się</button>
                </form>
            </div>
        </div>
    )
}

export default Register;