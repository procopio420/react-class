import React from 'react';

import ProductList from './components/ProductList';

const LeftSide = props => {
  return (
    <ProductList
      addElementFunction={props.addElementFunction}
      productsList={props.productsList}
    />
  );
};

export default LeftSide;
