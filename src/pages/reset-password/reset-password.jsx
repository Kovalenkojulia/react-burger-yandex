import styles from './reset-password.module.css'
import {Button, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components'
import {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useLocation, useNavigate,} from 'react-router-dom'
import {resetPassword, getResetPasswordError} from '../../services/slices/userSlice'
import {useForm} from '../../hooks/useForm'


export function ResetPassword () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const error = useSelector(getResetPasswordError);
    const { values, handleChange } = useForm();
    const { password = "", token = "" } = values;

    useEffect(() => {
        if (!location?.state?.fromResetPassword) {
            navigate("/");
        }
    });

    const handleSubmit = () => {
        dispatch(resetPassword({ password, token })).then(({ payload }) => {
            if (payload?.success) {
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
            <form onSubmit={handleSubmit}>

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
