import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';

export default function Services() {
    return (
        <> 
        <div className="services-bg">
            <h2>Our Services</h2>
        </div>         
          <Cards />
          <Footer />
        </>
      );
}