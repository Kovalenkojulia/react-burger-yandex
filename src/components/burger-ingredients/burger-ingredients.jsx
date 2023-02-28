import BurgerConstructorTab from './burger-constructor-tab/burger-constructor-tab'
import styles from './burger-constructor.module.css'
import {Counter, CurrencyIcon, Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import IngredientsItem from './item-constructor/ingredients-item'
import {useSelector, useDispatch} from 'react-redux'
import {fetchIngredients} from '../../services/slices/burgerItemSlice'
import React, {useEffect} from 'react'
import { useInView } from 'react-intersection-observer';

const BurgerIngredients = () => {
    const dispatch = useDispatch()
    const {data, loading, error} = useSelector((state) => state.ingredients)
    useEffect(() => {
        dispatch(fetchIngredients());

    }, [dispatch]);

    //console.log(data.find((ingredient)=> ingredient.type === 'bun'))
    const [currentTab, setCurrentTab] = React.useState("bun");
    const [bunRef, bunInView] = useInView({
        threshold: 0.5,
    });

    const [mainRef, mainInView] = useInView({
        threshold: 0.5,
    });
    const [sauceRef, sauceInView] = useInView({
        threshold: 0.5,
    });


    const onTabClick = (tab) => {
        setCurrentTab(tab);
        const element = document.getElementById(tab);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };
    const handleIngredientScroll = () => {
        switch (true) {
            case bunInView:
                setCurrentTab
                ('bun');
                break;
            case sauceInView:
                setCurrentTab('main');
                break;
            case mainInView:
                setCurrentTab('sauce');
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        handleIngredientScroll();
    }, [bunInView, sauceInView, mainInView]);



    if(loading && !data.length) {
        return <p>Loading...</p>
    }
    if(error) {
        return <p>{error}</p>
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

                        <div className={styles.item} key={'bun'}>
                            {data.filter(el => el.type === 'bun').map((el) => {
                                    return (
                                        <IngredientsItem key={el._id} ingredient={el} titile={'Булки'} type='bun'
                                         />
                                    )
                                }
                            )
                            }
                        </div>
                        </div>
                        <div ref={sauceRef} >

                        <p className="text text_type_main-medium mt-10">
                            Соусы
                        </p>
                        <div className={styles.item} key={'sauce'}>
                            {data.filter(el => el.type === 'sauce').map((el) => {
                                return (
                                    <IngredientsItem key={el._id} ingredient={el} title={'Соусы'}
                                                     type='sauce'  />
                                )}
                            )
                            }
                        </div>
                        </div>
                        <div ref={mainRef}>

                        <p className="text text_type_main-medium mt-10">
                            Начинки
                        </p>

                        <div className={styles.item} key={'main'}>
                            {data.filter(el => el.type === 'main').map((el) => {
                                return (
                                    <IngredientsItem key={el._id} ingredient={el}
                                                     title={'Начинки'}
                                                     type='main'
                                    />
                                )}
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

