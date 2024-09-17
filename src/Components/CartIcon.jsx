import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CartIcon = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(itemCount); // Update the cart count dynamically
  }, []);

  return (
    <div className="cart-icon-wrapper">
      <Link to="/cart">
        <Button variant="primary" className="cart-btn">
          <FaShoppingCart size={24} />
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>} {/* Show count */}
        </Button>
      </Link>
    </div>
  );
};

export default CartIcon;
