import {createPortal} from 'react-dom'
import ModalOverlay from '../modal-overlay/modal-overlay'
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import { FC, ReactNode, useEffect, useState } from 'react'
import styles from './modal.module.css'
import PropTypes from 'prop-types'

const portal = document.getElementById('modal') as HTMLElement

interface IModalProps {
    onClose: () => void
    children: ReactNode
    title?: string
}
const Modal: FC<IModalProps> = ({children, title, onClose}) => {
    useEffect(() => {
        function closeByEscape(evt: KeyboardEvent) {
            if(evt.key === 'Escape') {
                onClose();
            }
        }

        document.addEventListener('keydown', closeByEscape);
        return () => {
            document.removeEventListener('keydown', closeByEscape);
        }

    }, [])


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
                            <button className={styles.button} onClick={onClose}>
                                <CloseIcon type="primary" />
                            </button>

                        </div>
                        {children}
                    </div>
                </div>
            </>,
            portal
        )
    )
}



export default Modal
