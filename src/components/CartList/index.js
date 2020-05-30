import React, { useState, useEffect } from 'react';
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
          />
        );
      })}
    </ol>
  );
};

const CartTotal = props => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const t = props.list.reduce((acc, el) => Number(el.price) + acc, 0);
    setTotal(t)
  }, [props.list]);

  return <p className='cart-total'>Total: R$ {total}</p>;
};

const Cart = props => {
  return (
    <div className='cart'>
      <h4 className='cart-title'>Carrinho de compras</h4>
      <CartList list={props.list} />
      <CartTotal list={props.list} />
      <button className='cart-btn'>Limpar Carrinho</button>
    </div>
  );
};

export default Cart;
