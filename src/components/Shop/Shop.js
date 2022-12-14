import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {useLoaderData} from 'react-router-dom';
import {addToDb, getStoredCart} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const {products} = useLoaderData();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    const handeAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
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