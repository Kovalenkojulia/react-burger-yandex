import styles from './reset-password.module.css'
import {Button, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components'
import { useEffect} from 'react'
import {useAppDispatch, useAppSelector} from '../../hooks/hook'
import {Link, useLocation, useNavigate,} from 'react-router-dom'
import {resetPassword, getResetPasswordError} from '../../services/slices/userSlice'
import {useForm} from '../../hooks/useForm'
import { IPasswordResetPayload, IUserAuthSuccessUserResponse } from '../../types/types'


export function ResetPassword () {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const error = useAppSelector(getResetPasswordError);
    const { values, handleChange } = useForm<IPasswordResetPayload>({
        password: '',
        token: ''
    });
    const { password = "", token = "" } = values;

    useEffect(() => {
        if (!location?.state?.fromResetPassword) {
            navigate("/");
        }
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(resetPassword({ password, token })).then(({ payload }) => {
            if ((payload as IUserAuthSuccessUserResponse)?.success) {
                navigate("/login", { replace: true });
            }
        });
    };


    return (
        <div>
            <div className={styles.title}>
                <p className="text text_type_main-medium">
                    Восстановление пароля
                </p>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>

               <PasswordInput
                   onChange={handleChange}
                   value={password}
                   name={'password'}
                   extraClass="mb-2"
                   placeholder={'Введите новый пароль'}
                   autoFocus
               />

               <Input
                   type={'text'}
                   placeholder={'Введите код из письма'}
                   onChange={handleChange}
                   value={token}
                   name={'token'}
                   error={false}
                   errorText={'Ошибка'}
                   size={'default'}
                   extraClass="ml-1"
               />
                {error && (
                    <p className="text text_type_main-default text_color_error">
                        {error.message}
                    </p>
                )}
            <div className={styles.btn}>
                <Button htmlType="submit" type="primary" size="medium">
                    Сохранить
                </Button>
            </div>
            </form>



            <div className={styles.btns}>
                <p className="text text_type_main-default text_color_inactive">
                    Вспомнили пароль?
                </p>
                <Link to={'/login'}>
                <Button htmlType="button" type="secondary" size="medium" >
                    Войти
                </Button>
                </Link>
            </div>

        </div>
    )

}
