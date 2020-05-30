import React from 'react';

export const CartProduct = ({ id, name, price, removeItem }) => {
  return (
    <li onClick={() => removeItem(id)}>
      SKU: {id} | NAME: {name} | PRICE: {price}
    </li>
  );
};
