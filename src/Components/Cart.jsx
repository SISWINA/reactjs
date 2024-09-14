import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'; // Imported Container, Row, and Col for layout
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Sidenav from '../Components/Sidenav'; // Assuming Sidenav is in the Components folder

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load items from localStorage when the component mounts
  const loadCartItems = () => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedItems);
  };

  useEffect(() => {
    loadCartItems();
  }, []);

  // Function to clear the cart
  const clearCart = () => {
    localStorage.removeItem('cartItems'); // Clear from localStorage
    setCartItems([]); // Clear state
  };

  return (
    <Container fluid className="page-content feedback-page">
      <Row>
        {/* Sidebar */}
        <Col sm={2} className="sidenav-fixed">
          <Sidenav /> {/* Render the sidebar component */}
        </Col>

        {/* Main Content */}
        <Col sm={10} className="content">
          <div className="cart-container">
            <h1>Your Shopping Cart</h1>
            <Link to="/cart">
              <Button className="cart-btn" variant="primary">
                <FaShoppingCart size={24} /> Your Cart
              </Button>
            </Link>
            <div className="cart-items" style={{ marginTop: '20px' }}>
              {cartItems.length > 0 ? (
                <div>
                  <ul>
                    {cartItems.map((item, index) => (
                      <li key={index}>
                        {item.name} - ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
                      </li>
                    ))}
                  </ul>
                  <Button variant="danger" onClick={clearCart} style={{ marginTop: '20px' }}>
                    Clear Cart
                  </Button>
                </div>
              ) : (
                <p>Your cart is empty</p>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
