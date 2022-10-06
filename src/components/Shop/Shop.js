import React from 'react';
import {useState} from 'react';
import {useLoaderData} from 'react-router-dom';
import {addToDb} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [cart, setCart] = useState([]);
    const handeAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    };

    const products = useLoaderData();

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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;