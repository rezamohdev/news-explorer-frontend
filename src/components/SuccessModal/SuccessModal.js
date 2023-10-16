import React from 'react';
import './SuccessModal.css';
import { Link } from 'react-router-dom';

export default function SuccessModal({ name, title, handleCloseModal, handleOpenSigninModal }) {
    return (
        <div className={`modal modal_type_${name}`}>
            <div className='modal__content_success'>
                <button className='modal__close' onClick={handleCloseModal}></button>
                <h3 className='modal__title'>{title}</h3>
                <Link to="/signin" className='form__main-link' onClick={handleOpenSigninModal}>Sign in</Link>
            </div>
        </div>
    )
}
