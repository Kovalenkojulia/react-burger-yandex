import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import BurgerConstructor from '../../burger-constructor/burger-constructor'


const BurgerIngredientsItem = ({dataBurger}) => {
    return (

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>

                {dataBurger.filter(data => data.type === 'main' || data.type === 'sauce'  ).map((data)=>{
                    return(
                        <div key = {data._id}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                type={data.type}
                                text={data.name}
                                price={data.price}
                                thumbnail={data.image}

                            />

                        </div>

                    )
                })}
        </div>
    )
}

BurgerIngredientsItem.propTypes = {
    dataBurger: PropTypes.arrayOf(PropTypes.object)
}

export default BurgerIngredientsItem;
