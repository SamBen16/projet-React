import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeSubHeaderSection from '../components/HomeSubHeaderSection';
import Gallery from '../components/Gallery';

function Home() {
    return (
        <div>
            <Header />
                <div>
                    <HomeSubHeaderSection />
                    <div className="bodyGallery">
                        <Gallery />
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default Home;