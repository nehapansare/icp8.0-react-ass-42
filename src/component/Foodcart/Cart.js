import React from 'react';
import './Cart.css';

function Cart(props) {
  return (
    <div className='cart'>
      <img src={props.imgUrl} alt={props.title} className='food-img'/>
      <h1>{props.title}</h1>
      <p>{props.Discription}</p>
      <p className='price'>Price: ₹{props.price}</p>
      <button className="food-cart">Add to Cart</button>
      
    </div>
  );
}

export default Cart;