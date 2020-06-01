import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import LeftSide from './components/LeftSide';
import Body from './components/Body';
import RightSide from './components/RightSide';
import Footer from './components/Footer'

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
    setTotal(t.toFixed(2));
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
    <div>
      <Header
        totalFromCart={total}
        cartList={cartList}
        setProductsList={setProductsList}
      />
      <div className='row justify-content-center'>
        <LeftSide
          setProductsList={setProductsList}
          category={category}
          setCategory={setCategory}
        />
        <Body
          addElementFunction={handleClick}
          productsList={productsList}
          setProductsList={setProductsList}
        />
        <RightSide
          cartList={cartList}
          totalFromCart={total}
          clearCartFunction={clearCart}
          removeElementFunction={removeFromCart}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default Page;
