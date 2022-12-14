import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, seller, price, ratings} = props.product;

    return (
        <div className='Product'>
            <div className='Product-info'>
                <img src={img} alt="product_img" />
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
            </div>
            <div className='card-btn'>
                <p>Seller: {seller} <br />
                    Ratings: {ratings}</p>
                <button onClick={() => props.handeAddToCart(props.product)}>
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    );
};

export default Product;