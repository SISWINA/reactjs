import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'; 
import { FaArrowUp } from 'react-icons/fa'; 
import Sidenav from '../Components/Sidenav';
import { productsData } from '../Data/Products';
import { Link } from 'react-router-dom';

function Self() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <h1 className='genre-header'>GENRE: SELF HELP</h1>
          <div className='product-list'>
            {productsData.map((e, index) => (
              <div className='productdata' key={index}>
                <Link to={`/self/${index}`}>
                  <img src={e.image} alt={e.ProductName} />
                  <p>{e.ProductName}</p>
                  <p>₹{e.Price}</p>
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

export default Self;
