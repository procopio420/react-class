import React, { useState, useEffect } from 'react';
import './style.css';

import Header from './Header';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

import api from '../../services/api';

const Container = () => {
  const [cartList, setCartList] = useState(() => {
    const storagedCart = localStorage.getItem('ShoppingCart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const [total, setTotal] = useState(0);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    localStorage.setItem('ShoppingCart', JSON.stringify(cartList));
  }, [cartList]);

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

  function clearCart() {
    setCartList([]);
  }

  function removeFromCart(id) {
    const removedElement = cartList.find(el => el.id === id);
    const newList = cartList.filter(el => el !== removedElement);
    setCartList(newList);
  }

  return (
    <>
      <Header
        totalFromCart={total}
        cartList={cartList}
        setProductsList={setProductsList}
      />
      <section className='content'>
        <LeftSide
          addElementFunction={handleClick}
          productsList={productsList}
        />
        <RightSide
          cartList={cartList}
          totalFromCart={total}
          clearCartFunction={clearCart}
          removeElementFunction={removeFromCart}
        />
      </section>
    </>
  );
};

export default Container;
