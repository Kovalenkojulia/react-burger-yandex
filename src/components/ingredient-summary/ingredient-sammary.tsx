import {FC} from 'react'
import {MAX_INGREDIENTS_NUMBER} from '../../utils/constants'
import styles from './ingredient-sammary.module.css'
import clsx from 'clsx'

interface IIngredientSammaryProps {
    url: string
    index: number
    last: boolean
    count: number
}
const IngredientSammary: FC<IIngredientSammaryProps> = ({url, index, last, count}) => {
    return (
        <div
            className={styles.container}
            style={{
                zIndex: `${MAX_INGREDIENTS_NUMBER - index}`,
                left: `${index * 50}px`,
            }}
        >
            <img className={styles.img} src={url} alt="ingredient" />
            {last && count && (
                <div className={clsx(styles.overlay, "text_type_main-default")}>
                    +{count}
                </div>
            )}
        </div>
    )
}
export default IngredientSammary
