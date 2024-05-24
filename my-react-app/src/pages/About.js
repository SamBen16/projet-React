import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParentCollapse from '../components/ParentCollapse';
import '../index.scss';

function About() {
    return (
        <div>
            <Header />
            <div className='style_section_about'>
            </div>
            <ParentCollapse />
            <Footer />
        </div>
    );
}

export default About;