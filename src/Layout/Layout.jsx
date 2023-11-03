import React from 'react';
import Navbar from '../components/Navbar';

function Layout({ children }) {
  return (
    <div className="relative">
      <Navbar />
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  );
}

export default Layout;
