import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='container-fluid loginbody'>
      <div className='main'>
        <div className='block'>
          <h1>Dreamscape Reads</h1>
          <h4>UserName</h4>
          <input type="text" placeholder='Enter your User Name' /><br /><br />
          <h4>Password</h4>
          <input type="password" placeholder='Enter your Password' />
        </div>
        <div className='signup'>
          <Link to='/Dashboard'>
            <button>Log in</button>
          </Link>
          <div className='skip-option'>
            <Link to='/Dashboard'>
              <h3>Skip</h3>
            </Link>
          </div>
          <br /><br />
          <Link to='/signup'>
            <h3>Sign up?</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
