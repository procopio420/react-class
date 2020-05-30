import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

import ProductCard from '../ProductCard';
import api from '../../services/api';

import './style.css';

const ProductList = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    api
      .get('/sites/MLB/search?q=computador')
      .then(res => setList(res.data.results));
  }, []);

  return (
    <div className='products'>
      {!list.length > 0 && (
        <ReactLoading
          type={'spin'}
          color={'green'}
          height={'50%'}
          width={'50%'}
        />
      )}
      {list.map(product => (
        <ProductCard
          id={product.id}
          key={product.id}
          title={product.title}
          price={product.price}
          img={product.thumbnail}
          function={props.function}
        />
      ))}
    </div>
  );
};

export default ProductList;
