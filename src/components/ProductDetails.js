// src/components/ProductDetails.js
import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product, onBack }) => {
  if (!product) return <div>Select a product to see the details</div>;

  return (
    <div className="product-details">
      <img  src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="price">{product.price}</p>
      <p className="description">{product.description}</p>
      <button onClick={onBack} className="back-button">Back</button>

    </div>
  );
};

export default ProductDetails;
