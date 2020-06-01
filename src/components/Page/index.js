import React, { useState, useEffect } from 'react';
import './style.css';

import Header from './components/Header';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

import api from '../../services/api';

const Page = () => {
  const [cartList, setCartList] = useState(() => {
    const storagedCart = localStorage.getItem('ShoppingCart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const [total, setTotal] = useState(0);
  const [productsList, setProductsList] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    api
      .get(`/sites/MLB/search?category=MLB5672`)
      .then(res => setProductsList(res.data.results));
  }, []);

  useEffect(() => {
    if (category !== '') {
      setProductsList([]);
      api
        .get(`/sites/MLB/search?category=${category}`)
        .then(res => setProductsList(res.data.results));
    }
  }, [category]);

  useEffect(() => {
    localStorage.setItem('ShoppingCart', JSON.stringify(cartList));
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

  function clearCart() {
    setCartList([]);
  }

  function removeFromCart(id) {
    const removedElement = cartList.find(el => el.id === id);
    const newList = cartList.filter(el => el !== removedElement);
    setCartList(newList);
  }

  return (
    <div className='container-fluid'>
      <Header
        totalFromCart={total}
        cartList={cartList}
        setProductsList={setProductsList}
      />
      <section className='content'>
        <LeftSide
          addElementFunction={handleClick}
          productsList={productsList}
          setProductsList={setProductsList}
          category={category}
          setCategory={setCategory}
        />
        <RightSide
          cartList={cartList}
          totalFromCart={total}
          clearCartFunction={clearCart}
          removeElementFunction={removeFromCart}
        />
      </section>
    </div>
  );
};

export default Page;
