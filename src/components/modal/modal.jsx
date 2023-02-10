import {createPortal} from 'react-dom'
import ModalOverlay from '../modal-overlay/modal-overlay'
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {useEffect, useState} from 'react'
import styles from './modal.module.css'
import PropTypes from 'prop-types'

const portal = document.getElementById('modal')
const Modal = ({children, title, isOpen, onClose}) => {
    useEffect(() => {
        function closeByEscape(evt) {
            if(evt.key === 'Escape') {
                onClose();
            }
        }

        document.addEventListener('keydown', closeByEscape);
        return () => {
            document.removeEventListener('keydown', closeByEscape);
        }

    }, [])


    if (!isOpen) {
        return null
    }
    return (

        createPortal(
            <>
                <ModalOverlay onClick={onClose}/>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <div className={styles.title}>
                            <p className="text text_type_main-medium">
                                {title || ''}
                            </p>
                            <CloseIcon type="primary" onClick={onClose}/>
                        </div>
                        {children}
                    </div>
                </div>
            </>,
            portal
        )
    )
}

Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node,
}

export default Modal
