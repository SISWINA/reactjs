import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'; 
import { FaArrowUp } from 'react-icons/fa'; 
import Sidenav from '../Components/Sidenav';
import { productsData } from '../Data/Products1';
import { Link } from 'react-router-dom';

function Mystery() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to calculate the discounted price
  const calculateDiscountedPrice = (price) => {
    return (price - (price * 0.30)).toFixed(2); // 30% discount
  };

  return (
    <div className='maindata'>
      <Row>
        {/* Fixed Sidebar */}
        <Col sm={2} className='sidenav-fixed'>
          <Sidenav />
        </Col>
        {/* Main content - Products */}
        <Col sm={10} className='product-content' style={{ paddingLeft: '5%', paddingRight: '5%' }}>
          <h1 className='genre-header'>GENRE: MYSTERY - 30% OFF</h1>
          <div className='product-list'>
            {productsData.map((e, index) => (
              <div className='productdata' key={index}>
                <Link to={`/mystery/${index}`}>
                  <img src={e.image} alt={e.ProductName} />
                  <p>{e.ProductName}</p>
                  <p>
                    <span style={{ textDecoration: 'line-through', color: 'red' }}>₹{e.Price}</span>{' '}
                    <span style={{ color: 'green' }}>₹{calculateDiscountedPrice(e.Price)}</span>
                  </p>
                </Link>
              </div>
            ))}
          </div>

          {/* Back to Top Button */}
          <Button className="back-to-top" onClick={scrollToTop} variant="secondary" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
            <FaArrowUp size={20} />
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Mystery;
