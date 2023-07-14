import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import React, { useState } from 'react';
import ProductContext from './context';
import Terms from './pages/Policy/Terms&Conditions';

function App() {

  const [value, setValue] = useState('Audio');

  return (
    <ProductContext.Provider value={{ value, setValue }}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Product />} />
          <Route path='/terms&Condition' element={<Terms/>} />
        </Routes>
      </Router>
    </ProductContext.Provider>
  );
}

export default App;
