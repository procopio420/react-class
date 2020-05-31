import React from 'react';

import CartList from './components/CartList';

const RightSide = props => {
  return (
    <CartList
      cartList={props.cartList}
      totalFromCart={props.totalFromCart}
      clearCartFunction={props.clearCartFunction}
      removeElementFunction={props.removeElementFunction}
    />
  );
};

export default RightSide;
