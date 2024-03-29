import styles from './register.module.css'
import {Button, EmailInput, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components'
import {Link, useNavigate} from 'react-router-dom'
import {useAppDispatch} from '../../hooks/hook'
import {registerUser} from '../../services/slices/userSlice'
import {useForm} from '../../hooks/useForm'
import {IUserRegister} from '../../types/types'

export function Register(){


    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { values, handleChange } = useForm<IUserRegister>({
        name:'',
        email:'',
        password:'',
    });
    const { name = "", email = "", password = "" } = values;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(registerUser(values))
    };
    return(
        <div className={styles.main}>

            <div className={styles.title}>
                <p className="text text_type_main-medium">
                    Регистрация
                </p>
            </div>

            <form className={styles.input} onSubmit={handleSubmit}>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={handleChange}
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
                    isIcon={false}
                />

                <PasswordInput
                    onChange={handleChange}
                    value={password}
                    name={'password'}
                    extraClass="mb-2"
                />

            <div className={styles.btn}>
                <Button htmlType="submit" type="primary" size="medium">
                    Зарегистрироваться
                </Button>
            </div>
            </form>


            <div className={styles.btns}>
                <p className="text text_type_main-default text_color_inactive">
                    Уже зарегистрированы?
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
