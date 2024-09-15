import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../Data/Products2';
import Sidenav from '../Components/Sidenav';
import { Row, Col, Button } from 'react-bootstrap'; 

function SingleItem2() {
  const { id } = useParams(); 
  const product = productsData[id]; 
  const [quantity, setQuantity] = useState(0); 

  // If the product ID does not exist
  if (!product) {
    return <h2>Product not found!</h2>; 
  }

  // Function to calculate the discounted price (20% off for this example)
  const calculateDiscountedPrice = (price) => {
    return (price - (price * 0.20)).toFixed(2); // 20% discount
  };

  // Increase quantity of the product
  const increaseQuantity = () => setQuantity(quantity + 1);

  // Decrease quantity of the product, with a minimum of 0
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  // Function to handle adding the product to the cart
  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const newItem = {
      id: product.id,
      name: product.ProductName,
      price: calculateDiscountedPrice(product.Price),
      quantity: quantity > 0 ? quantity : 1,  // Ensure at least 1 item is added
    };

    // Check if the item already exists in the cart
    const existingItemIndex = cartItems.findIndex(item => item.id === newItem.id);
    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += newItem.quantity;  // Update quantity if item exists
    } else {
      cartItems.push(newItem);  // Add new item
    }

    // Save updated cart to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
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
              <p>
                Price: 
                <span style={{ textDecoration: 'line-through', color: 'red' }}> ₹{product.Price}</span>{' '}
                <span style={{ color: 'green' }}> ₹{calculateDiscountedPrice(product.Price)}</span>
              </p>

              {/* Add to Cart Button */}
              <Button variant="success" onClick={addToCart} style={{ marginTop: '20px' }}>
                Add to Cart
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SingleItem2;