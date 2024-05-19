import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import aPropos from '../assets/aPropos.png';

function About() {
  return (
    <div>
      <Header />
      <div
        className='style_section'
        style={{
          width: '95%',
          height: '30vh',
          backgroundImage: `url(${aPropos})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9,
          filter: 'brightness(0.5)',
        }}
      ></div>
      <Footer />
    </div>
  );
}

export default About;
