import React from 'react';
import './style.css';

import { CartProduct } from '../CartProduct';

const List = props => {
  return (
    <ol className='list-group list-group-flush'>
      {!props.cartList.length && (
        <li className='list-group-item list-group-item-action text-center'>
          Seu carrinho está vazio :(
        </li>
      )}
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
    <div className='col-2'>
      <div className='card'>
        <div className='card-header'>
          <h4 className='cart-title text-center'>Carrinho de compras</h4>
        </div>
        <List
          cartList={props.cartList}
          removeElementFunction={props.removeElementFunction}
        />
        <div className='card-footer text-center'>
          <Total totalFromCart={props.totalFromCart} />
          <button onClick={props.clearCartFunction} className='btn btn-primary'>
            Limpar Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
