import React from 'react';
import './style.css';

const ProductCart = props => {
  return (
    <section className='item'>
      <h3 className='item-title'>{props.title}</h3>
      <img className='item-img' alt='' src={props.img} />
      <button className='item-btn'>Adicionar ao carrinho!</button>
    </section>
  );
};

export default ProductCart;
