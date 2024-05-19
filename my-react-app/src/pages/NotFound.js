import React from 'react';
import { Link } from 'react-router-dom'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import pageErreur from '../assets/404.png'; 
import retourPageDaccueil from '../assets/retourPageDaccueil.png'; 

function NotFound() {
  return (
    <div>
      <Header />
      <div className="style-pageErreur">
        <img src={pageErreur} alt="page 404" id="page_404" />
        <p className="oupsErrorPc">Oups! La page que vous demandez n'existe pas.</p>
        <p className="oupsErrorMobile">Oups! La page que<br></br> vous demandez n'existe pas.</p>
        <div>
          <Link to="/"><img src={retourPageDaccueil} alt="retour page d'accueil" id="retour_page_accueil" /></Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
