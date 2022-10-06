import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {addToDb} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(res => setProducts(res))
            .catch(err => console.error(err));
    }, []);

    const [cart, setCart] = useState([]);
    const handeAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;