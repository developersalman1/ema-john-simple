import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import google from '../../image/google.png';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { useState } from 'react';

const Register = () => {
    const { singUp } = useContext(AuthContext);
    const [error,setError] = useState('');

    const handleSingUp = (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        const confirmPassword = from.confirmPassword.value;
        console.log(email,password,confirmPassword);
        if(password !== confirmPassword){
            setError('password and confirmPassword not match!!');
            return;
        }
        singUp(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            from.reset()
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage)
        })
        
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSingUp}>
                <p className='title'>Sing Up</p>
                <div className='input-email'>
                    <label className='label' htmlFor="email">Email</label>
                    <input className='input' type="email" name="email" id="" placeholder='Email' required/>
                </div>
                <div className='input-email'>
                    <label className='label' htmlFor="password">Password</label>
                    <input className='input' type="password" name="password" id="" placeholder='password' required/>
                </div>
                <div className='input-email'>
                    <label className='label' htmlFor="password">Confirm Password</label>
                    <input className='input' type="password" name="confirmPassword" id="" placeholder='password' required/>
                </div>
                <p className='error'>{error}</p>
                <div className='singUp-btn'>
                    <button>Sing Up</button>
                </div>
                <div className='login-account'>
                    <p>Already have an account? <Link className='login-link' to='/login'>Login</Link></p>
                </div>
            </form>
            <div className='xox'>
                <span className='bottom-line'></span>
                <p className='or'>or</p>
                <span className='bottom-line2'></span>
            </div>
                <div className='google-singUp'>
                    <img src={google} alt="" />
                    <p>Continue with Google</p>
                </div>
        </div>
    );
};

export default Register;