// app/layout.tsx

import React from 'react';
import Header from '../Components/Header'; // Import your Header component
import Footer from '../Components/Footer'
import Footer2 from '../Components/Footer2'
import './globals.css'; // Global styles

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header /> {/* Header Component */}
        <main>{children}</main> {/* Render children content here */}
        <Footer />
        <Footer2 />
      </body>
    </html>
  );
}
