import React from 'react';

import './style.css'

function CartTotal(props) {
  return (
      <div className = 'cart-header'>
        <p>{`Itens: ${props.itemsTotal}`}</p>
        <p>{`Total: R$${props.priceTotal}`}</p>
      </div>
  );
}

export default CartTotal;
