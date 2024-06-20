// src/App.js
import React, { useState } from 'react';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import products from './data';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      <Navbar />
      {selectedProduct ? (
        <ProductDetails product={selectedProduct} onBack={handleBack} />
      ) : (
        <ProductList products={products} onProductClick={handleProductClick} />
      )}
    </div>
  );
}

export default App;
