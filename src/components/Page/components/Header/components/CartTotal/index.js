import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import './style.css';

function CartDetails(props) {
  return (
    <div className='col'>
      <strong>{props.itemsTotal} itens</strong>
      <br/>R$ {props.priceTotal}
    </div>
  );
}

function CartContainer(props) {
  return (
    <div className='cart-header mr-5 row align-items-center'>
      <FaShoppingCart size={36} color={'#007bff'} />
      <CartDetails
        itemsTotal={props.itemsTotal}
        priceTotal={props.priceTotal}
      />
    </div>
  );
}

export default CartContainer;
