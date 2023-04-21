import {BurgerIcon, Button, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'
import {Link, NavLink} from 'react-router-dom'
import clsx from 'clsx'
import { FC } from 'react'
const AppHeader: FC = () => {
    const linkClassName = ({isActive}: {isActive: boolean}) => {
        return clsx(styles.menuLink,{
            [styles.menuLink_inactive]: !isActive
        })
    }
    return (

        <header className={styles.header}>

                <div className={styles.items}>
                    <div className={styles.item}>
                        <NavLink to={'/'} className={linkClassName}>
                            {(isActive)=>(
                                <>
                                    <BurgerIcon type="primary" />
                                    <Button htmlType="button" type="secondary" size="large">
                                        Конструктор
                                    </Button>
                                </>
                            )}
                        </NavLink>


                    </div>

                    <div className={styles.item}>
                        <NavLink to={'/feed'} className={linkClassName}>
                            {(isActive)=>(
                                <>
                                    <ListIcon type="primary" />
                                    <Button htmlType="button" type="secondary" size="large">
                                        Лента заказов
                                    </Button>
                                </>
                            )}
                        </NavLink>

                    </div>
                    <div className={'ml-20'}>
                        <Link to={'/'}>
                            <Logo />
                        </Link>


                    </div>

                </div>

            <div className={styles.item}>
                <NavLink to={'/profile'} className={linkClassName}>
                    {({isActive})=>(
                        <>
                            <ProfileIcon type={isActive ? 'primary' : 'secondary'} />

                                <Button htmlType="button" type="secondary" size="large">
                                    Личный кабинет
                                </Button>

                        </>
                    )}
                </NavLink>


            </div>

        </header>
    )
}

export default AppHeader;
