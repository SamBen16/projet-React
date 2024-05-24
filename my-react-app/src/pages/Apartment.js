import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from '../pages/NotFound';
import { dataList } from '../data/data';
import Collapse from '../components/Collapse';
import suivant from '../assets/suivant.png'; 
import precedent from '../assets/precedent.png'; 

function Apartment() {
    const { id } = useParams();
    const apartment = dataList.find(item => item.id === id);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if(!apartment) {
        return <NotFound />;
    }

    const images = [...apartment.pictures];

    function renderTags(tags) {
        return tags.map((tag, index) => (
            <span key={index}>{tag}</span>
        ));
    }

    function renderStars(item) {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < item.rating) {
                stars.push(<span key={i} className="redStars">★</span>);
            } else {
                stars.push(<span key={i} className="greyStars">★</span>);
            }
        }
        return stars;
    }

    function handleNextImage() {
        setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }

    function handlePreviousImage() {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }

    return (
        <div id="apartment">
            <Header />
            <div className="carousel">
                <div className="image-container">
                    <img src={images[currentImageIndex]} alt={`Picture ${currentImageIndex +1}`} />
                    {images.length > 1 && (
                        <>
                            <img src={precedent} alt="previous" className="carousel-button previous" onClick={handlePreviousImage}  />
                            <img src={suivant} alt="next" className="carousel-button next" onClick={handleNextImage} />
                            <div className="image-counter" id="imageCounterDesktop">{currentImageIndex + 1}/{images.length}</div>
                        </>
                    )}
                </div>
            </div>
            
            <div className="bodyApartment">
                <div id="tags">
                    <h1 className="titleApartment">{apartment.title}</h1>
                    <p className="locationApartment">{apartment.location}</p>
                    <p className="apartmentTags">{renderTags(apartment.tags)}</p>
                </div>
                <div id="nameRating">
                    <div id="name">
                        <p className="hostName">{apartment.host.name}</p>
                        <img src={apartment.host.picture} alt={apartment.host.name} className="imgName" />
                    </div>
                    <div id="rating">
                        <p>{renderStars(apartment)}</p>
                    </div>
                </div>
            </div>

            <div id="apartmentCollapse">
                <div id="collapseDescription">
                    <Collapse title="Description" description={apartment.description} />
                </div>
                <div id="collapseEquipements">
                    <Collapse title="Equipements" description={apartment.equipments} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Apartment;
