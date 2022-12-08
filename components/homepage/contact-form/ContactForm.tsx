import styles from './ContactForm.module.scss';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = yup.object({
    name: yup.string().required("Imie jest wymagane"),
    surname: yup.string().required("Naziwsko jest wymagane"),
    email: yup.string().required("Email jest wymagany").email("Podano nieprawidłowy adres email!"),
    phone: yup.string().matches(phoneRegExp, "Numer telefonu jest nieprawidłowy!").required("Number telefonu jest wymagany").trim(),
    text: yup.string().required("Wiadomość jest wymagana").min(20, 'Wiadomość musi posiadać przynajmniej 20 znaków').max(200, 'Wiadomość może posiadać maksymalnie 200 znaków')
});

interface IRegisterForm{
    name: string,
    surname: string,
    email: string,
    phone: number,
    text: string,
}


const ContactForm = () => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm<IRegisterForm>({
        mode: 'onChange',
        resolver: yupResolver(validationSchema)
    });

    const submitForm = async (data: IRegisterForm) => {
        let res = await fetch('', {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(data),
        })
        let result = await res.json();
        alert(result.status);
    }
    return(
        <div className={styles.contactForm}>
            <h3 className={styles.sectionTitle}>Formularz kontaktowy</h3>
            <form onSubmit={handleSubmit(submitForm)} className={styles.form}>
                <div className={styles.topWrapper}>
                    <div className={styles.item}>
                        <label className={styles.label}>Imię</label>
                        <input className={styles.input} type="text" {...register('name', {})} />
                        <p className={styles.errorMessage}>{errors.name?.message}</p>
                    </div>
                    <div className={styles.item}>
                        <label className={styles.label}>Nazwisko</label>
                        <input className={styles.input} type="text" {...register('surname', {})} />
                        <p className={styles.errorMessage}>{errors.surname?.message}</p>
                    </div>
                    <div className={styles.item}>
                        <label className={styles.label}>E-mail</label>
                        <input className={styles.input} type="email" {...register('email', {})} />
                        <p className={styles.errorMessage}>{errors.email?.message}</p>
                    </div>
                    <div className={styles.item}>
                        <label className={styles.label}>Numer telefonu</label>
                        <input className={styles.input} type="tel" {...register('phone', {})}/>
                        <p className={styles.errorMessage}>{errors.phone?.message}</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Wiadomość</label>
                    <textarea className={`${styles.input} ${styles.text}`}  {...register('text', {})} />
                    <p className={styles.errorMessage}>{errors.text?.message}</p>
                </div>
                <button className={styles.submitButton}>Wyślij wiadomość</button>
            </form>
        </div>
    )
}

export default ContactForm;