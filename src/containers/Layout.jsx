import React from 'react';
import NavBar from '../components/navigation/NavBar';
import Footer from '../components/footer/Footer';

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
