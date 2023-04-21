import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {useAppDispatch} from '../../../hooks/hook'
import { FC, useRef } from 'react'
import {removeFilling, sortIngredients} from '../../../services/slices/burgerConstructorSlice'
import { useDrag, useDrop, XYCoord } from 'react-dnd'
import {IIngredientWithUUID} from '../../../types/types'

import styles from './burger-ingredients-item.module.css'

interface IBurgerIngredientsItemProps {
    filling: IIngredientWithUUID
    index: number
}
const BurgerIngredientsItem: FC<IBurgerIngredientsItemProps> = ({filling, index}) => {
    const dispatch = useAppDispatch()
    const dropRef = useRef<HTMLDivElement>(null)
    const [, drop] = useDrop({
        accept: 'constructorIngredient',
        hover(item:{index: number}, monitor) {
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
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

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

    })

    const opacity = isDragging ? 0.3 : 2

    drop(drag(dragPreview(dropRef)))

    const handleDeleteFilling = (filling: IIngredientWithUUID) => {
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




export default BurgerIngredientsItem
