// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.specialization}</p>
    </div>
  );
};

export default ProductCard;
