import React, { useEffect, useState } from 'react';
import '../css/Cart.css';

export const Cart = ({ cartItem, setCartItem }) => {
  function removeCart(product) {
    setCartItem(cartItem.filter((c) => c.id !== product.id));
  }
  var [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(cartItem.reduce((acc, curr) => acc + parseInt(curr.price), 0))
  }, [cartItem])

  return (
    <div className='cart-container'>
      <h2>Your Cart</h2>
      <h3>Total Cart Item: {cartItem.length}</h3>
      {cartItem.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItem.map((product) => (
          <div key={product.id} className="cart-box">
            <div className="cart-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="cart-detail">
              <h3>{product.name}</h3>
            </div>
            <div className="price-box">
              <h4>Rs.{product.price}</h4>
            </div>
            <div className="remove-cart">
              <button onClick={() => removeCart(product)}>Remove from Cart</button>
            </div>
          </div>
        ))
      )}
      <div className="total-box">
        <h1>Price:(in Rs.)</h1>
        <h1 className='tot-amt'>{total}</h1>
      </div>
    </div>
  );
};
