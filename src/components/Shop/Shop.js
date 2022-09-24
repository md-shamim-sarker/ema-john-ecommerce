import React from 'react';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    return (
        <div className='Shop'>
            <div className='Left'>
                <Products></Products>
            </div>
            <div className='Right'>
                <h2>This is right side</h2>
            </div>
        </div>
    );
};

export default Shop;