import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    // let quantity = 0;

    for(const product of cart) {
        // quantity = quantity + product.quantity;
        total = total + product.price; //* product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = (total + shipping + tax).toFixed(2);

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
            {/* <div>
                <button className='clear-btn'>Clear Cart</button>
            </div>
            <div>
                <button className='review-btn'>Review Order</button>
            </div> */}
        </div>
    );
};

export default Cart;