import React, { useState } from 'react';
import './App.css';
import api from './services/api';

import ProductList from './components/ProductList';
import CartList from './components/CartList';

function App() {
  const [list, setList] = useState([]);

  async function handleClick(element) {
    const item = await api.get(`/items/${element.target.id}`);
    const el = {
      id: item.data.id,
      name: item.data.title,
      price: item.data.price,
    };
    setList([...list, el]);
  }

  function clearCart() {
    setList([]);
  }

  function removeFromCart(id) {
    const newList = list.filter(el => el.id !== id);
    setList(newList);
  }

  return (
    <section className='content'>
      <ProductList function={handleClick} />
      <CartList
        list={list}
        clearFunction={clearCart}
        removeFunction={removeFromCart}
      />
    </section>
  );
}

export default App;
