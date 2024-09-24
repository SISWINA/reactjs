import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../Data/Products4'; // Make sure your product data has 'isDiscounted' property
import Sidenav from '../Components/Sidenav';
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SingleItem4 = () => {
  const { id } = useParams();
  const product = productsData[id];
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  const discount = 0.30; // 30% discount
  const discountedPrice = product.isDiscounted ? (product.price * (1 - discount)).toFixed(2) : product.price; // Apply discount conditionally

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const newItem = {
      id: product.id,
      name: product.ProductName,
      price: product.isDiscounted ? discountedPrice : product.price, // Use discounted price if applicable
      quantity: quantity > 0 ? quantity : 1,
    };

    const existingItemIndex = cartItems.findIndex((item) => item.id === newItem.id);
    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += newItem.quantity;
    } else {
      cartItems.push(newItem);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${newItem.name} added to cart!`);
  };

  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        style={{
          fontSize: '20px',
          color: index < rating ? '#ffc107' : '#e4e5e9',
        }}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="container-fluid">
      <Row>
        <Col sm={2} className="sidenav-fixed">
          <Sidenav />
        </Col>

        <Col sm={9} className="product-content d-flex justify-content-center">
          <Row className="mt-4" style={{ width: '100%' }}>
            <Col sm={5} style={{ marginLeft: '50px' }}>
              <div
                className={`product-image ${isZoomed ? 'zoom' : ''}`}
                onClick={handleZoom}
                style={{ border: '1px solid #ddd', padding: '10px', cursor: 'zoom-in' }}
              >
                <img
                  src={product.image}
                  alt={product.ProductName}
                  style={{ width: '90%', transition: 'transform 0.3s ease' }}
                />
              </div>
              <p style={{ fontSize: '12px', color: '#999' }}>
                Click to {isZoomed ? 'zoom out' : 'zoom in'}
              </p>
            </Col>

            <Col sm={6} style={{ paddingLeft: '80px' }}>
              <h2>{product.ProductName}</h2>

              <div style={{ marginTop: '10px' }}>
                {product.isDiscounted && (
                  <span style={{ fontSize: '24px', color: 'red', textDecoration: 'line-through', marginRight: '10px' }}>
                    ₹{product.price}
                  </span>
                )}
                <span style={{ fontSize: '28px', color: 'green' }}>
                  ₹{discountedPrice} {/* Display discounted price if applicable */}
                </span>
              </div>

              <p className="justified-text" style={{ marginTop: '10px', lineHeight: '1.6' }}>
                {product.description || 'No description available.'}
              </p>
              <p><strong>Author: {product.author}</strong></p>

              <div className="star-rating" style={{ marginBottom: '10px' }}>
                {renderStars(product.rating)}
                <p style={{ marginTop: '5px' }}>
                  Rating: {product.rating} / 5
                </p>
              </div>

              <div className="d-flex align-items-center mb-3">
                <Button variant="outline-secondary" className="quantity-btn mr-2" onClick={decreaseQuantity}>
                  -
                </Button>
                <span className="quantity">{quantity}</span>
                <Button variant="outline-secondary" className="quantity-btn ml-2" onClick={increaseQuantity}>
                  +
                </Button>
              </div>

              <Button variant="success" onClick={addToCart}>
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default SingleItem4;
