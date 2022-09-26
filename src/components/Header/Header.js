import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';

const Header = () => {
    return (
        <nav className='Header'>
            <img src={logo} alt="Logo" />
            <div>
                <a href="./shop">Shop</a>
                <a href="./orders">Orders</a>
                <a href="./inventory">Inventory</a>
                <a href="./about">About</a>
            </div>
        </nav>
    );
};

export default Header;