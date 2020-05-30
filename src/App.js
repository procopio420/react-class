import React, { useState } from 'react';
import './App.css';
import api from './services/api'

import ProductList from './components/ProductList';
import CartList from './components/CartList';

function App() {
  const [list, setList] = useState([]);
  async function handleClick(element) {
    const item = await api.get(`/items/${element.target.id}`)
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
  return (
    <section className='content'>
      <ProductList function={handleClick} />
      <CartList list={list} clearFunction={clearCart} />
    </section>
  );
}

export default App;
