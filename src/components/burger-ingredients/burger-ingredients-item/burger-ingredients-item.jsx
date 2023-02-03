import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'


import styles from './burger-ingredients-item.module.css'
import BurgerIngredients from '../burger-ingredients'
import PropTypes from 'prop-types'

const BurgerIngredientsItem = ({dataBurger}) => {
    return (

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>

                {dataBurger.map((data)=>{
                    return(
                        <div>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                type={data.type}
                                isLocked={true}
                                text={data.name}
                                price={data.price}
                                thumbnail={data.image}
                                key = {data._id}
                            />

                        </div>

                    )
                })}

        </div>
    )
    BurgerIngredients.propTypes = {
        type: PropTypes.string,
        text: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.string,
        image: PropTypes.string,
        _id: PropTypes.string
    }
}
export default BurgerIngredientsItem;
