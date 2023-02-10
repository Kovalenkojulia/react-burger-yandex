import styles from './modal-overlay.module.css'
import PropTypes from 'prop-types'
const ModalOverlay = ({onClick}) => {
    return(
        <div className={styles.overlay} onClick={onClick}/>



    )
}

ModalOverlay.prooTypes = {
    onClick: PropTypes.func.isRequired
}

export default ModalOverlay;
