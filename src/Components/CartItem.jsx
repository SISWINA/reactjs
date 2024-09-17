import React from 'react';
import { Button } from 'react-bootstrap';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity >= 0) {
      onQuantityChange(item.id, newQuantity); // Call prop function with new quantity
    }
  };

  return (
    <div className="cart-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <img 
        src={item.image} 
        alt={item.ProductName} 
        style={{ width: '100px', height: 'auto', marginRight: '15px' }} 
      />
      
      <div className="cart-item-details" style={{ flex: 1 }}>
        <h4>{item.name}</h4> {/* Product name */}
        <p>Price: ₹{item.price}</p> {/* Price per item */}
        <p>
          Quantity: 
          <input 
            type="number" 
            value={item.quantity} 
            onChange={handleQuantityChange} 
            min="1" 
            style={{ marginLeft: '10px', width: '60px' }}
          />
        </p>
        <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p> {/* Total cost */}
        <Button variant="danger" onClick={() => onRemove(item.id)}>Remove</Button>
      </div>
    </div>
  );
};

export default CartItem;
