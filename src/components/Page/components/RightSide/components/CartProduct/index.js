import React from 'react';

export const CartProduct = ({ id, name, price, removeItem }) => {
  return (
    <li className='list-group-item list-group-item-action category-item' onClick={() => removeItem(id)}>
      <p className='card-title'><strong>{name}</strong></p>
      <p className='card-subtitle'>{id}</p>
      <p className='card-text'>R$ {price.toFixed(2)}</p>
    </li>
  );
};
