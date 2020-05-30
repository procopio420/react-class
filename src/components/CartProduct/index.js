import React from 'react';

export const CartProduct = ({ id, name, price }) => {
  return <li>SKU: {id} | NAME: {name} | PRICE: {price}</li>;
};
