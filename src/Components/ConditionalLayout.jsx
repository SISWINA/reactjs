import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidenav from './Sidenav'; // Import the Sidenav component

function ConditionalLayout({ children }) {
  const location = useLocation();
  const isAuthPage = location.pathname === '/reactjs' || location.pathname === '/signup';

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
