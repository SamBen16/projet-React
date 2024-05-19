import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeSubHeaderSection from '../components/HomeSubHeaderSection';

function Home() {
    return (
        <div>
            <Header />
            <div>
            <HomeSubHeaderSection />
            </div>
            <Footer />
        </div>
    );
}

export default Home;