import React from 'react';
import ReactLoading from 'react-loading';

import ProductCard from './components/ProductCard';

import './style.css';

const ProductList = props => {
  return (
    <>
      <div className='products'>
        {!props.productsList.length > 0 && (
          <ReactLoading
            type={'spin'}
            color={'green'}
            height={'50%'}
            width={'50%'}
          />
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
    </>
  );
};

export default ProductList;
