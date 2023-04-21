import styles from './forgot-password.module.css'
import {Button, EmailInput} from '@ya.praktikum/react-developer-burger-ui-components'
import { FC } from 'react'
import {getForgotPasswordError, forgotPassword} from '../../services/slices/userSlice'
import {useForm} from '../../hooks/useForm'
import {Link, useNavigate} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'


interface IForgotPasswordForm {
    email: string
}


export const ForgotPassword: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const error = useAppSelector(getForgotPasswordError)
    const {values, handleChange} = useForm<IForgotPasswordForm>({email: ''})
    const {email=''} = values

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(forgotPassword(email)).then(({ payload}: {payload: any}) => {
            if ((payload)?.success) {
                navigate("/reset-password", {
                    state: {
                        fromResetPassword: true,
                    },
                    replace: true,
                });
            }
        });
    };


    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <p className="text text_type_main-medium">
                    Восстановление пароля
                </p>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>

                <EmailInput
                    onChange={handleChange}
                    name={'email'}
                    value={email}
                    placeholder="Укажите e-mail"
                />
                {error && (
                    <p className="text text_type_main-default text_color_error">
                        {error.message}
                    </p>
                )}
                <div className={styles.btn}>
                    <Button htmlType="submit" type="primary" size="medium">
                        Восстановить
                    </Button>
                </div>

            </form>



            <div className={styles.btns}>
                <p className="text text_type_main-default text_color_inactive">
                    Вспомнили пароль?
                </p>
                <Link to={'/login'}>
                    <Button htmlType="button" type="secondary" size="medium">
                        Войти
                    </Button>
                </Link>
            </div>

        </div>
    )

}
