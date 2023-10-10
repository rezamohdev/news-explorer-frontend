import React from 'react';
import './ModalWithForm.css';

export default function ModalWithForm({ children, buttonText, title, onClose, name, isOpen, onSubmit, }) {
    return (
        <div className={`modal modal_type_${name}`} >
            <div className='modal__content'>
                <button className='modal__close' onClick={onClose}></button>
                <h3 className='modal__title'>{title}</h3>
                <form className='form modal__form' onSubmit={onSubmit} name={name}>
                    {children}
                    <button className='modal__button' type='submit'> {buttonText}</button>
                </form>
            </div>
        </div>
    )
}