import React from 'react';
import './style.css';

import { CartProduct } from '../CartProduct';

const CartList = props => {
  return (
    <ol>
      {props.list.map(el => {
        return (
          <CartProduct
            key={el.id + Math.round(Math.random() * 10000)}
            id={el.id}
            name={el.name}
            price={el.price}
            removeItem={props.removeItem}
          />
        );
      })}
    </ol>
  );
};

const CartTotal = props => {
  return <p className='cart-total'>Total: R$ {props.total}</p>;
};

const Cart = props => {
  return (
    <div className='cart'>
      <h4 className='cart-title'>Carrinho de compras</h4>
      <CartList list={props.list} removeItem={props.removeFunction} />
      <CartTotal total={props.total} />
      <button onClick={props.clearFunction} className='cart-btn'>
        Limpar Carrinho
      </button>
    </div>
  );
};

export default Cart;
