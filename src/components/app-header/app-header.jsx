import {BurgerIcon, Button, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'
const AppHeader = () => {
    return (

        <header className={styles.header}>

                <div className={styles.items}>
                    <div className={styles.item}>
                        <BurgerIcon type="primary" />
                        <Button htmlType="button" type="secondary" size="large">
                            Конструктор
                        </Button>
                    </div>

                    <div className={styles.item}>
                        <ListIcon type="primary" />
                        <Button htmlType="button" type="secondary" size="large">
                            Лента заказов
                        </Button>
                    </div>
                    <div className={'ml-20'}>
                        <Logo />

                    </div>

                </div>





            <div className={styles.item}>
                <ProfileIcon type="primary" />
                <Button htmlType="button" type="secondary" size="large">
                    Личный кабинет
                </Button>

            </div>





        </header>
    )
}

export default AppHeader;
