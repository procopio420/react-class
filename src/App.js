import React, { useState, useEffect } from 'react';
import './App.css';
import api from './services/api';

import ProductList from './components/ProductList';
import CartList from './components/CartList';

function App() {
  const [list, setList] = useState(() => {
    const storagedCart = localStorage.getItem('ShoppingCart');
    if (storagedCart) return JSON.parse(storagedCart);
    return [];
  });

  async function handleClick(element) {
    const item = await api.get(`/items/${element.target.id}`);
    const el = {
      id: item.data.id,
      name: item.data.title,
      price: item.data.price,
    };
    setList([...list, el]);
  }

  useEffect(() => {
    localStorage.setItem('ShoppingCart', JSON.stringify(list));
  }, [list]);

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
