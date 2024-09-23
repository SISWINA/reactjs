import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap'; 
import Sidenav from './Sidenav';

function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: 'general',
    rating: 5,
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormSubmitted(true);
  };

  return (
    <Row>
      {/* Sidebar with column size 2 */}
      <Col sm={2} className="sidenav-col">
        <Sidenav />
      </Col>
      
      {/* Main content with column size 8 */}
      <Col sm={8} className="main-content-col d-flex justify-content-end">
        <div className="feedback-container" style={{ maxWidth: '600px', width: '100%', padding: '20px', textAlign: 'left', marginTop: '10px' }}>
          <h2>We value your feedback!</h2>
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="feedback-form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="feedbackType">Feedback Type:</label>
                <select
                  id="feedbackType"
                  name="feedbackType"
                  value={formData.feedbackType}
                  onChange={handleChange}
                >
                  <option value="general">General Feedback</option>
                  <option value="book-request">Book Request</option>
                  <option value="website-issue">Website Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="rating">Rating:</label>
                <input
                  type="range"
                  id="rating"
                  name="rating"
                  min="1"
                  max="5"
                  value={formData.rating}
                  onChange={handleChange}
                />
                <span>{formData.rating} Stars</span>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-button">Submit Feedback</button>
            </form>
          ) : (
            <div className="thank-you-message">
              <h3>Thank you for your feedback!</h3>
              <p>We appreciate your time and effort to share your thoughts with us.</p>
            </div>
          )}
        </div>
      </Col>
    </Row>
  );
}

export default Feedback;
