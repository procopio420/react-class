import React from 'react';
import './style.css';

const CartList = () => {
  return <ol></ol>;
};

const Cart = () => {
  return (
    <div className='cart'>
      <h4 className='cart-title'>Carrinho de compras</h4>
      <CartList />
      <p className='cart-total'>Total: </p>
      <button className='cart-btn'>Limpar Carrinho</button>
    </div>
  );
};

export default Cart;
