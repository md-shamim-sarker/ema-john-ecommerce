import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product, handleRemoveItem}) => {
    console.log(product);
    const {id, img, name, price, quantity, shipping} = product;
    return (
        <div className='ReviewItem'>
            <img src={img} alt="product_img" />
            <div>
                <span>{name}</span> <br />
                <small>
                    Price: <span>${price}</span><br />
                    Quantity: <span>{quantity}</span><br />
                    Shipping: <span>${shipping}</span>
                </small>
            </div>
            <button onClick={() => handleRemoveItem(id)} className='trash-icon'>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default ReviewItem;