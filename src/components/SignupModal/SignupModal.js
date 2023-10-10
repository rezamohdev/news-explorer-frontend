import React from 'react';
import { Link } from 'react-router-dom';
import './SignupModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useForm } from '../../hooks/useForm';

export default function SignupModal({ onRegisterUser, handleCloseModal, isOpen = { isOpen }, buttonText, handleOpenSigninModal }) {
    const { values, handleChange, setValues } = useForm({});
    const handleOnSubmit = (evt) => {
        evt.preventDefault();
        onRegisterUser(values);
    }
    return (
        <ModalWithForm isOpen={isOpen} onClose={handleCloseModal} title='Sign up' name="signup" buttonText={buttonText} onSubmit={handleOnSubmit}>
            <fieldset className='form__fieldset' >
                <label htmlFor='email' className='form__label'>Email</label>
                <input name='email' type='email' value={values.email || ""} placeholder='email' minLength={1} maxLength={30} className='form__input' />

                <label htmlFor='password' className='form__label'>Password</label>
                <input name='password' type='password' value={values.password || ''} placeholder='password' minLength={1} maxLength={30} className='form__input' />

                <label htmlFor='username' type='text' className='form__label'>Username</label>
                <input name='username' value={values.username || ''} placeholder='username' minLength={1} maxLength={30} className='form__input' />
            </fieldset>
            <span className='form__error'>This email is not available</span>
            <Link className='form__link-container' onClick={handleOpenSigninModal}>Or <span className='form__main-link'>Sign in</span></Link>
        </ModalWithForm>
    )
}
