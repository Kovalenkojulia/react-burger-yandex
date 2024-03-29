import BurgerConstructorTab from './burger-constructor-tab/burger-constructor-tab'
import styles from './burger-constructor.module.css'

import IngredientsItem from './item-constructor/ingredients-item'
import {useAppSelector} from '../../hooks/hook'

import React, { FC } from 'react'
import { useInView } from 'react-intersection-observer';
import {Link, useLocation} from 'react-router-dom'
import {IIngredient} from '../../types/types'


interface IRootState {
    ingredients: {
        data: IIngredient[]
        loading: boolean
        error: string | null
    }
}
const BurgerIngredients: FC = () => {
    const location = useLocation()
    const {data, isLoading, hasError} = useAppSelector((state) => state.ingredients)
    const [currentTab, setCurrentTab] = React.useState("bun");
    const [bunRef] = useInView({
        threshold: 0.5, onChange: (inView) => inView && setCurrentTab('bun')
    });

    const [mainRef] = useInView({
        threshold: 0.5, onChange: (inView) => inView && setCurrentTab('main')
    });
    const [sauceRef] = useInView({
        threshold: 0.5, onChange: (inView) => inView && setCurrentTab('sauce')
    });


    const onTabClick = (tab: string) => {
        setCurrentTab(tab);
        const element = document.getElementById(tab);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };


    if(isLoading && !data.length) {
        return <p>Loading...</p>
    }
    if(hasError) {
        return <p>{hasError.message}</p>
    }



    return (
         <div>

             <BurgerConstructorTab currentTab={currentTab} onTabClick={onTabClick} />
            <div className={styles.scroller} >
                {data.length > 0 && (
                    <div>
                        <div ref={bunRef}>
                        <p className="text text_type_main-medium mt-10">
                            Булки
                        </p>

                        <div className={styles.item} key={'bun'} id={'bun'} data-cy="bun">
                            {data.filter(el => el.type === 'bun').map((el: IIngredient) =>
                                     (
                                         <Link key={el._id} to={`/ingredients/${el._id}`} state={{backgroundLocation: location}} className={styles.links} data-cy={"IngredientLink"}>

                                        <IngredientsItem key={el._id} ingredient={el} title={'Булки'} type='bun'
                                         />
                                         </Link>


                                    )

                            )
                            }
                        </div>
                        </div>
                        <div ref={sauceRef} >

                        <p className="text text_type_main-medium mt-10">
                            Соусы
                        </p>
                        <div className={styles.item} key={'sauce'} id={'sauce'} data-cy={'main'} >
                            {data.filter(el => el.type === 'sauce').map((el: IIngredient) =>
                                 (
                                    <Link key={el._id} to={`/ingredients/${el._id}`} state={{backgroundLocation: location}} className={styles.links} data-cy={"IngredientLink"}>
                                    <IngredientsItem key={el._id} ingredient={el} title={'Соусы'}
                                                     type='sauce'  />
                                    </Link>
                                )
                            )
                            }
                        </div>
                        </div>
                        <div ref={mainRef}>

                        <p className="text text_type_main-medium mt-10">
                            Начинки
                        </p>

                        <div className={styles.item} key={'main'} id={'main'} data-cy={'main'} >
                            {data.filter(el => el.type === 'main').map((el: IIngredient) =>
                                 (
                                    <Link key={el._id} to={`/ingredients/${el._id}`} state={{backgroundLocation: location}} className={styles.links} data-cy={"IngredientLink"}>
                                    <IngredientsItem key={el._id} ingredient={el}
                                                     title={'Начинки'}
                                                     type='main'
                                    />
                                    </Link>
                                )
                            )
                            }
                        </div>
                        </div>

                    </div>
                )}
            </div>
        </div>)


}



export default BurgerIngredients

