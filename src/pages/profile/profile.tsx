import styles from './profile.module.css'
import {Button, EmailInput, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components'
import { FC, useEffect, useRef, useState } from 'react'
import {getCurrentUser, getUpdateUserError, logoutUser, updateUser} from '../../services/slices/userSlice'
import { useForm} from '../../hooks/useForm'
import clsx from 'clsx'
import {IUserRegister} from '../../types/types'
import {useAppSelector, useAppDispatch} from '../../hooks/hook'
import ProfileNavigation from '../../components/profile-navigation/profile-navigation'


const initialState: IUserRegister = {
    name: '',
    email:'',
    password:''
}

export const Profile: FC = () => {
    const dispatch = useAppDispatch();
    const error = useAppSelector(getUpdateUserError);
    const user = useAppSelector(getCurrentUser);
    const { values, setValues, handleChange } =
        useForm<IUserRegister>(initialState);
    let { name, email, password } = values;

    const isEditMode = user?.name !== name || user?.email !== email || password;

    useEffect(() => {
        if (user) {
            setValues({
                ...user,
                password: "",
            });
        }
    }, [user, setValues]);

    const handleReset = () => {
        if (user) {
            setValues({
                ...user,
                password: "",
            });
        }
    };

    const handleSubmit = () => {
        // @ts-ignore
        dispatch(updateUser(values));
    };

    return (
        <main className={styles.main}>
            <div>
                <ProfileNavigation />
                <p className="text text_type_main-default text_color_inactive mt-20">
                    В этом разделе вы можете изменить свои персональные данные
                </p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input
                    value={name}
                    name="name"
                    placeholder="Имя"
                    onChange={handleChange}
                />
                <Input
                    value={email}
                    name="email"
                    placeholder="Логин"
                    onChange={handleChange}
                />
                <PasswordInput
                    value={password}
                    name="password"
                    onChange={handleChange}
                />
                {error && (
                    <p className="text text_type_main-default text_color_error">
                        {error.message}
                    </p>
                )}
                {isEditMode && (
                    <div className={styles.buttons}>
                        <Button onClick={handleReset} htmlType="reset" type="secondary">
                            Отмена
                        </Button>
                        <Button htmlType="submit">Сохранить</Button>
                    </div>
                )}
            </form>
        </main>
    );
};


