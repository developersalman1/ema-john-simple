import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            console.error(error)
          });
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    !user?.email ? <Link to='/login'>Login</Link> : 
                    <button onClick={handleLogOut}>SingOut</button>
                }
                <Link to='/register'>SingUp</Link>
            </div>
        </nav>
    );
};

export default Header;