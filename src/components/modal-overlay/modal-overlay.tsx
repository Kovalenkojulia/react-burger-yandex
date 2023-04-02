import styles from './modal-overlay.module.css'
import PropTypes from 'prop-types'
import { FC, MouseEventHandler } from 'react'

interface IModalOverLay {
    onClick: () => void
}
const ModalOverlay: FC<IModalOverLay> = ({onClick}) => {
    return(
        <div className={styles.overlay} onClick={onClick}/>



    )
}



export default ModalOverlay;
