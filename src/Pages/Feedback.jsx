import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, Image, Button } from 'react-bootstrap';
import Sidenav from '../Components/Sidenav'; 
import { FaArrowUp } from 'react-icons/fa'; 

function Feedback() {
  const [testimonials, setTestimonials] = useState([]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        const mappedData = data.map((item) => ({
          id: item.id,
          name: item.name,
          feedback: item.company.catchPhrase, 
          image: `https://randomuser.me/api/portraits/men/${item.id}.jpg`
        }));
        setTestimonials(mappedData);
      })
      .catch((error) => console.error('Error fetching testimonials:', error));
  }, []);

  return (
    <Container fluid className='page-content feedback-page'>
      <Row>
        <Col sm={2} className='sidenav-fixed'>
          <Sidenav /> {/* Render the sidebar component */}
        </Col>
        <Col sm={10} className='content'>
          <h1 className='page-header'>Customer Testimonials</h1>
          <ListGroup>
            {testimonials.map((testimonial) => (
              <ListGroup.Item key={testimonial.id} className='testimonial-item'>
                <Row>
                  <Col md={4}>
                    <Image src={testimonial.image} alt={testimonial.name} roundedCircle fluid />
                  </Col>
                  <Col md={8}>
                    <strong>{testimonial.name}</strong>: {testimonial.feedback}
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          {/* Back to Top Button */}
          <Button className="back-to-top" onClick={scrollToTop} variant="secondary">
            <FaArrowUp size={20} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Feedback;
