import React from 'react';
import './SignupModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

export default function SignupModal({ onRegisterUser, handleCloseModal, isOpen = { isOpen }, buttonText, handleOpenLoginModal }) {
    const handleOnSubmit = (evt) => {
        evt.preventDefault();
        onRegisterUser(values);
    }
    return (
        <ModalWithForm isOpen={isOpen} onClose={handleCloseModal} title='Sign up' name="signup" buttonText={buttonText} onSubmit={handleOnSubmit}>
            <fieldset className='form__fieldset' >
                <label htmlFor='email' className='form__label'>Email</label>
                <input name='email' type='email' value='' placeholder='email' minLength={1} maxLength={30} className='form__input' />
                <label htmlFor='password' className='form__label'>Password</label>
                <input name='password' type='password' value='' placeholder='password' minLength={1} maxLength={30} className='form__input' />

                <label htmlFor='username' type='text' className='form__label'>Username</label>
                <input name='username' value='' placeholder='username' minLength={1} maxLength={30} className='form__input' />
            </fieldset>
            <span className='form__error'>This email is not available</span>
            <span className='form__link'>Or <a className='form__lin_type_'>Sign in</a></span>
        </ModalWithForm>
    )
}
