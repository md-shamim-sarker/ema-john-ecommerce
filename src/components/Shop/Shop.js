import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(res => setProducts(res))
            .catch(err => console.error(err));
    }, []);

    const handeAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };

    return (
        <div className='Shop'>
            <div className='Left'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handeAddToCart={handeAddToCart}
                    ></Product>)
                }
            </div>
            <div className='Right'>
                <h3>Order Summary</h3>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: %1200</p>
                <p>Total Shipping Charge: $5</p>
                <p>Tax: $114</p>
                <h4>Grand Total: $1559</h4>
                <div>
                    <button className='clear-btn'>Clear Cart</button>
                </div>
                <div>
                    <button className='review-btn'>Review Order</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;