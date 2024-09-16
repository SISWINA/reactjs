import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CartIcon = () => {
  return (
    <div className="cart-icon-wrapper">
      <Link to="/cart">
        <Button variant="primary" className="cart-btn">
          <FaShoppingCart size={24} />
          {/* Optionally display the cart item count here */}
        </Button>
      </Link>
    </div>
  );
};

export default CartIcon;
