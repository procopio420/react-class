import React from 'react';

import ProductList from './components/ProductList';

const Body = props => {
  return (
    <ProductList
      category={props.category}
      addElementFunction={props.addElementFunction}
      productsList={props.productsList}
    />
  );
};

export default Body;
