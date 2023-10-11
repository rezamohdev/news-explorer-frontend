import React from 'react';
import { Link } from 'react-router-dom';
import './SigninModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useForm } from '../../hooks/useForm';

export default function SigninModal({ onRegisterUser, handleCloseModal, isOpen = { isOpen }, buttonText, handleOpenSignupModal }) {
    const { values, handleChange, setValues } = useForm({});
    const handleOnSubmit = (evt) => {
        evt.preventDefault();
        onRegisterUser(values);
    }
    return (
        <ModalWithForm isOpen={isOpen} onClose={handleCloseModal} title='Sign in' name="signup" buttonText={buttonText} onSubmit={handleOnSubmit}>
            <fieldset className='form__fieldset' >
                <label htmlFor='email' className='form__label'>Email</label>
                <input name='email' type='email' value={values.email || ""} placeholder='email' minLength={1} maxLength={30} className='form__input' />
                <span className='form__error_signin'>Invalid email address</span>

                <label htmlFor='password' className='form__label'>Password</label>
                <input name='password' type='password' value={values.password || ''} placeholder='password' minLength={1} maxLength={30} className='form__input' />
            </fieldset>
            <Link className='form__link-container' onClick={handleOpenSignupModal}>Or <span className='form__main-link'>Sign up</span></Link>
        </ModalWithForm>
    )
}
