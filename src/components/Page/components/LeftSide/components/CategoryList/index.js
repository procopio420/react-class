import React, { useState, useEffect } from 'react';

import './style.css';
import api from '../../../../../../services/api';

const CategoryItem = props => {
  function categorySet(e) {
    props.setCategory(e.target.id);
  }

  return (
    <li className='category-item' id={props.category.id} onClick={categorySet}>
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
    <div>
      <h2>Categorias</h2>
      <br />
      <ul>
        {categoryList.map(cat => (
          <CategoryItem
            setCategory={props.setCategory}
            key={cat.id}
            category={cat}
          />
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
