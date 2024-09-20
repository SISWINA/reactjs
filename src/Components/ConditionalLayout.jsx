import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidenav from './Sidenav';
import TopNav from './TopNav'; 

function ConditionalLayout({ children }) {
  const location = useLocation();
  
  // Determine if the current path is one of the authentication pages
  const isAuthPage = location.pathname === '/reactjs' || location.pathname === '/signup';

  return (
    <>
      {/* Render TopNav and Sidenav only if not on an authentication page */}
      {!isAuthPage && (
        <>
          <TopNav />
          <Sidenav />
        </>
      )}
      
      {/* Render the main content */}
      <div className={isAuthPage ? 'auth-content' : 'main-content'}>
        {children}
      </div>
    </>
  );
}

export default ConditionalLayout;
