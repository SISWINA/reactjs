import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    navigate('/reactjs');
  };

  return (
    <div className="container-fluid loginbody">
      <div className="main">
        <div className="block2">
          <form onSubmit={handleSubmit}>
            <h4>Enter your Name</h4>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <br /><br />
            <h4>Enter your email id</h4>
            <input
              type="email"
              name="email"
              placeholder="Email id"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <br /><br />
            <h4>Create user name</h4>
            <input
              type="text"
              name="username"
              placeholder="Create User Name"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <br /><br />
            <h4>Create Password</h4>
            <input
              type="password"
              name="password"
              placeholder="Create your Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <br /><br />
            <h4>Confirm password</h4>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <br /><br />
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
