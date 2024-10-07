import React from 'react';
import Footer from './Footer'; // Import your footer component

const Layout = ({ children }) => {
  return (
    <div>
      {children} {/* This will render the page content */}
      <Footer /> {/* Include only the footer here */}
    </div>
  );
};

export default Layout;
