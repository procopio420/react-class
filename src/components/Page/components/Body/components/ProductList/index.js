import React from 'react';
import ReactLoading from 'react-loading';

import ProductCard from './components/ProductCard';

import './style.css';

const ProductList = props => {
  return (
    <div className='products col-8'>
      {!props.productsList.length > 0 && (
        <div>
          <ReactLoading
            type={'spin'}
            color={'#007bff'}
            height={'20%'}
            width={'100%'}
          />
          <h1 className='text-primary'>Carregando...</h1>
        </div>
      )}
      {props.productsList.map(product => (
        <ProductCard
          id={product.id}
          key={product.id}
          title={product.title}
          price={product.price}
          img={product.thumbnail}
          addElementFunction={props.addElementFunction}
        />
      ))}
    </div>
  );
};

export default ProductList;
