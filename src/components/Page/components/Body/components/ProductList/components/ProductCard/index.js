import React from 'react';
import './style.css';

const ProductCart = props => {
  return (
    <section className='card w-20 mb-2 mr-2'>
      <img className='card-img-top item-img' alt='' src={props.img} />
      <div class='card-header h-50 text-center'>{props.title}</div>
      <div className='card-body'>
        <p className='card-subtitle text-center'>R$ {props.price.toFixed(2)}</p>
      </div>
      <div className='card-footer text-center'>
        <button
          onClick={props.addElementFunction}
          className='btn btn-primary btn-custom'
          id={props.id}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </section>
  );
};

export default ProductCart;
