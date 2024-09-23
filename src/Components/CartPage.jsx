import React, { useEffect, useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { FaArrowUp, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = () => {
      const items = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCartItems(items); 
    };
    fetchCartItems();
  }, []);

  const handleRemove = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems); 
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); 
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedCartItems = cartItems.map(item => 
      item.id === id ? { ...item, quantity: quantity } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); 
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mt-4" style={{ paddingLeft: '15px' }}>
      <Row>
        {/* Cart Items Section */}
        <Col md={8}>
          <h2 className="mb-4">Shopping Cart</h2>
          <div className="cart-items">
            {cartItems.length > 0 ? (
              cartItems.map(item => (
                <div key={item.id} className="cart-item mb-4 p-3 border-bottom">
                  <Row className="align-items-center">
                    {/* Product Number */}
                    <Col xs={1} className="product-number">
                      <span>{cartItems.indexOf(item) + 1}</span>
                    </Col>

                    {/* Product Details */}
                    <Col xs={8}>
                      <h5 className="product-name">{item.name}</h5>
                      <p className="text-muted">Price: ₹{item.price}</p>
                      <div className="quantity-controls d-flex">
                        <Button
                          variant="outline-secondary"
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </Button>
                        <span className="quantity">{item.quantity}</span>
                        <Button
                          variant="outline-secondary"
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </Col>

                    {/* Remove Button */}
                    <Col xs={3} className="text-md-right">
                      <Button variant="danger" className="remove-btn" onClick={() => handleRemove(item.id)}>
                        <FaTrashAlt /> Remove
                      </Button>
                    </Col>
                  </Row>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        </Col>

        {/* Checkout Summary Section */}
        <Col md={4}>
          {cartItems.length > 0 && (
            <div className="cart-summary p-4 bg-light rounded">
              <h5>Order Summary</h5>
              <p className="text-muted">Subtotal ({cartItems.length} items): ₹{calculateSubtotal()}</p>
              <Button as={Link} to="/checkout" variant="success" className="btn-block">
                Proceed to Checkout
              </Button>
            </div>
          )}
        </Col>
      </Row>

      {/* Back to Top Button */}
      {cartItems.length > 0 && (
        <Button className="back-to-top" onClick={scrollToTop} variant="secondary" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
          <FaArrowUp size={20} />
        </Button>
      )}
    </div>
  );
};

export default CartPage;
