import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Sidenav from '../Components/Sidenav';
import dream from '../Assets/dream.png';

function AboutUs() {
  return (
    <Container fluid className="maindata">
      <Row>
        <Col sm={2} className="sidenav-fixed">
          <Sidenav />
        </Col>
        <Col sm={10} className="content"> 
          <div className="about-content">
            <img src={dream} alt="About Us" className="about-image" />
            <div className="about-text">
              <h1 className="page-header">About Us</h1>
              <p className="page-text">
                Welcome to Dreamscape Reads! At Dreamscape Reads, we’re dedicated to bringing you a curated selection of books from the comfort of your home. Founded in 2024, our online store offers everything from bestsellers to hidden gems, catering to all reading tastes.
                Our mission is to make discovering your next great read easy and enjoyable. Thank you for choosing Dreamscape Reads. Happy reading!
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
