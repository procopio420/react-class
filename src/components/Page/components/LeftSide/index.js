import React from 'react';

import ProductList from './components/ProductList';
import CategoryList from './components/CategoryList';

const LeftSide = props => {
  return (
    <>
      <CategoryList
        setProductList={props.setProductList}
        setCategory={props.setCategory}
      />
      <ProductList
        category={props.category}
        addElementFunction={props.addElementFunction}
        productsList={props.productsList}
      />
    </>
  );
};

export default LeftSide;
