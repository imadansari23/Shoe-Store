import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Products from './Components/Products';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from './Components/SingleProduct';
import Cart from './Components/Cart';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
        <Route path="cart" element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
