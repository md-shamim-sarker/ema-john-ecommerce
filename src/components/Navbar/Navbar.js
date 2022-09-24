import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.svg';

const Navbar = () => {
    return (
        <nav className='Navbar'>
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

export default Navbar;