import {createPortal} from 'react-dom'
import ModalOverlay from '../modal-overlay/modal-overlay'
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import { FC, ReactNode, useEffect } from 'react'
import styles from './modal.module.css'
import clsx from 'clsx'

const portal = document.getElementById('modal') as HTMLElement

interface IModalProps {
    onClose: () => void
    children: ReactNode
    title?: string | number
}
const Modal: FC<IModalProps> = ({children, title, onClose}) => {

    const renderTitle = typeof title === "number" ? `#${title}` : title;
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

    const titleClassNames = clsx("text", {
        "text_type_main-large": typeof title === "string",
        "text_type_digits-default": typeof title === "number",
    });


    return (

        createPortal(
            <>
                <ModalOverlay onClick={onClose}/>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <div className={styles.title}>
                            {renderTitle && <p className={titleClassNames}>{renderTitle}</p>}
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
