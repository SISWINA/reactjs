import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../Data/Products3';
import Sidenav from '../Components/Sidenav';
import { Row, Col, Button } from 'react-bootstrap';

const SingleItem3 = () => {
  const { id } = useParams(); 
  const product = productsData[id]; 
  const [quantity, setQuantity] = useState(1); 

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

  const getDiscountedPrice = (price) => {
    return (price * 0.7).toFixed(2); 
  };

  return (
    <div className="container-fluid">
      <Row>
        {/* Fixed Sidebar */}
        <Col sm={2} className="sidenav-fixed">
          <Sidenav />
        </Col>

        {/* Main content - Product details */}
        <Col sm={10} className="product-content">
          <div className="single-product">
            <div className="product-image">
              <img src={product.image} alt={product.ProductName} />
            </div>
            <div className="product-details">
              <h2>{product.ProductName}</h2>
              <p>
                <span style={{ textDecoration: 'line-through', color: 'red', marginRight: '10px' }}>
                  ₹{product.price}
                </span>
                <span style={{ color: 'green' }}>
                  ₹{getDiscountedPrice(Number(product.price))}
                </span>
              </p>
              <div className="quantity-controls">
                <Button variant="outline-secondary" onClick={decreaseQuantity}>-</Button>
                <span>{quantity}</span>
                <Button variant="outline-secondary" onClick={increaseQuantity}>+</Button>
              </div>
              <Button variant="success" onClick={addToCart} style={{ marginTop: '20px' }}>
                Add to Cart
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SingleItem3;
