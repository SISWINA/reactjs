import React from 'react';
import Sidenav from './Sidenav';
import { Col, Row, Carousel, Button } from 'react-bootstrap';
import {FaArrowUp } from 'react-icons/fa'; 
import { productsData } from '../Data/Products';
import { productsData as productsData1 } from '../Data/Products1'; 
import { productsData as productsData2 } from '../Data/Products2'; 
import { productsData as productsData3 } from '../Data/Products3'; 
import { Link } from 'react-router-dom';
import slide1 from '../Assets/slide1.jpg';
import slide2 from '../Assets/slide2.jpg';
import slide3 from '../Assets/slide3.jpeg';

function Dashboard() {
  const NewData = productsData.slice(0, 3);
  const NewData1 = productsData1.slice(0, 3);
  const NewData2 = productsData2.slice(0, 3); 
  const NewData3 = productsData3.slice(0, 3); 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10} style={{ padding: '5%' }}>

          {/* Carousel Section */}
          <Carousel className="custom-carousel">
            <Carousel.Item>
              <img className="d-block w-100" src={slide2} alt="First slide" />
              <Carousel.Caption className="carousel-caption" style={{ textAlign: 'center', color: '#fff' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>30% OFF on Fictional & Mystery Genres</h3>
               <p style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
               Explore our collection of best reads with exciting discounts!
               </p>
             {/* Fictional and Mystery Links */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', paddingTop: '10px' }}>
               <Link to="/fictional">
                <Button variant="success" style={{ fontSize: '1.2rem', padding: '10px '}}>Fictional Books</Button>
                 </Link>
               <Link to="/mystery">
                 <Button variant="warning" style={{ fontSize: '1.2rem', padding: '10px ' }}>Mystery Books</Button>
               </Link>
              </div>
            </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slide1} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slide3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>

          {/* Header for Products */}
          <h2 className="products-header">OUR PRODUCTS</h2>

          <div className="dash maindata">
            {/* Products Section 1 */}
            <div className="products-section">
              <div className="products-container">
                {NewData.map((e) => (
                  <div className='productdata' key={e.id}>
                    <img src={e.image} alt={e.name} />
                    <p>{e.id}</p>
                    <p>{e.name}</p>
                    <p>{e.Price}</p>
                  </div>
                ))}
              </div>
              <div className="view-more-container">
                <Link to='/Self'>
                  <p>View More</p>
                </Link>
              </div>
            </div>

            {/* Products Section 2 */}
            <div className="products-section">
              <div className="products-container">
                {NewData1.map((e) => (
                  <div className='productdata' key={e.id}>
                    <img src={e.image} alt={e.name} />
                    <p>{e.id}</p>
                    <p>{e.name}</p>
                    <p>{e.Price}</p>
                  </div>
                ))}
              </div>
              <div className="view-more-container">
                <Link to='/Mystery'>
                  <p>View More</p>
                </Link>
              </div>
            </div>

            {/* Products Section 3 */}
            <div className="products-section">
              <div className="products-container">
                {NewData2.map((e) => (
                  <div className='productdata' key={e.id}>
                    <img src={e.image} alt={e.name} />
                    <p>{e.id}</p>
                    <p>{e.name}</p>
                    <p>{e.Price}</p>
                  </div>
                ))}
              </div>
              <div className="view-more-container">
                <Link to='/autobio'>
                  <p>View More</p>
                </Link>
              </div>
            </div>

            {/* Products Section 4 */}
            <div className="products-section">
              <div className="products-container">
                {NewData3.map((e) => (
                  <div className='productdata' key={e.id}>
                    <img src={e.image} alt={e.name} />
                    <p>{e.id}</p>
                    <p>{e.name}</p>
                    <p>{e.Price}</p>
                  </div>
                ))}
              </div>
              <div className="view-more-container">
                <Link to='/fictional'>
                  <p>View More</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Back to Top Button */}
          <Button className="back-to-top" onClick={scrollToTop} variant="secondary">
            <FaArrowUp size={20} />
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
