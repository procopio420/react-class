import React, { useState, useEffect } from 'react';
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
