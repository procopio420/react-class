import React from 'react';
import './App.css';

import ProductList from './components/ProductList';
import CartList from './components/CartList';
import Header from './components/Header';

function App() {
  return (
    <div className="app-wrapper">
      <section>
        <Header />
      </section>
      <section className="content">
        <ProductList />
        <CartList />
      </section>
    </div>
  );
}

export default App;
