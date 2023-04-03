import styles from './profile.module.css'
import {Button, EmailInput, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components'
import { FC, useEffect, useRef, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getCurrentUser, getUpdateUserError, logoutUser, updateUser} from '../../services/slices/userSlice'
import { useForm} from '../../hooks/useForm'
import clsx from 'clsx'
import {IUserRegister} from '../../types/types'

const initialState: IUserRegister = {
    name: '',
    email:'',
    password:''
}

export const Profile: FC =()=> {

    /**const inputRef = useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }**/

    const dispatch = useDispatch()
    const user = useSelector(getCurrentUser)
    const { values, handleChange, setValues } = useForm<IUserRegister>(initialState)
    let {name = '', email = '', password = ''} = values
    const isEditMode = user?.name !== name || user?.email !== email || password
    const error = useSelector(getUpdateUserError)

    useEffect(()=>{
        if(user){
            setValues(user);
        }
    }, [user, setValues])

    const linkClassName = ({isActive}: {isActive: boolean})=>{
        return clsx(
            "text text_type_main-medium",
            isActive ? "menu-link_active" : "menu-link_inactive"
        )
    }
    const handleLogout = () => {
        dispatch<any>(logoutUser())
    }

    const handleReset = () => {
        if (user) {
            setValues(user)
        }
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // @ts-ignore
        dispatch<any>(updateUser(values))
    }
    return (
        <main className={styles.page}>
            <div>
                <nav>
                    <ul>
                        <li className={styles.profileLink}>
                            <NavLink to={'/profile'} className={linkClassName} >
                                Профиль
                            </NavLink>
                        </li>
                        <li className={styles.profileLink}>
                            <NavLink to={'/orders'} className={linkClassName}>
                                История заказов
                            </NavLink>
                        </li>
                        <li className={styles.profileLink}>
                            <NavLink to={'/login'} className={linkClassName} >
                            <button className={clsx(styles.button, "text text_type_main-medium ")} onClick={handleLogout}>
                                Выход
                            </button>

                        </NavLink>
                        </li>
                    </ul>
                </nav>

                <p className="text text_type_main-default text_color_inactive mt-20">
                    В этом разделе вы можете изменить свои персональные данные
                </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={handleChange}
                    icon="EditIcon"
                    value={name}
                    name={'name'}
                    error={false}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="ml-1"
                />
                <EmailInput
                    onChange={handleChange}
                    value={email}
                    name={'email'}
                    placeholder="Логин"
                    isIcon={true}
                    extraClass="mb-2"
                />
                <PasswordInput
                    onChange={handleChange}
                    value={password}
                    name={'password'}
                    icon="EditIcon"
                    />
                {error && (
                    <p className="text text_type_main-default text_color_error">
                        {error.message}
                    </p>
                )}
                {isEditMode && (
                    <div className={styles.buttons}>
                        <Button htmlType={'reset'} type={'secondary'} onClick={handleReset}>
                            Отмена
                        </Button>
                        <Button htmlType={'submit'}>Сохранить</Button>
                    </div>
                )}

            </form>
        </main>

    )
}
