import styles from './login.module.css';
import {Button, EmailInput, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components'
import { Dispatch, useState } from 'react'
import {Link} from 'react-router-dom'
import {useForm} from '../../hooks/useForm'
import {useDispatch, useSelector} from 'react-redux'
import {getLoginError, loginUser} from '../../services/slices/userSlice'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

interface IUserLogin {
    email: string
    password: string
}
export function LoginPage() {
    const dispatch: Dispatch<any> | ThunkDispatch<any, any, AnyAction> = useDispatch();
    const error = useSelector(getLoginError);
    const { values, handleChange } = useForm<IUserLogin>({email: '', password: ''});
    const { email = "", password = "" } = values;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // @ts-ignore
        dispatch(loginUser(values));
    };


    return (
        <div className={styles.wrapper} >
            <div className={styles.title}>
                <p className="text text_type_main-medium">
                    Вход
                </p>
            </div>

            <form className={styles.input} onSubmit={handleSubmit}>
                <EmailInput
                    onChange={handleChange}
                    value={email}
                    name={'email'}
                    isIcon={false}
                />
                <PasswordInput
                    onChange={handleChange}
                    value={password}
                    name={'password'}
                    extraClass="mb-2"
                />
                {error && (
                    <p className="text text_type_main-default text_color_error">
                        {error.message}
                    </p>
                )}



                <div className={styles.btn}>
                    <Button htmlType="submit" type="primary" size="large">
                        Войти
                    </Button>
                </div>
            </form>


            <div className={styles.btns}>
                <p className="text text_type_main-default">
                    Вы— новый пользователь?
                </p>
                <Link to={'/register'}>
                    <Button htmlType="button" type="secondary" size="medium">
                        Зарегистрироваться
                    </Button>
                </Link>
            </div>
            <div className={styles.btns}>
                <p className="text text_type_main-default">
                    Забыли пароль?
                </p>
                <Link to={'/forgot-password'}>
                    <Button htmlType="button" type="secondary" size="medium">
                        Восстановить пароль
                    </Button>
                </Link>

            </div>

        </div>
    )
}