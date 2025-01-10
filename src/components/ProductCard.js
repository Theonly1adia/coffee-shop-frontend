import React from "react";
import PropTypes from 'prop-types';
import Button from '@/components/Button';

export default function ProductCard({ product }) {
  return (
    <div className="card glass w-96">
      <figure>
        <img
        src={product.imageUrl}
        alt={product.name}/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>${product.description}</p>
        <p>${product.price}</p>
        <div className="card-actions justify-end">
          <Button
            label="Add to Cart"
            handleClick={() => onAddToCart(product)}/>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};