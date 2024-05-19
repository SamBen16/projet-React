import React from 'react';
import LOGO from '../assets/LOGO.png';

function Footer() {
	return (
        <div className="style-footer">
            <div className="logo_footer">
                <img src={LOGO} alt='logo KASA' />
            </div>
            <div className="copyRight_footer">
                <div className="banniereCopyRight">© 2020 Kasa. All rights reserved</div>
            </div>
        </div>
    );	
}

export default Footer