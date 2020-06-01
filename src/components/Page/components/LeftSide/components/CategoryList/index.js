import React, { useState, useEffect } from 'react';

import './style.css';
import api from '../../../../../../services/api';

const CategoryItem = props => {
  function categorySet(e) {
    props.setCategory(e.target.id);
  }

  return (
    <li
      className='category-item list-group-item list-group-item-action'
      id={props.category.id}
      onClick={categorySet}
    >
      {props.category.name}
    </li>
  );
};

const CategoryList = props => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    api.get('/sites/MLB').then(res => setCategoryList(res.data.categories));
  }, []);

  return (
    <div className='col-2'>
      <div className='card'>
        <div className='card-header'>
          <h2 className='text-center my-3'>Categorias</h2>
        </div>
        <ul className='list-group list-group-flush'>
          {categoryList.map(cat => (
            <CategoryItem
              setCategory={props.setCategory}
              key={cat.id}
              category={cat}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
