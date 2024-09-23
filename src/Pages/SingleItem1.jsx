import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../Data/Products1';
import Sidenav from '../Components/Sidenav';
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SingleItem1 = () => {
  const { id } = useParams(); 
  const product = productsData[id]; 
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  
  if (!product) {
    return <h2>Product not found!</h2>; 
  }

  const increaseQuantity = () => setQuantity(quantity + 1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    const newItem = {
      id: product.id,  
      name: product.ProductName,
      price: product.price, 
      quantity: quantity > 0 ? quantity : 1,  
    };
  
    const existingItemIndex = cartItems.findIndex(item => item.id === newItem.id);
    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += newItem.quantity;
    } else {
      cartItems.push(newItem);
    }
  
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${newItem.name} added to cart!`);
  };

  // Toggle zoom
  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span 
        key={index} 
        style={{ 
          fontSize: '20px', 
          color: index < rating ? '#ffc107' : '#e4e5e9'
        }}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="container-fluid">
      <Row>
        {/* Fixed Sidebar */}
        <Col sm={2} className="sidenav-fixed">
          <Sidenav />
        </Col>

        {/* Main content - Product details */}
        <Col sm={9} className="product-content d-flex justify-content-center">
          <Row className="mt-4" style={{ width: '100%' }}>
            {/* Left Column - Product Image */}
            <Col sm={5} style={{ marginLeft: '50px' }}> {/* Added marginLeft to move image away from sidebar */}
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

            {/* Right Column - Product Info */}
            <Col sm={6}>
              <h2>{product.ProductName}</h2>
              <p style={{ fontSize: '28px', color: 'green', marginTop: '10px' }}>
                ₹{product.price}
              </p>
              <p className="justified-text" style={{ marginTop: '10px' }}>{product.description || 'No description available.'}</p>
              <p><strong>Author: {product.author}</strong></p>

              {/* Star Rating from Products Data */}
              <div className="star-rating" style={{ marginBottom: '10px' }}>
                {renderStars(product.rating)}
                <p style={{ marginTop: '5px' }}>Rating: {product.rating} Star{product.rating > 1 ? 's' : ''}</p>
              </div>

              {/* Quantity Controls and Add to Cart */}
              <div className="quantity-controls">
                <Button variant="outline-secondary" onClick={decreaseQuantity}>-</Button>
                <span style={{ padding: '0 10px', fontSize: '18px' }}>{quantity}</span>
                <Button variant="outline-secondary" onClick={increaseQuantity}>+</Button>
              </div>
              <Button 
                variant="success" 
                onClick={addToCart} 
                style={{ marginTop: '20px', display: 'block', width: '100%' }}
              >
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default SingleItem1;
