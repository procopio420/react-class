import React from 'react';

function CartTotal(props) {
  return (
      <div className = 'cart-header'>
        <p>{`Items Total: ${props.itemsTotal}`}</p>
        <p>{`Price Total: R$${props.priceTotal}`}</p>
      </div>
  );
}

export default CartTotal;
