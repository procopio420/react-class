import React, { useState } from 'react';
import './App.css';

import ProductList from './components/ProductList';
import CartList from './components/CartList';

function App() {
  const [list, setList] = useState([]);
  function handleClick(element) {
    const el = {
      id: element.target.dataset.id,
      name: element.target.dataset.title,
      price: element.target.dataset.price,
    };
    setList([...list, el]);
  }
  return (
    <section className='content'>
      <ProductList function={handleClick} />
      <CartList list={list} />
    </section>
  );
}

export default App;
