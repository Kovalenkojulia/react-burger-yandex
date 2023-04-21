import styles from './modal-overlay.module.css'
import { FC } from 'react'

interface IModalOverLay {
    onClick: () => void
}
const ModalOverlay: FC<IModalOverLay> = ({onClick}) => {
    return(
        <div className={styles.overlay} onClick={onClick}/>



    )
}



export default ModalOverlay;
