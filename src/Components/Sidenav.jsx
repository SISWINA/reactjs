import React, { useState } from 'react';
import Img from '../Assets/icon.png';
import { Link, useNavigate } from 'react-router-dom';

function Sidenav() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    navigate(`/${category}`);
  };

  return (
    <div className='sidenav'>
      <div className='sidenav-header'>
        <p>WELCOME</p>
        <img src={Img} alt="Logo" className='logo' />
      </div>
      <div className='sidenav-content'>
        <ul className='nav-links'>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><Link to='/aboutus'>About Us</Link></li>
          <li><Link to='/genre-stats'>Genre Stats</Link></li> {/* New Pie Charts link */}
          <li><Link to='/feedback'>Feedback</Link></li> {/* New Feedback form link */}
        </ul>
        <div className='categories'>
          <h3>Categories</h3>
          <ul className='category-list'>
            <li>
              <input
                type='checkbox'
                id='best-sellers'
                checked={selectedCategory === 'best'}
                onChange={() => handleCategoryChange('best')}
              />
              <label htmlFor='best-sellers'>Best Sellers</label>
            </li>
            <li>
              <input
                type='checkbox'
                id='fictional'
                checked={selectedCategory === 'fictional'}
                onChange={() => handleCategoryChange('fictional')}
              />
              <label htmlFor='fictional'>Fictional</label>
            </li>
            <li>
              <input
                type='checkbox'
                id='mystery'
                checked={selectedCategory === 'mystery'}
                onChange={() => handleCategoryChange('mystery')}
              />
              <label htmlFor='mystery'>Mystery</label>
            </li>
            <li>
              <input
                type='checkbox'
                id='self-help'
                checked={selectedCategory === 'self'}
                onChange={() => handleCategoryChange('self')}
              />
              <label htmlFor='self'>Self-Help</label>
            </li>
            <li>
              <input
                type='checkbox'
                id='autobiography'
                checked={selectedCategory === 'autobio'}
                onChange={() => handleCategoryChange('autobio')}
              />
              <label htmlFor='autobio'>Auto-biography</label>
            </li>
          </ul>
        </div>
        <Link to='/reactjs' className='logout-link'><p>Logout</p></Link>
      </div>
    </div>
  );
}

export default Sidenav;
