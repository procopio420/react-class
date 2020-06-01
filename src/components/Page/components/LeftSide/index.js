import React from 'react';

import CategoryList from './components/CategoryList';

const LeftSide = props => {
  return (
    <CategoryList
      setProductList={props.setProductList}
      setCategory={props.setCategory}
    />
  );
};

export default LeftSide;
