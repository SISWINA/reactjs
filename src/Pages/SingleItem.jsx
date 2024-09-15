import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../Data/Products';
import Sidenav from '../Components/Sidenav';
import { Row, Col, Button } from 'react-bootstrap'; 

function SingleItem() {
  const { id } = useParams(); 
  const product = productsData[id]; 
  const [quantity, setQuantity] = useState(0); 

  if (!product) {
    return <h2>Product not found!</h2>; 
  }

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const newItem = {
      id: product.id,
      name: product.ProductName,
      price: product.Price,
      quantity: quantity > 0 ? quantity : 1,  // Ensure at least 1 item is added
    };

    // Check if the item already exists in the cart
    const existingItemIndex = cartItems.findIndex(item => item.id === newItem.id);
    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += newItem.quantity;  // Update quantity if item exists
    } else {
      cartItems.push(newItem);  // Add new item
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Save updated cart
    alert(`${newItem.name} added to cart!`);
  };

  return (
    <div className="container-fluid">
      <Row>
        {/* Fixed Sidebar */}
        <Col sm={2} className="sidenav-fixed">
          <Sidenav />
        </Col>

        {/* Main content - Product details */}
        <Col sm={10} className="product-content">
          <div className="single-product">
            <div className="product-image">
              <img src={product.image} alt={product.ProductName} />
            </div>
            <div className="product-details">
              <h2>{product.ProductName}</h2>
              <p>Price: ₹{product.Price}</p>
              <Button variant="success" onClick={addToCart}>Add to Cart</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SingleItem;