import React, { useState, useEffect } from 'react';
import { Button, Form, Col, Row, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const deliveryFee = 40; 
  const totalAmount = calculateTotal() + deliveryFee;

  const expectedDeliveryDate = new Date();
  expectedDeliveryDate.setDate(expectedDeliveryDate.getDate() + 5); 

  return (
    <div className="container mt-4">
      <Row>
        <Col sm={2}>
          {/* Side Navigation Content Here */}
        </Col>
        <Col sm={8} className="ml-auto offset-sm-1"> {/* Added offset here */}
          <h2 className="text-right">Checkout</h2>
          <h3 className="text-right">Shipping Details</h3>
          <Form onSubmit={handleSubmit} className="mb-4">
            <Row>
              <Col sm={6}>
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
              </Col>
              <Col sm={6}>
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
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
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
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
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
              </Col>
              <Col sm={6}>
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
              </Col>
            </Row>
            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting}
              className="float-right"
            >
              {isSubmitting ? 'Processing...' : 'Place Order'}
            </Button>
          </Form>
          <h3 className="text-right">Order Summary</h3>
          <Card className="order-summary p-3">
            {cartItems.length > 0 ? (
              <Row className="mb-3">
                {cartItems.map(item => (
                  <Col key={item.id} md={6} className="order-item mb-2">
                    <div className="d-flex justify-content-between">
                      <p>{item.name} <span className="float-right">₹{item.price} x {item.quantity}</span></p>
                      <p className="text-muted">Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            ) : (
              <p>Your cart is empty.</p>
            )}
            <hr />
            <p><strong>Delivery Fee:</strong> ₹{deliveryFee}</p>
            <p><strong>Expected Delivery:</strong> {expectedDeliveryDate.toDateString()}</p>
            <h4 className="text-right">
              <strong>Total Amount:</strong> ₹{totalAmount.toFixed(2)}
            </h4>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutPage;
