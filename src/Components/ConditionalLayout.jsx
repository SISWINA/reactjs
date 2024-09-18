import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidenav from './Sidenav'; 

function ConditionalLayout({ children }) {
  const location = useLocation();

  const isAuthPage = location.pathname === '/signup' || 
                     location.pathname === '/login' || 
                     location.pathname.includes('/reactjs');

  return (
    <>
      {/* Render Sidenav on all pages except authentication pages */}
      {!isAuthPage && <Sidenav />}
      
      {/* Render the main content */}
      {children}
    </>
  );
}

export default ConditionalLayout;
