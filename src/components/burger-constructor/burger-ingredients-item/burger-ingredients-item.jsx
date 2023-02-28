import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import {ingredientType} from '../../../utils/types'
import {useDispatch} from 'react-redux'
import {useRef} from 'react'
import {removeFilling, sortIngredients} from '../../../services/slices/burgerConstructorSlice'
import {useDrag, useDrop} from 'react-dnd'

import styles from './burger-ingredients-item.module.css'

const BurgerIngredientsItem = ({filling, index}) => {
    const dispatch = useDispatch()
    const dropRef = useRef()
    const [, drop] = useDrop({
        accept: 'constructorIngredient',
        hover(item, monitor) {
            if (!dropRef.current) {
                return
            }

            const dragIndex = item.index
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = dropRef.current?.getBoundingClientRect()
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            dispatch(sortIngredients({dragIndex, hoverIndex}))
            item.index = hoverIndex
        },
    })

    const [{isDragging}, drag, dragPreview] = useDrag({
        type: 'constructorIngredient',
        item: {
            index,
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        previewOptions: {
            showPreview: false, // отключить подложку

        }
    })

    const opacity = isDragging ? 0.3 : 2

    drop(drag(dragPreview(dropRef)))

    const handleDeleteFilling = (filling) => {
        dispatch(removeFilling(filling))
    }

    return (

        <div ref={dropRef} style={{opacity}} className={styles.block}>
            <div className={styles.ingredients}>
                <div className={styles.icon}>
                    <DragIcon type="primary"/>
                </div>
                <div className={styles.ingredient}>
                    <ConstructorElement
                        type={filling.type}
                        text={filling.name}
                        price={filling.price}
                        thumbnail={filling.image}
                        handleClose={() => handleDeleteFilling(filling)}
                    />
                </div>



            </div>


        </div>
    )
}

BurgerIngredientsItem.propTypes = {
    filling: ingredientType.isRequired,
    index: PropTypes.number
}


export default BurgerIngredientsItem
