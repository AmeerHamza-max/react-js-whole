import React from 'react';
import './ProductTile.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store/Slices/Cart-Slics';

const ProductTile = ({ product = {} }) => {  // Default value for product
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-tile">
      <div className="product-image">
        <img
          src={product?.image || 'fallback-image-url.jpg'}
          alt={product?.title || 'No Title'}
          className="image"
        />
      </div>
      <div>
        <h2 className="product-title">{product?.title || 'Untitled Product'}</h2>  {/* Changed to h2 */}
        {product?.price && <p className="product-price">₹{product.price}</p>}
      </div>
      <div className="product-action">
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductTile;
