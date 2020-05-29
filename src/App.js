import React from 'react';
import './App.css'

import ProductList from './components/ProductList';
import CartList from './components/CartList';

function App() {
  return (
    <section className="content">
      <ProductList />
      <CartList />
    </section>
  );
}

export default App;
