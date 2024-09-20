import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidenav from './Sidenav';
import TopNav from './TopNav';

function ConditionalLayout({ children }) {
  const location = useLocation();

  // Check for authentication pages
  const isAuthPage = location.pathname === '/signup' || 
                     location.pathname === '/login';

  // Check for pages where Sidenav and TopNav should be hidden
  const hideNav = location.pathname.includes('/reactjs');

  return (
    <>
      {/* Render TopNav only if not on auth or reactjs pages */}
      {!isAuthPage && !hideNav && <TopNav />}

      {/* Render Sidenav only on non-auth and non-sidenav hidden pages */}
      {!isAuthPage && !hideNav && <Sidenav />}

      {/* Render the main content */}
      {children}
    </>
  );
}

export default ConditionalLayout;
