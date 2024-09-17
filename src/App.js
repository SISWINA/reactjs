import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './Components/ScrollToTop';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import CartPage from './Components/CartPage';
import Sidenav from './Components/Sidenav';
import CheckoutPage from './Components/CheckoutPage'
import Self from './Pages/Self';
import Mystery from './Pages/Mystery';
import Autobio from './Pages/Autobio';
import Fictional from './Pages/Fictional';
import SingleItem from './Pages/SingleItem';
import SingleItem1 from './Pages/SingleItem1';
import SingleItem2 from './Pages/SingleItem2';
import SingleItem3 from './Pages/SingleItem3';
import AboutUs from './Pages/AboutUs';
import Feedback from './Pages/Feedback';

function App() {
  return (
    <div className='container-fluid'>
      <Router>
        <ScrollToTop />
        <ConditionalLayout>
          <Routes>
            <Route path='/reactjs' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path='/self' element={<Self />} />
            <Route path='/mystery' element={<Mystery />} />
            <Route path='/autobio' element={<Autobio />} />
            <Route path='/fictional' element={<Fictional />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/self/:id' element={<SingleItem />} />
            <Route path='/mystery/:id' element={<SingleItem1 />} />
            <Route path='/autobio/:id' element={<SingleItem2 />} />
            <Route path='/fictional/:id' element={<SingleItem3 />} />
          </Routes>
        </ConditionalLayout>
      </Router>
    </div>
  );
}

function ConditionalLayout({ children }) {
  const location = useLocation();
  const isAuthPage = location.pathname === '/reactjs' || location.pathname === '/signup';

  return (
    <>
      {/* Render Sidenav and Cart on all pages except authentication pages */}
      {!isAuthPage && <Sidenav />}
      
      {/* Render the main content */}
      {children}
    </>
  );
}

export default App;
