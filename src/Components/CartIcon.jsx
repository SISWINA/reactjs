import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CartIcon = () => {
  return (
    <Link to="/cart">
      <Button variant="primary" className="cart-btn">
        <FaShoppingCart size={24} />
      </Button>
    </Link>
  );
};

export default CartIcon;
