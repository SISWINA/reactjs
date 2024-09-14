import React from 'react'
import Img from '../Assets/icon.png'
import { Link } from 'react-router-dom'
function Sidenav() {
  return (
    <div className='sidenav'>
        <p>WELCOME</p>
        <img src={Img} alt="" style={{width:'100px'}} />
        <ul>
            <Link to='/dashboard'><li>Dashboard</li></Link>
            <Link to='/aboutus'><li>About Us</li></Link>
            <Link to='/feedback'><li>Feedback</li></Link>
        </ul>
        <Link to='/reactjs'> <p>Logout</p></Link>
    </div>
  )
}

export default Sidenav