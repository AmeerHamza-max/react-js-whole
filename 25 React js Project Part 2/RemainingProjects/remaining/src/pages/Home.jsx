import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import './Home.css';
import ProductTile from '../components/Product-Tile/ProductTile';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchListOfProducts() {
    try {
      setLoading(true);
      setError(null); // Clear previous errors
      const res = await fetch('https://fakestoreapi.com/products');
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      setProducts(data || []);
    } catch (e) {
      setError('Failed to load products. Please try again.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <Circles
            height={120}
            width={120}
            color="rgb(212, 27, 29)"
            visible={true}
          />
          <p>Loading products...</p> {/* Added loading text */}
        </div>
      ) : error ? (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={fetchListOfProducts}>Retry</button>
        </div>
      ) : products.length ? (
        <div className="products-grid">
          {products.map((productItem) => (
            <ProductTile key={productItem.id} product={productItem} />
          ))}
        </div>
      ) : (
        <p>No products available at the moment.</p> 
      )}
    </div>
  );
};

export default Home;
