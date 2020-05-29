import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import api from '../../services/api';

import './style.css';

const ProductList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    api
      .get('/sites/MLB/search?q=computador')
      .then(res => setList(res.data.results))
  });

  return (
    <div className='products'>
      {list.map(product => (
        <ProductCard
          key={product.id}
          title={product.title}
          img={product.thumbnail}
        />
      ))}
    </div>
  );
};

export default ProductList;
