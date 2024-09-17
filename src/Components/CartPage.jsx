import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import CartItem from './CartItem';

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

  const handleCheckout = () => {
    alert("Checkout functionality not implemented yet.");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <CartItem 
              key={item.id} 
              item={item} 
              onRemove={handleRemove} 
              onQuantityChange={handleQuantityChange} 
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      {cartItems.length > 0 && (
        <div>
          <Button variant="success">
            <Link to="/checkout" style={{ color: 'white', textDecoration: 'none' }}>
              Checkout
            </Link>
          </Button>
          {/* Back to Top Button */}
          <Button className="back-to-top" onClick={scrollToTop} variant="secondary" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
            <FaArrowUp size={20} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
