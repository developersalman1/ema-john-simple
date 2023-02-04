import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import google from '../../image/google.png';
import './Login.css';

const Login = () => {
    const { singIn } = useContext(AuthContext);
    const [error,setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSingIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        singIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage)
        })
        
    }
    return (
        <div className='form-container-login'>
            <form onSubmit={handleSingIn}>
                <p className='title'>Login</p>
                <div className='input-email'>
                    <label className='label' htmlFor="email">Email</label>
                    <input className='input' type="email" name="email" id="" placeholder='Email' />
                </div>
                <div className='input-email'>
                    <label className='label' htmlFor="password">Password</label>
                    <input className='input' type="password" name="password" id="" placeholder='password' />
                </div>
                <p className='error'>{error}</p>
                <div className='singUp-btn'>
                    <button>Login</button>
                </div>
                <div className='login-account'>
                    <p>New to Ema-john? <Link className='login-link' to='/register'>Create New Account</Link></p>
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

export default Login;