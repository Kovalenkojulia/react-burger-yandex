import styles from './profile.module.css'
import {Button, EmailInput, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components'
import {useEffect, useRef, useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getCurrentUser, getUpdateUserError, logoutUser, updateUser} from '../../services/slices/userSlice'
import { useForm} from '../../hooks/useForm'
import clsx from 'clsx'


export function Profile() {
    const [value, setValue] = useState('bob@example.com')
    const onChange = e => {
        setValue(e.target.value)
    }
    const inputRef = useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }

    const dispatch = useDispatch()
    const user = useSelector(getCurrentUser)
    const { values, handleChange, setStarterValues } = useForm()
    let {name = '', email = '', password = ''} = values
    const isEditMode = user?.name != name || user?.email !== email || password
    const error = useSelector(getUpdateUserError)

    useEffect(()=>{
        if(user){
            setStarterValues(user);
        }
    }, [user, setStarterValues])

    const linkClassName = ({isActive})=>{
        return clsx(
            "text text_type_main-medium",
            isActive ? "menu-link_active" : "menu-link_inactive"
        )
    }
    const handleLogout = () => {
        dispatch(logoutUser())
    }

    const handleReset = () => {
        if (user) {
            setStarterValues(user)
        }
    }
    const handleSubmit = () => {
        dispatch(updateUser(values))
    }
    return (
        <>
            <div className={styles.links}>
               <Link exact to={'/profile'} className={`${styles.link} ${styles.profileLink}`} activeClassName={styles.activeLink} >
                   <p className="text text_type_main-medium ">
                       Профиль
                   </p>

               </Link>
                <NavLink exact to={'/profile/orders'} className={styles.link} activeClassName={styles.activeLink}>
                    <p className="text text_type_main-medium ">
                        История заказов
                    </p>

                </NavLink>
                <NavLink to={'/logout'} className={styles.link} activeClassName={styles.activeLink} >
                    <button className={clsx(styles.btn, "text text_type_main-medium ")} onClick={handleLogout}>
                        Выход
                    </button>

                </NavLink>

                <div className={styles.text}>
                    <p className="text text_type_main-small ">
                        В этом разделе вы можете
                        изменить свои персональные данные
                    </p>
                </div>

            </div>

            <form className={styles.input} onSubmit={handleSubmit}>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={handleChange}
                    icon="EditIcon"
                    value={name}
                    name={'name'}
                    error={false}
                    ref={inputRef}
                    onIconClick={onIconClick}
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
                {error && (
                    <p className="text text_type_main-default text_color_error">
                        {error.message}
                    </p>
                )}
                {isEditMode && (
                    <div>
                        <Button htmlType={'reset'} type={'secondary'} onClick={handleReset}>
                            Отмена
                        </Button>
                        <Button htmlType={'submit'}>Сохранить</Button>
                    </div>
                )}



            </form>
        </>

    )
}
