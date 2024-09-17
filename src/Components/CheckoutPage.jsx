import React, { useState, useEffect } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = () => {
      const items = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCartItems(items); 
    };
    fetchCartItems();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert('Order placed successfully!');
      localStorage.removeItem('cartItems'); 
      navigate('/dashboard'); 
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      <Row>
        <Col md={8}>
          <h3>Shipping Details</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control 
                type="text" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control 
                type="text" 
                name="city" 
                value={formData.city} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formPostalCode">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control 
                type="text" 
                name="postalCode" 
                value={formData.postalCode} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Button 
              variant="primary" 
              type="submit" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Place Order'}
            </Button>
          </Form>
        </Col>
        <Col md={4}>
          <h3>Order Summary</h3>
          <div className="order-summary">
            {cartItems.length > 0 ? (
              cartItems.map(item => (
                <div key={item.id} className="order-item">
                  <p>{item.name}</p>
                  <p>₹{item.price} x {item.quantity}</p>
                  <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
            <hr />
            <h4>
              Total Amount: ₹{cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
            </h4>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutPage;
