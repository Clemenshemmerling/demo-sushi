import React from 'react';
import PublicNavbar from '../components/navbars/PulicNavbar';

const PublicLayout = ({ children }) => {
  return (
    <>
      <PublicNavbar />
      {children}
    </>
  );
}

export default PublicLayout;