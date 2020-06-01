import React from 'react';
import './style.css';

import { CartProduct } from '../CartProduct';

const List = props => {
  return (
    <ol>
      {props.cartList.map(el => {
        return (
          <CartProduct
            key={el.id + Math.round(Math.random() * 10000)}
            id={el.id}
            name={el.name}
            price={el.price}
            removeItem={props.removeElementFunction}
          />
        );
      })}
    </ol>
  );
};

const Total = props => {
  return <p className='cart-total'>Total: R$ {props.totalFromCart}</p>;
};

const CartList = props => {
  return (
    <div className='cart'>
      <h4 className='cart-title'>Carrinho de compras</h4>
      <List cartList={props.cartList} removeElementFunction={props.removeElementFunction} />
      <br/>
      <Total totalFromCart={props.totalFromCart} />
      <button onClick={props.clearCartFunction} className='cart-btn'>
        Limpar Carrinho
      </button>
    </div>
  );
};

export default CartList;
