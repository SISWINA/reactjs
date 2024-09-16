import React from 'react';
import { Button } from 'react-bootstrap';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity >= 0) {
      onQuantityChange(item.id, newQuantity);
    }
  };

  return (
    <div className="cart-item">
      {/* Display product image */}
      <img src={item.image} alt={item.ProductName} style={{ width: '100px', height: 'auto' }} />
      
      {/* Display product details */}
      <div className="cart-item-details">
        <p>{item.ProductName}</p>
        <p>Price: ₹{item.price}</p>
        <p>
          Quantity: 
          <input 
            type="number" 
            value={item.quantity} 
            onChange={handleQuantityChange}
            min="0"
          />
        </p>
        <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
        <Button variant="danger" onClick={() => onRemove(item.id)}>Remove</Button>
      </div>
    </div>
  );
};

export default CartItem;
