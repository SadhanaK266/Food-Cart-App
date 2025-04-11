import React, { useState } from 'react';
import FoodData from '../food_data.json';
import '../css/Home.css';

export const Home = ({ cartItem, setCartItem }) => {
  const [products] = useState(FoodData);

  function addCart(product) {
    setCartItem([...cartItem, product]);
  }

  function removeCart(product) {
    setCartItem(cartItem.filter((c) => c.id !== product.id));
  }

  return (
    <div className='home'>
      {products.map((item) => {
        const name = item.name.length > 16 ? item.name.substring(0, 15) + '...' : item.name;
        const inCart = cartItem.some((c) => c.id === item.id);
        return (
          <div key={item.id} className="box">
            <div className="image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="detail">
              <h3>{name}</h3>
              <h4>Price: Rs.{item.price}</h4>
              {inCart ? (
                <button className="remove-from-cart" onClick={() => removeCart(item)}>Remove From Cart</button>
              ) : (
                <button className="add-to-cart" onClick={() => addCart(item)}>Add to Cart</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
