import React, { useState, useEffect } from 'react';

import './App.css';
import api from './services/api';

import ProductList from './components/ProductList';
import CartList from './components/CartList';
import Header from './components/Header';

function App() {
  const [cartList, setCartList] = useState(() => {
    const storagedCart = localStorage.getItem('ShoppingCart');
    if (storagedCart) return JSON.parse(storagedCart);
    return [];
  });
  const [total, setTotal] = useState(0);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const t = cartList.reduce((acc, el) => Number(el.price) + acc, 0);
    setTotal(t);
  }, [cartList]);

  async function handleClick(element) {
    const item = await api.get(`/items/${element.target.id}`);
    const el = {
      id: item.data.id,
      name: item.data.title,
      price: item.data.price,
    };
    setCartList([...cartList, el]);
  }

  useEffect(() => {
    localStorage.setItem('ShoppingCart', JSON.stringify(cartList));
  }, [cartList]);

  function clearCart() {
    setCartList([]);
  }

  function removeFromCart(id) {
    const newList = cartList.filter(el => el.id !== id);
    setCartList(newList);
  }

  return (
    <div className="app-wrapper">
      <section>
        <Header total={total} list={cartList} setProductsList={setProductsList}/>
      </section>
      <section className="content">
        <ProductList function={handleClick} list={productsList} />
        <CartList
          list={cartList}
          total={total}
          clearFunction={clearCart}
          removeFunction={removeFromCart}
        />
      </section>
    </div>
  );
}

export default App;
